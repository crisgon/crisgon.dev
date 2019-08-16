import styled from "styled-components";
import media from "styled-media-query";

export const NavbarFullWidth = styled.nav`
	width: 100%;
	height: 50px;
`;

export const NavbarContainer = styled.div`
	width: 800px;
	height: 100%;
	margin: 0 auto;

	${media.lessThan("small")`
		width: 100%;
	`}
`;

export const NavbarLinks = styled.ul`
	width: 200px;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	${media.lessThan("small")`
		width: 100%;
    justify-content: space-around;
	`}

	a {
		font-weight: bold;
		text-decoration: none;
		color: #fff;
		position: relative;

		&:after {
			content: "";
			width: 0%;
			height: 2px;
			background-color: #fff;
			position: absolute;
			bottom: -5px;
			left: 0;
			transition: all 0.3s;
		}

		&:hover {
			&:after {
				width: 100%;
			}
		}
	}
`;
