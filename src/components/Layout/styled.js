import styled from "styled-components";

export const Container = styled.div`
	width: 100vw;
	position: relative;
`;

export const Main = styled.main`
	width: calc(100vw - ${props => (props.isOpen ? "200px" : "50px")});
	position: absolute;
	right: 0;
	transition: all 0.5s;
	padding: 3rem 1rem;
`;

export const ArrowIcon = styled.div`
	font-size: 2rem;
	color: ${props => (props.isDark ? "#e8e8e8" : "#fff")};
	position: absolute;
	left: 5px;
	top: 0;

	&:hover {
		cursor: pointer;
	}
`;
