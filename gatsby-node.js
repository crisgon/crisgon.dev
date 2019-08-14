const path = require("path");

module.exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions;

	if (node.internal.type === "MarkdownRemark") {
		let slug = path.basename(node.fileAbsolutePath, ".md");
		slug = slug
			.toLocaleLowerCase()
			.split(" ")
			.filter(word => word !== "-" && word !== "")
			.join("-");

		createNodeField({
			node,
			name: "slug",
			value: slug
		});
	}
};

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const blogTemplate = path.resolve("./src/templates/post.js");

	const res = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	res.data.allMarkdownRemark.edges.forEach(edge => {
		createPage({
			component: blogTemplate,
			path: `/blog/${edge.node.fields.slug}`,
			context: {
				slug: edge.node.fields.slug
			}
		});
	});
};
