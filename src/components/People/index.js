"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "images/person/1.jpg";
import img2 from "images/person/2.jpg";
import img3 from "images/person/3.jpg";
import img4 from "images/person/4.jpg";

const People = () => {
	const [activeTab, setActiveTab] = useState("Groomsman");

	return (
		<div id="people" className="person-area person-area2 pt--100 pb--70">
			<div className="container">
				<div className="col-l2">
					<div className="section-title text-center">
						<h2>I Testimoni</h2>
					</div>
				</div>

				<div className="person-area-menu">
					{/* Tabs */}
					<div className="person-btn">
						<ul className="nav nav-tabs d-flex">
							<li className={`${activeTab === "Groomsman" ? "active active-2" : ""}`}>
								<a
									href="#Groomsman"
									onClick={(e) => {
										e.preventDefault();
										setActiveTab("Groomsman");
									}}>
									Dello Sposo
								</a>
							</li>
							<li className={`${activeTab === "Bride" ? "active active-2" : ""}`}>
								<a
									href="#Bride"
									onClick={(e) => {
										e.preventDefault();
										setActiveTab("Bride");
									}}>
									Della Sposa
								</a>
							</li>
						</ul>
					</div>

					<div className="tab-content">
						<AnimatePresence mode="wait">
							{activeTab === "Groomsman" && (
								<motion.div
									key="Groomsman"
									id="Groomsman"
									className="tab-pane fade show active"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.5 }}>
									<div className="Groomsman-wrap">
										<div className="row">
											<div className="col-lg-6 col-md-6 col-sm-6">
												<div className="person-wrap">
													<div className="person-img">
														<img src={img1} alt="" />
													</div>
													<div className="person-content">
														<h3>Lorenzo Bianchi</h3>
														<span>
															Amico storico dell’università, partner di avventure e viaggi in montagna
														</span>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-6">
												<div className="person-wrap">
													<div className="person-img">
														<img src={img2} alt="" />
													</div>
													<div className="person-content">
														<h3>Davide Colombo</h3>
														<span>
															Cugino fraterno, hanno condiviso estati intere tra calcio, barbecue e sogni
															futuri
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</motion.div>
							)}

							{activeTab === "Bride" && (
								<motion.div
									key="Bride"
									id="menu1"
									className="tab-pane fade show active"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.5 }}>
									<div className="Ceremony-wrap">
										<div className="row">
											<div className="col-lg-6 col-md-6">
												<div className="person-wrap">
													<div className="person-img">
														<img src={img3} alt="" />
													</div>
													<div className="person-content">
														<h3>Elena Conti</h3>
														<span>
															Amica d’infanzia, compagna di banco, da sempre la sua “sorella scelta”
														</span>
													</div>
												</div>
											</div>
											<div className="col-lg-6 col-md-6">
												<div className="person-wrap">
													<div className="person-img">
														<img src={img4} alt="" />
													</div>
													<div className="person-content">
														<h3>Francesca Riva</h3>
														<span>Collega architetta e confidente, l’ha sostenuta in ogni progetto</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>
		</div>
	);
};

export default People;
