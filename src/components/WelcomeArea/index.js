import React from "react";

const WelcomeArea = () => {
	return (
		<div className="welcome-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="welcome-content">
							<h2>Benvenuto nel nostro Sogno</h2>
							<p>
								Si sono conosciuti a un aperitivo a Milano grazie ad amici in comune. La
								scintilla è scattata parlando di viaggi: lei sognava la Provenza, lui le Langhe.
								Alla fine, il primo viaggio insieme è stato proprio in Toscana, tra vigneti e
								borghi: da lì è nata una storia fatta di piccoli riti, grandi risate e sogni
								condivisi.
								<br />
								Ora, ti chiedono di vivere assieme il coronamento del loro sogno.
							</p>
							<div className="btn">
								<a href="#Contact">RSVP</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WelcomeArea;
