import styled from "styled-components";
import Img from "gatsby-image";

export const Sidebar = styled.aside`
	width: ${({ isOpen }) => (isOpen ? "250px" : "50px")};
	height: 100vh;
	transition: all 0.5s;
	position: fixed;
	background-color: ${({ theme }) => theme.primary};
`;

export const Avatar = styled(Img)`
	width: ${({ isOpen }) => (isOpen ? "7.5rem" : "2.5rem")};
	height: ${({ isOpen }) => (isOpen ? "7.5rem" : "2.5rem")};
	margin: 2rem auto;
	border-radius: 50%;
	transition: all 0.5s;
`;

export const About = styled.div`
	display: ${({ isOpen }) => (isOpen ? "block" : "none")};
	text-align: center;
`;

export const Name = styled.h1`
	font-size: 1.5rem;
`;

export const JobRole = styled.h2`
	font-size: 1rem;
	opacity: 0.8;
	padding: 0.5rem 0;
`;

export const Nav = styled.nav``;

export const NavList = styled.ul`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem 0;
`;

export const NavItem = styled.li`
	padding: 0.5rem 0;
	a {
		color: ${({ theme }) => theme.fontColor};
		font-size: ${({ isOpen }) => (isOpen ? "1.3rem" : "1.7rem")};
		text-decoration: none;
		display: flex;

		&:hover,
		&.active {
			color: ${({ theme }) => theme.secondary};
		}
	}
`;

export const LinkText = styled.span`
	display: ${({ isOpen }) => (isOpen ? "block" : "none")};
	padding: 0 0.5rem;
`;
