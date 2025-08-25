import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "images/gallery/1.jpg";
import img2 from "images/gallery/2.jpg";
import img3 from "images/gallery/3.jpg";
import img4 from "images/gallery/4.jpg";
import img5 from "images/gallery/5.jpg";
import img6 from "images/gallery/6.jpg";

const images = [
	{ src: img1, category: "prewedding" },
	{ src: img2, category: "levostre" },
	{ src: img3, category: "prewedding" },
	{ src: img4, category: "levostre" },
	{ src: img5, category: "levostre" },
	{ src: img6, category: "levostre" },
];

const Gallery = () => {
	const [filter, setFilter] = useState("*");

	const filteredImages =
		filter === "*" ? images : images.filter((img) => img.category === filter);

	return (
		<div id="gallery" className="gallery-area pt--80 pb--40">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="section-title text-center">
							<h2>Galleria</h2>
						</div>
					</div>
					<div className="col-12">
						<div className="gallery-menu text-center">
							<button
								className={filter === "*" ? "active" : ""}
								onClick={() => setFilter("*")}>
								Tutte
							</button>
							<button
								className={filter === "prewedding" ? "active" : ""}
								onClick={() => setFilter("prewedding")}>
								Pre Matrimonio
							</button>
							<button
								className={filter === "levostre" ? "active" : ""}
								onClick={() => setFilter("levostre")}>
								Le Vostre
							</button>
						</div>
					</div>
				</div>
				<div className="row grid">
					<AnimatePresence>
						{filteredImages.map((img, i) => (
							<motion.div
								key={img.src}
								className={`col-lg-4 col-md-6 col-sm-6 col-12 grid-item ${img.category}`}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.6 }}>
								<div className="gallery-single">
									<a href={img.src} className="expand-img" target="_blank" rel="noreferrer">
										<img src={img.src} alt="" />
									</a>
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
