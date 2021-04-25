import { useEffect, useState } from "react";
import { ImageMap } from "@qiuz/react-image-map";
// import { useMediaQuery } from "react-responsive";

import LandingPageMenu from "./LandingPageMenu";

import "./Home.css";

const HomePage = () => {
	const [showMenu, setShowMenu] = useState(false);

	const img =
		"https://res.cloudinary.com/dg5lakmem/image/upload/v1619255445/Bright%20Flash/collage-menu_bnx0n7.jpg";
	const mapArea = [
		{
			width: "23.448625180897245%",
			height: "23.615541922290383%",
			left: "22.431259044862518%",
			top: "4.498977505112485%",
		},
	];
	const onMapClick = () => {
		setShowMenu(!showMenu);
	};

	// const isDesktop = useMediaQuery({
	// 	query: "(min-device-width: 1224px)",
	// });

	// const isMobile = useMediaQuery({
	// 	query: "(max-device-width: 600px)",
	// });
	return (
		<div>
			{/* {isDesktop && (
				<> */}
			<div className="body-cover">
				{showMenu ? <LandingPageMenu /> : ""}

				<ImageMap
					className="collage-click"
					src={img}
					map={mapArea}
					onMapClick={onMapClick}
				/>
			</div>
			{/* </>
			)} */}

			{/* MOBILE VERSION. Desktop CSS all the display are = none. They are activated again in mediaquery. */}
			<div>
				<img
					className="mobile-pic"
					src="https://res.cloudinary.com/dg5lakmem/image/upload/v1618422713/Bright%20Flash/Women-bright-flash_ozg2mg.jpg"
				/>
			</div>
			<h1 className="mobile-title">MOBILE TITLE</h1>
			<p className="mobile-intro">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
				nec dignissim odio. Proin eget rhoncus est. Cras sollicitudin, leo quis
				varius venenatis.
			</p>
			<br />
			<p className="mobile-intro">
				Orci odio pellentesque nulla, sit amet mattis lacus felis et magna.
				Etiam molestie odio lacinia, lacinia justo eu, sollicitudin nulla.
				Mauris eget dictum justo.
			</p>
			<div className="button-container">
				<button className="play-now">Play now!</button>
			</div>
		</div>
	);
};

export default HomePage;
