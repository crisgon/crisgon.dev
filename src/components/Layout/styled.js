import styled from "styled-components";

export const Container = styled.div`
	position: relative;
`;

export const Main = styled.main`
	width: calc(100vw - ${({ isOpen }) => (isOpen ? "250px" : "50px")});
	min-height: 100vh;
	position: relative;
	left: ${({ isOpen }) => (isOpen ? "250px" : "50px")};
	transition: all 0.5s;
	padding: 3rem 0.5rem;
`;

export const ArrowIcon = styled.div`
	font-size: 2rem;
	color: ${({ isDark }) => (isDark ? "#e8e8e8" : "#fff")};
	position: absolute;
	left: 5px;
	top: 0;

	&:hover {
		cursor: pointer;
	}
`;

export const ChangeThemeButton = styled.button`
	color: ${({ theme }) => theme.secondary};
	text-align: center;
	background-color: transparent;
	border: 0;
	position: absolute;
	top: 10px;
	right: 10px;
	font-size: 1.2rem;

	&:hover {
		color: ${({ theme }) => theme.secondary};
		cursor: pointer;
	}
`;
