// exports.onCreateNode = ({ node, getNode }) => {
//     if (node.internal.type === 'File') {
//         const fileNode = getNode(node.id);
//
//         console.log(`\n`, fileNode.relativeDirectory);
//     }
// };
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators;

    if (node.internal.type === 'File' && node.id.search(/images/) > -1) {
        const slug = `${node.relativeDirectory.replace('images', '')}/`;

        createNodeField({
            node,
            name: 'slug',
            value: slug,
        });
    }
};
