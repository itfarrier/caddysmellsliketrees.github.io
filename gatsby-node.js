const path = require('path');

const languages = require('./src/data/languages');

exports.onCreateNode = ({ actions, getNode, node }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'Directory' && node.relativePath.search(/images\//) > -1) {
        const slug = `${node.name}/`;

        return createNodeField({ name: 'slug', node, value: slug });
    }
};

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const { langs } = languages;

    return new Promise((resolve) => {
        resolve(
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
            }),
        );
    });
};
