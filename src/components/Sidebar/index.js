import React from "react";
import { FaInfo } from "react-icons/fa";
import { useStaticQuery, graphql } from "gatsby";
import { IoIosFlask, IoMdHome } from "react-icons/io";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import * as S from "./styled";

export default function Sidebar({ isOpen, blogName, jobRole }) {
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

	const navLinks = [
		{
			title: "Home",
			url: "/",
			icon: <IoMdHome />
		},
		{
			title: "Sobre",
			url: "/about",
			icon: <FaInfo />
		},
		{
			title: "Projetos",
			url: "/projects",
			icon: <IoIosFlask />
		}
	];

	return (
		<S.Sidebar isOpen={isOpen}>
			<S.Avatar fluid={avatarImage.childImageSharp.fluid} isOpen={isOpen} />
			<S.About isOpen={isOpen}>
				<S.Name>{blogName}</S.Name>
				<S.JobRole>{jobRole}</S.JobRole>
			</S.About>

			<S.Nav>
				<S.NavList>
					{navLinks.map(link => (
						<S.NavItem isOpen={isOpen}>
							<AniLink
								cover
								direction="right"
								bg={"#e74c3c"}
								to={link.url}
								activeClassName="active"
							>
								{link.icon}
								<S.LinkText isOpen={isOpen}>{link.title}</S.LinkText>
							</AniLink>
						</S.NavItem>
					))}
				</S.NavList>
			</S.Nav>
		</S.Sidebar>
	);
}
