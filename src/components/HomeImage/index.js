import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

import * as S from "./styled";

export default function HomeImage() {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "cristiano.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 396) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<S.HomeImage>
			<Img fluid={data.placeholderImage.childImageSharp.fluid} />
		</S.HomeImage>
	);
}
