import React, { useEffect, useState } from "react";

const Header = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className="sticky-header">
			<div
				className={`header-area header-area-3 ${scrolled ? "scrolled" : ""}`}
				style={{
					backgroundColor: scrolled ? "rgb(192 128 129 / 93%)" : "rgba(192 128 129 / 8%)",
					transition: "background-color 0.5s ease-in-out",
				}}>
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-11 col-sm-11 col-10">
							<div className="logo">
								<h1>
									<a href="index.html">
										Marco
										<span>
											<i className="fa fa-heart" aria-hidden="true"></i>
										</span>
										Giulia
									</a>
								</h1>
							</div>
						</div>
						<div className="col-lg-9 d-none d-lg-block">
							<div className="main-menu">
								<nav id="nav_mobile_menu">
									<ul>
										<li className="active">
											<a href="index.html">Home</a>
										</li>
										<li>
											<a href="#cuple">La Coppia</a>
										</li>
										<li>
											<a href="#story">La Storia</a>
										</li>
										<li>
											<a href="#people">Le Persone</a>
										</li>
										<li>
											<a href="#event">L'Evento</a>
										</li>
										<li>
											<a href="#gallery">Galleria</a>
										</li>
										<li>
											<a href="#Contact">Rsvp</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
						<div className="col-12 d-block d-lg-none">
							<div id="mobile_menu"></div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
