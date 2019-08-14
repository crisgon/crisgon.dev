import styled from "styled-components";

export const SocialIconsList = styled.div`
	width: 115px;
	display: flex;
	justify-content: space-around;
	font-size: 2rem;

	a {
		color: #fff;
		transition: all 0.3s;

		&:hover {
			transform: translateY(-5px);
		}
	}
`;
