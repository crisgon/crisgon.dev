import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import * as S from "./styled";

export default function Sidebar({ changeTheme, isOpen }) {
	const { avatarImage } = useStaticQuery(
		graphql`
			query {
				avatarImage: file(relativePath: { eq: "cristiano.jpg" }) {
					childImageSharp {
						fluid(maxWidth: 150) {
							...GatsbyImageSharpFluid_tracedSVG
						}
					}
				}
			}
		`
	);

	return (
		<S.Sidebar isOpen={isOpen}>
			{/* <button onClick={changeTheme}>Change!!</button> */}
			<S.Avatar fluid={avatarImage.childImageSharp.fluid} isOpen={isOpen} />
		</S.Sidebar>
	);
}
