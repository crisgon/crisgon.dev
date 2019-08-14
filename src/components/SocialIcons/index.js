import React from "react";
import {
	FaTwitterSquare,
	FaGithubSquare,
	FaFacebookSquare
} from "react-icons/fa";

import * as S from "./style";

export default function SocialIcons() {
	return (
		<S.SocialIconsList>
			<a href="https://twitter.com/Gonkristiano" target="blank">
				<FaTwitterSquare />
			</a>

			<a href="https://github.com/crisgon" target="blank">
				<FaGithubSquare />
			</a>

			<a href="https://www.facebook.com/cris.gonn" target="blank">
				<FaFacebookSquare />
			</a>
		</S.SocialIconsList>
	);
}
