import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Blog = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							title
							date
						}
						fields {
							slug
						}
					}
				}
			}
		}
	`);
	return (
		<Layout>
			<SEO title="Blog" />
			<ul>
				{data.allMarkdownRemark.edges.map(({ node }) => (
					<li>
						<AniLink
							cover
							direction="left"
							bg={"red"}
							key={node.fields.slug}
							to={`/blog/${node.fields.slug}`}
						>
							{node.frontmatter.title}
						</AniLink>
						<p>{node.frontmatter.date}</p>
					</li>
				))}
			</ul>
			<AniLink cover direction="left" bg={"red"} to="/">
				Go back to the homepage
			</AniLink>
		</Layout>
	);
};

export default Blog;
