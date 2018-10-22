const path = require('path');

const languages = require('./src/data/languages');

exports.onCreateNode = ({ boundActionCreators, getNode, node }) => {
    const { createNodeField } = boundActionCreators;

    if (node.internal.type === 'Directory' && node.id.search(/images\//) > -1) {
        const slug = `${node.name}/`;

        return createNodeField({ name: 'slug', node, value: slug });
    }
};

exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators;
    const { langs } = languages;

    return new Promise((resolve) => {
        graphql(`
            {
                allDirectory(filter: { relativePath: { regex: "/images//" } }) {
                    edges {
                        node {
                            fields {
                                slug
                            }
                        }
                    }
                }
                allMarkdownRemark {
                    edges {
                        node {
                            fields {
                                langKey
                                slug
                            }
                            frontmatter {
                                date
                                title
                                type
                            }
                        }
                    }
                }
                site {
                    siteMetadata {
                        languages {
                            defaultLangKey
                            langs
                        }
                    }
                }
            }
        `).then((result) => {
            result.data.allDirectory.edges.forEach(({ node }) => {
                langs.forEach((lang) => {
                    createPage({
                        component: path.resolve('./src/templates/PhotoAlbumTemplate.tsx'),
                        context: {
                            slug: `${lang}/photos/${node.fields.slug}`,
                        },
                        path: `${lang}/photos/${node.fields.slug}`,
                    });
                });
            });
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    component: path.resolve('./src/templates/LyricsAndNewsTemplate.tsx'),
                    context: {
                        slug: node.fields.slug,
                    },
                    path: node.fields.slug,
                });
            });
            resolve();
        });
    });
};
