import styled from "styled-components";
import media from "styled-media-query";

export const HomeImage = styled.div`
	width: 294px;
	height: 386px;
	position: relative;

	img {
		border-radius: 10px;
	}

	&:before {
		content: "";
		width: 278px;
		height: 386px;
		border-radius: 10px;
		position: absolute;
		top: -30px;
		left: 30px;
		border: 8px solid #271f38;
	}

	${media.lessThan("medium")`
		width: 194px;
		height: 286px;

		&:before {
			width: 178px;
			height: 286px;
		}
	`}

	${media.lessThan("small")`
		display: none;
	`}
`;
