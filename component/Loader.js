import React from "react";
import { useEffect } from "react";
// import "../styles/Loader.css";
const Loader = () => {
	useEffect(() => {
		setTimeout(function () {
			console.log("loded");
			document.body.classList.add("loaded");
		}, 1000);
	}, []);

	return (
		<div id="loader-wrapper">
			<div id="loader"></div>

			<div className="loader-section section-left"></div>
			<div className="loader-section section-right"></div>
		</div>
	);
};

export default Loader;
