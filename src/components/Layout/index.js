import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

import Sidebar from "../Sidebar";

import GlobalStyles from "../../styles/global";
import { darktheme, lightTheme } from "./theme";

import * as S from "./styled";

const Layout = ({ children }) => {
	const [hasLightTheme, setHasLightTheme] = useState(true);
	const [sidebarIsOpen, setSidebarIsOpen] = useState(true);

	useEffect(() => {
		const localStorageTheme = localStorage.getItem("hasLightTheme");
		const localStorageSidebar = localStorage.getItem("sidebarIsCollapse");

		if (localStorageTheme) {
			setHasLightTheme(JSON.parse(localStorageTheme));
		}

		if (localStorageSidebar) {
			console.log(localStorageSidebar);
			setSidebarIsOpen(JSON.parse(localStorageSidebar));
		}
	}, []);

	const changeTheme = async () => {
		setHasLightTheme(!hasLightTheme);
		localStorage.setItem("hasLightTheme", !hasLightTheme);
	};

	const collapseSidebar = () => {
		setSidebarIsOpen(!sidebarIsOpen);
		localStorage.setItem("sidebarIsCollapse", !sidebarIsOpen);
	};

	return (
		<ThemeProvider theme={hasLightTheme ? lightTheme : darktheme}>
			<>
				<GlobalStyles />
				<S.Container isOpen={sidebarIsOpen}>
					<Sidebar
						changeTheme={changeTheme}
						toggleSidebar={collapseSidebar}
						isOpen={sidebarIsOpen}
					/>
					<S.Main isOpen={sidebarIsOpen}>{children}</S.Main>
				</S.Container>
			</>
		</ThemeProvider>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
