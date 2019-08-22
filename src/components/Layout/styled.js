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
	padding: 1rem;
`;
