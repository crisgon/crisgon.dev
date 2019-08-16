import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

import SEO from "../components/seo";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeImage from "../components/HomeImage";
import SocialIcons from "../components/SocialIcons";
import PresentationText from "../components/PresentationText";
import ContainerFullWidth from "../components/ContainerFullWidth";

const HomeContainer = styled.section`
	width: 900px;
	height: 400px;
	padding: 0 3rem;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;

	${media.lessThan("medium")`
		width: 600px;
	`}

	${media.lessThan("small")`
		width: 300px;
		justify-content: center;
	`}
`;

const TextAndIcons = styled.div`
	height: 400px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

export default function Home() {
	return (
		<Layout>
			<ContainerFullWidth>
				<SEO title="Home" />
				<Navbar />
				<HomeContainer>
					<TextAndIcons>
						<PresentationText />
						<SocialIcons />
					</TextAndIcons>
					<HomeImage />
				</HomeContainer>
				<Footer />
			</ContainerFullWidth>
		</Layout>
	);
}
