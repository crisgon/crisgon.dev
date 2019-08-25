import { ThemeProvider } from "styled-components";
import React, { useState, useEffect } from "react";
import { FaLightbulb } from "react-icons/fa";
import { MdSubject } from "react-icons/md";
import PropTypes from "prop-types";

import Sidebar from "../Sidebar";

import GlobalStyles from "../../styles/global";
import { darktheme, lightTheme } from "./theme";

import * as S from "./styled";
import { TransitionPortal } from "gatsby-plugin-transition-link";

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
					<TransitionPortal level="top">
						<Sidebar
							toggleSidebar={collapseSidebar}
							isOpen={sidebarIsOpen}
							blogName={"Cristiano Gonçalves"}
							jobRole={"Desenvolvedor Front End"}
						/>
					</TransitionPortal>

					<TransitionPortal level="bottom">
						<S.Main isOpen={sidebarIsOpen}>
							<S.ArrowIcon onClick={collapseSidebar} isDark={hasLightTheme}>
								<MdSubject />
							</S.ArrowIcon>
							{children}

							<S.ChangeThemeButton onClick={changeTheme} isOpen={sidebarIsOpen}>
								<FaLightbulb />
							</S.ChangeThemeButton>
						</S.Main>
					</TransitionPortal>
				</S.Container>
			</>
		</ThemeProvider>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
