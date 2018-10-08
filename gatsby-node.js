// exports.onCreateNode = ({ node, getNode }) => {
//     if (node.internal.type === 'File') {
//         const fileNode = getNode(node.id);
//
//         console.log(`\n`, fileNode.relativeDirectory);
//     }
// };
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode }) => {
    if (node.internal.type === 'File' && node.id.search(/images/) > -1) {
        console.log(createFilePath({ node, getNode, basePath: 'photos' }));
    }
};
