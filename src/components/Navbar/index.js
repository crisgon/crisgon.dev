import React from "react";
import { Link } from "gatsby";

import * as S from "./styled";

export default function Navbar() {
	return (
		<S.NavbarFullWidth>
			<S.NavbarContainer>
				<S.NavbarLinks>
					<Link to="/blog">Blog</Link>
					<Link to="/about">About</Link>
					<Link to="/contact">Contact</Link>
				</S.NavbarLinks>
			</S.NavbarContainer>
		</S.NavbarFullWidth>
	);
}
