import React from "react";
import * as S from "./styled";

export default function Sidebar({ changeTheme, toggleSidebar, isOpen }) {
	return (
		<S.Sidebar isOpen={isOpen}>
			<button onClick={changeTheme}>Change!!</button>
			<button onClick={toggleSidebar}>Collapse</button>
		</S.Sidebar>
	);
}
