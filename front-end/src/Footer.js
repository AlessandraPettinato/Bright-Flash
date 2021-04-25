import { useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import "./Footer.css";
//import css

function Footer() {
	let location = useLocation();
	return (
		location.pathname !== "/" && (
			<div className="footerpage-container">
				<footer className="main-footer">
					<h1 className="quotes">
						"When uniques voices are united in a common cause, they make
						history"
					</h1>
					<div className="container">
						<img
							className="icon"
							src="https://res.cloudinary.com/dnefeccae/image/upload/v1618531048/Bright%20flash/instagram-logo_eqmuft.png"
						/>
						<img
							className="icon"
							src="https://res.cloudinary.com/dnefeccae/image/upload/v1618531084/Bright%20flash/email-logo_q0ectn.png"
						/>
						<div className="nav_about">
							<h2>ABOUT US</h2>
						</div>
					</div>
				</footer>
			</div>
		)
	);
}

export default Footer;
