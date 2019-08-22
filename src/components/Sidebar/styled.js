import styled from "styled-components";

export const Sidebar = styled.aside`
	width: ${props => (props.isOpen ? "200px" : "50px")};
	height: 100vh;
	transition: all 0.5s;
	position: fixed;
	background-color: ${props => props.theme.primary};
`;
