import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import Navbar from "../components/Navbar";
import ContainerFullWidth from "../components/ContainerFullWidth";

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
			<ContainerFullWidth>
				<SEO title="Blog" />
				<Navbar />
				<ul>
					{data.allMarkdownRemark.edges.map(({ node }) => (
						<li>
							<Link key={node.fields.slug} to={`/blog/${node.fields.slug}`}>
								{node.frontmatter.title}
							</Link>
							<p>{node.frontmatter.date}</p>
						</li>
					))}
				</ul>
				<Link to="/">Go back to the homepage</Link>
			</ContainerFullWidth>
		</Layout>
	);
};

export default Blog;
