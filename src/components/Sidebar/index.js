import React from "react";
import * as S from "./styled";

export default function Sidebar({ changeTheme }) {
	return (
		<S.Sidebar>
			<button onClick={changeTheme}>Change!!</button>
		</S.Sidebar>
	);
}
