import React from "react";

import bg from "images/3.jpg";

const Countdown = () => {
	return (
		<div className="count-down-area">
			<section className="count-down-section section-padding parallax" data-speed="7">
				<div className="container">
					<div className="count-down-item count-down-item2">
						<div className="row">
							<div
								className="col-12 col-md-4 section-area"
								style={{
									backgroundImage: `url(${bg})`,
								}}>
								<div className="section-sub"></div>
								<h2 className="big">
									<span>Aspettando il...</span> Grande Giorno
								</h2>
							</div>
							<div className="col-12 col-md-8 clock-area">
								<div className="count-down-clock">
									<div id="clock">
										<div class="box">
											<div class="date">0</div> <span>mesi</span>{" "}
										</div>
										<div class="box">
											<div class="date">0</div> <span>giorni</span>{" "}
										</div>
										<div class="box">
											<div class="date">0</div> <span>ore</span>{" "}
										</div>
										<div class="box">
											<div class="date">0</div> <span>minuti</span>{" "}
										</div>
										<div class="box">
											<div class="date">0</div> <span>secondi</span>{" "}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Countdown;
