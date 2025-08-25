import React from "react";

import img1 from "images/slider/1.jpg";

const Contact = () => {
	return (
		<div id="Contact" className="guest-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2">
						<div className="guest-wrap">
							<div className="col-12">
								<div className="section-title section-title4 text-center">
									<h2>Sii Nostro Ospite</h2>
									<p>Si prega di rispondere prima del 1 Gennaio 2025</p>
								</div>
							</div>
							<div className="contact-form form-style">
								<form
									id="rsvp-form"
									action="mail.php"
									className="validate-rsvp-form"
									method="post">
									<div className="row">
										<div className="col-12 col-sm-6">
											<input type="text" placeholder="Nome*" id="fname" name="name" />
										</div>
										<div className="col-12  col-sm-6">
											<input type="text" placeholder="Email*" id="email" name="email" />
										</div>
										<div className="col col-sm-6">
											<select className="form-control" name="guest">
												<option disabled selected>
													Numero di partecipanti*
												</option>
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
												<option>6</option>
											</select>
										</div>
										<div className="col col-sm-6">
											<select className="form-control" name="events">
												<option disabled selected>
													Parteciperò a*
												</option>
												<option>Tutti gli eventi</option>
												<option>Cerimonia</option>
												<option>Ricevimento e Party</option>
											</select>
										</div>
										<div className="col-12">
											<textarea
												className="contact-textarea"
												placeholder="Messaggio"
												name="notes"></textarea>
										</div>
										<div className="col-12 text-center">
											<button id="submit" className="submit" disabled>
												Invia il messaggio
											</button>
											<span id="loader">
												<i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
											</span>
										</div>
										<div className="col col-md-12 success-error-message">
											<div id="success">Thank you</div>
											<div id="error">
												{" "}
												Error occurred while sending email. Please try again later.{" "}
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
