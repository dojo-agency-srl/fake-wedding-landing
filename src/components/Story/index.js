import React from "react";

import img1 from "images/story/1.jpg";
import img2 from "images/story/2.jpg";
import img3 from "images/story/3.jpg";
import img4 from "images/story/4.jpg";

const Story = () => {
	return (
		<div id="story" className="story-area ptb--100">
			<div className="container">
				<div className="col-l2">
					<div className="section-title text-center">
						<h2>La Storia</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="story clearfix">
							<div className="story-top"></div>
							<div className="content-wrapper">
								<div className="item">
									<div className="story-icon">
										<span className="flaticon-birds-in-love"></span>
									</div>
									<div className="story-content">
										<div className="image-wrap">
											<div className="single-image">
												<div>
													<img src={img1} alt="" />
												</div>
											</div>
										</div>
										<h2>Il Primo Incontro</h2>
										<span className="date">30 Luglio 2021</span>
										<p>
											Un aperitivo tra amici a Milano. Una chiacchiera sulle mete di viaggio si è
											trasformata in ore di risate, e da lì qualcosa ha cominciato a muoversi.
										</p>
									</div>
								</div>
								<div className="item">
									<div className="story-icon">
										<span className="flaticon-birds-in-love"></span>
									</div>
									<div className="story-content">
										<div className="image-wrap">
											<div className="single-image">
												<div>
													<img src={img2} alt="" />
												</div>
											</div>
										</div>
										<h2>Il Primo Appuntamento</h2>
										<span className="date">14 Settembre 2021</span>
										<p>
											Un giro al parco Sempione e una cena improvvisata in trattoria: niente di
											pianificato, ma proprio per questo perfetto.
										</p>
									</div>
								</div>
								<div className="item">
									<div className="story-icon">
										<span className="flaticon-birds-in-love"></span>
									</div>
									<div className="story-content">
										<div className="image-wrap">
											<div className="single-image">
												<div>
													<img src={img3} alt="" />
												</div>
											</div>
										</div>
										<h2>La Proposta</h2>
										<span className="date">11 Giugno 2023</span>
										<p>
											Marco ha scelto la Turchia e la Cappadocia, un luogo romantico e caro ad
											entrambi. Al tramonto, su una mongolfiera, ha tirato fuori l’anello. Lei ha
											detto subito sì.
										</p>
									</div>
								</div>
								<div className="item">
									<div className="story-icon">
										<span className="flaticon-birds-in-love"></span>
									</div>
									<div className="story-content">
										<div className="image-wrap">
											<div className="single-image">
												<div>
													<img src={img4} alt="" />
												</div>
											</div>
										</div>
										<h2>Il Fidanzamento</h2>
										<span className="date">22 Giugno 2023</span>
										<p>
											Un anno fatto di progetti, di piccole tradizioni quotidiane e di quella dolce
											attesa che ora li porta fino all’altare.
										</p>
									</div>
								</div>
							</div>
							<div className="story-bottom"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Story;
