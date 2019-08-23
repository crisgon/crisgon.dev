import styled from "styled-components";
import Img from "gatsby-image";

export const Sidebar = styled.aside`
	width: ${props => (props.isOpen ? "200px" : "50px")};
	height: 100vh;
	transition: all 0.5s;
	position: fixed;
	background-color: ${props => props.theme.primary};
`;

export const Avatar = styled(Img)`
	width: ${props => (props.isOpen ? "7.5rem" : "2.5rem")};
	height: ${props => (props.isOpen ? "7.5rem" : "2.5rem")};
	margin: 2rem auto;
	border-radius: 50%;
	transition: all 0.5s;
`;
