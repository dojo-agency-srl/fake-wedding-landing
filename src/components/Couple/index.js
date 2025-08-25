import React from "react";

import brideImg from "images/couple/5.jpg";
import groomImg from "images/couple/6.jpg";
import heartImg from "images/couple/heart_empty.png";

const Couple = () => {
	return (
		<div id="cuple" className="couple-area pt--60 pb--60">
			<div className="container">
				<div className="col-l2">
					<div className="section-title text-center">
						<h2>La Coppia</h2>
					</div>
				</div>
				<div className="couple-item">
					<div className="row">
						<div className="col-lg-5 col-md-12 col-sm-12 couple-single md-0">
							<div className="couple-img">
								<img src={groomImg} alt="" />
							</div>
							<div className="couple-content mt--30">
								<h4>MARCO</h4>
								<p>32 anni, ingegnere civile, amante della montagna e del buon vino</p>
							</div>
						</div>
						<div className="col-lg-2 couple-single">
							<div className="couple-shape">
								<img src={heartImg} alt="" />
							</div>
						</div>
						<div className="col-lg-5 col-md-12 col-sm-12 couple-single">
							<div className="couple-img">
								<img src={brideImg} alt="" />
							</div>
							<div className="couple-content  mt--30">
								<h4>GIULIA</h4>
								<p>29 anni, architetta d’interni, appassionata di fiori e fotografia</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Couple;
