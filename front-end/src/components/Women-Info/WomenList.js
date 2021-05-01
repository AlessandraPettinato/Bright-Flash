import { Link } from "react-router-dom";
import WomanCard from "./WomanCard";

import "./womenInfo.css";

export default function WomenList({ data }) {
	return (
		<div className="all-women">
			<h1 className="bright-women">Bright Women</h1>
			<div className="card-container">
				{data.map((img) => (
					<Link to={`/women/${img.id}`}>
						<WomanCard key={img.id} {...img} />
					</Link>
				))}
			</div>
		</div>
	);
}

//extra route to show women info
//pass data

//CHECK BRITNEY
