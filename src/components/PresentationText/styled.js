import styled from "styled-components";
import media from "styled-media-query";

export const PresentationContainer = styled.div`
	width: 400px;
	line-height: 3.5rem;
	font-weight: bolder;

	${media.lessThan("medium")`
		width: 250px;
	`}

	${media.lessThan("small")`
		width: 100%;
	`}
`;

export const PresentationText = styled.h1`
	color: #271f38;
	font-size: 3rem;

	${media.lessThan("medium")`
		font-size: 2rem;
	`}

	${media.lessThan("small")`
	font-size: 1.5rem;
	`}

	span {
		color: #fff;
	}
`;

export const JobRole = styled.h2`
	color: #3fcbc6;
	font-size: 1.5rem;
`;
