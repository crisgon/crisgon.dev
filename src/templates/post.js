import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				date
			}
			html
		}
	}
`;
export const BlogPost = props => {
	return (
		<Layout>
			<Link to="/blog">Go back to the blogpage</Link>
			<h1>{props.data.markdownRemark.frontmatter.title}</h1>
			<p>{props.data.markdownRemark.frontmatter.date}</p>
			<div
				dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
			></div>
		</Layout>
	);
};

export default BlogPost;
