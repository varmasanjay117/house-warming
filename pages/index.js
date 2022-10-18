import styled from "styled-components";
import React from "react";
import { motion } from "framer-motion";

import Loader from "../component/Loader";
// import bg from "/images/background-image.svg";
const index = () => {
	return (
		<>
			<Loader />
			<IndexStyle className="hello">
				<motion.div
					initial={{
						opacity: 0,
					}}
					whileInView={{
						opacity: 1,
					}}
					transition={{
						duration: 5,
					}}
					className="top-right"
				>
					<img src="/images/top-right-image.svg" alt=""></img>
				</motion.div>
				<div className="right-bottom">
					<img src="/images/bottom-right.svg" alt=""></img>
				</div>

				<div className="container">
					<div className="main-kalsh-container">
						<div className="kalash-img">
							<motion.img
								initial={{
									y: -100,
									opacity: 0,
								}}
								transition={{
									duration: 4,
								}}
								whileInView={{
									opacity: 1,
									y: 0,
								}}
								viewport={{
									once: true,
								}}
								src="/images/kalash.svg"
								alt=""
							/>
						</div>
					</div>
					<div className="main-invention">
						<div className="heading">PLEASE JOIN US FOR </div>
						<div className="sub-heading">House Warmimg</div>
						<div className="timing">OCT 22, SAT 12 NOON</div>
						<div className="location">
							Venue : Flat No 608, Orchid Gagangiri Vihar Complex, near-Gagangiri , Khopoli
						</div>
						{/* <div className="google-map-location">location:- </div> */}
					</div>
				</div>
			</IndexStyle>
		</>
	);
};
const IndexStyle = styled.section`
	@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
	@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap");
	@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
	/* @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
	@import url("https://fonts.googleapis.com/css2?family=Pangolin&display=swap");

	text-align: center;
	font-weight: 400;

	& h1 {
		font-family: "Roboto", sans-serif;
	}

	& h2 {
		font-family: "Pangolin", sans-serif;
	} */
	/* background: yellow; */
	position: relative;
	overflow: hidden;
	background-image: url("/images/background-images.svg");
	background-position: center;
	background-repeat: no-repeat, no-repeat;
	height: 100vh;
	width: 100vw;

	z-index: -1;
	.top-right {
		img {
			width: 16%;
			position: absolute;
			top: 0;
			left: 0;
		}
		position: absolute;

		z-index: 1;
		height: 100vh;
		width: 100vw;
	}
	.right-bottom {
		position: absolute;
		img {
			width: 16%;
			position: absolute;
			bottom: 0;
			right: 0;
		}
		z-index: 2;
		height: 100vh;
		width: 100vw;
	}

	.container {
		display: grid;
		grid-template-columns: 35vw 65vw;
		height: 100vh;
		width: 100vw;
	}

	.main-kalsh-container {
		.kalash-img {
			position: absolute;
			top: 21%;
			img {
				height: 100%;
				width: 100%;
			}
		}
	}

	.main-invention {
		position: relative;
		top: 28%;
		margin: 2rem;

		/* margin-top: 12.5rem; */
		.heading {
			margin-left: 7rem;
			font-family: "Inter";
			font-style: normal;
			font-weight: 800;
			font-size: 36px;
			line-height: 44px;
			text-align: center;
			display: flex;
			align-items: center;
			color: #c26d6d;
		}
		.sub-heading {
			font-family: "Dancing Script";
			font-style: normal;
			font-weight: 700;
			font-size: 96px;
			line-height: 115px;
			letter-spacing: 0.1em;
			color: #573939;
			text-shadow: 18px -3px 4px rgba(0, 0, 0, 0.25);
		}
		.timing {
			margin-left: 7rem;
			font-family: "Anton";
			font-style: normal;
			font-weight: 400;
			font-size: 48px;
			line-height: 72px;
			letter-spacing: 0.1em;
			color: #000000;
		}
		.location {
			font-family: "Anton";
			font-style: normal;
			font-weight: 400;
			font-size: 36px;
			line-height: 54px;
			letter-spacing: 0.1em;
			color: #000000;
		}
	}

	@media (max-width: 500px) {
		.top-right {
			img {
				width: 30%;
			}
		}
		.right-bottom {
			img {
				width: 30%;
			}
		}
		.container {
			grid-template-columns: 1fr;
			.kalash-img {
				display: flex;
				justify-content: center;
				align-items: center;
				position: absolute;
				top: 8%;
				left: 43px;
				img {
					width: 85%;
				}
			}
			.main-invention {
				position: absolute;
				top: 45%;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				padding: 1rem;
				margin: 0rem;

				.heading {
					font-size: 18px;
					margin: 0;
				}
				.sub-heading {
					font-size: 2.7rem;
					line-height: 35px;
				}
				.timing {
					margin: 0;
					font-size: 28px;
					line-height: 68px;
				}
				.location {
					font-size: 16px;
					line-height: 26px;
				}
			}
		}
	}
`;
export default index;
