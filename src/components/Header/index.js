import React, { useEffect, useState } from "react";

const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => setMenuOpen((prev) => !prev);

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
						{/* Logo */}
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

						{/* Menu Desktop */}
						<div className="col-lg-9 d-none d-lg-block">
							<div className="main-menu">
								<nav>
									<ul>
										<li>
											<a href="index.html">Home</a>
										</li>
										<li>
											<a href="#cuple">La Coppia</a>
										</li>
										<li>
											<a href="#story">La Storia</a>
										</li>
										<li>
											<a href="#people">I Testimoni</a>
										</li>
										<li>
											<a href="#event">Quando e Dove</a>
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

						{/* Menu Mobile */}
						<div className="col-12 d-block d-lg-none">
							<div id="mobile_menu">
								<a
									onClick={toggleMenu}
									aria-haspopup="true"
									role="button"
									className={`slicknav_btn ${menuOpen ? "slicknav_open" : "slicknav_collapsed"}`}>
									<span className="slicknav_menutxt"></span>
									<span
										className="slicknav_icon slicknav_no-text"
										style={{
											display: "flex",
											flexDirection: "column",
											justifyContent: "center",
											height: "30px",
											width: "30px",
										}}>
										<span
											className="slicknav_icon-bar"
											style={{
												display: "block",
												height: "1px",
												width: "30px",
												background: "#fff",
											}}></span>
										<span
											className="slicknav_icon-bar"
											style={{
												display: "block",
												height: "1px",
												width: "30px",
												background: "#fff",
											}}></span>
										<span
											className="slicknav_icon-bar"
											style={{
												display: "block",
												height: "1px",
												width: "30px",
												background: "#fff",
											}}></span>
									</span>
								</a>

								<nav
									className={`slicknav_nav ${menuOpen ? "" : "slicknav_hidden"}`}
									aria-hidden={!menuOpen}
									style={{ display: menuOpen ? "block" : "none" }}>
									<ul>
										<li>
											<a href="index.html">Home</a>
										</li>
										<li>
											<a href="#cuple">La Coppia</a>
										</li>
										<li>
											<a href="#story">La Storia</a>
										</li>
										<li>
											<a href="#people">I Testimoni</a>
										</li>
										<li>
											<a href="#event">Quando e Dove</a>
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
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
