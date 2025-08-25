import React from "react";

import img1 from "images/event/1.jpg";
import img2 from "images/event/2.jpg";
import img3 from "images/event/3.jpg";

const Event = () => {
	return (
		<div id="event" className="service-area service-area2 ptb--100">
			<div className="container">
				<div className="col-l2">
					<div className="section-title text-center">
						<h2>Quando e Dove</h2>
					</div>
				</div>
				<div className="service-area-menu">
					<div className="Ceremony-wrap">
						<div className="row">
							<div className="col-lg-5">
								<div className="ceromony-img">
									<img src={img1} alt="" />
								</div>
							</div>
							<div className="col-lg-7">
								<div className="ceromony-content">
									<h3>Cerimonia</h3>
									<span>Domenica 29 Giugno, 15:00</span>
									<span>Chiesa di San Giorgio, Abbiategrasso (MI)</span>
									<p>
										Si diranno il fatidico “sì” nella suggestiva Chiesa di San Giorgio ad
										Abbiategrasso, un luogo che custodisce la storia e l’atmosfera raccolta che
										desiderano. Sarà l’inizio di un giorno che non vedono l’ora di condividere con
										voi.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="Ceremony-wrap">
					<div className="row">
						<div className="col-lg-7">
							<div className="ceromony-content ceromony-content2">
								<h3>Ricevimento</h3>
								<span>Domenica 29 Giugno, 18:00</span>
								<span>Cascina La Fienagione</span>
								<p>
									Dopo la cerimonia verrete accolti a Cascina La Fienagione, immersa nella
									campagna milanese. Aperitivo al tramonto, cena con sapori locali e una cornice
									country chic fatta di luci, fiori e sorrisi.
								</p>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="ceromony-img">
								<img src={img2} alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="Ceremony-wrap">
					<div className="row">
						<div className="col-lg-5">
							<div className="ceromony-img">
								<img src={img3} alt="" />
							</div>
						</div>
						<div className="col-lg-7">
							<div className="ceromony-content">
								<h3>Party</h3>
								<span>Domenica 29 Giugno, 23:00</span>
								<span>Cascina La Fienagione</span>
								<p>
									E quando il cielo si illuminerà di stelle, verranno aperte le danze tra musica
									live, open bar e tanta voglia di festeggiare. Un momento di pura gioia, fino a
									notte fonda, per chiudere in bellezza il giorno speciale di Marco e Giulia.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Event;
