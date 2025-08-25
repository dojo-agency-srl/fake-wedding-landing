import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import gsap from "gsap";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "images/slider/1.jpg";
import img2 from "images/slider/heart.png";
import img3 from "images/slider/2.jpg";

const Hero = () => {
	const animateSlide = (swiper) => {
		const activeSlide = swiper.slides[swiper.activeIndex];
		const texts = activeSlide.querySelectorAll(
			".slider-content span, .slider-content h4, .slider-content p"
		);

		gsap.set(texts, { opacity: 0, y: 80 });

		gsap.to(texts, {
			opacity: 1,
			y: 0,
			duration: 2,
			delay: 1,
			stagger: 0.6,
			ease: "power4.out",
		});
	};

	return (
		<div className="slider-area slider-style-2 slider-two parallax">
			<Swiper
				modules={[Navigation, Autoplay]}
				navigation
				autoplay={{ delay: 5000 }}
				speed={2500}
				loop={true}
				className="mySwiper"
				onInit={animateSlide}
				onSlideChange={animateSlide}>
				<SwiperSlide>
					<div
						style={{
							height: "100vh",
							backgroundImage: `url(${img1})`,
							display: "flex",
							alignItems: "center",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}>
						<div className="container" style={{ width: "100%", maxWidth: "100%" }}>
							<div
								className="slider-content sd-default-content text-center"
								style={{ backgroundImage: `url(${img2})` }}>
								<div className="col-lg-12">
									<span>CI SPOSIAMO</span>
									<h4>Save The Date</h4>
									<p>29 Giugno 2025</p>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div
						style={{
							height: "100vh",
							backgroundImage: `url(${img3})`,
							display: "flex",
							alignItems: "center",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}>
						<div className="container" style={{ width: "100%", maxWidth: "100%" }}>
							<div
								className="slider-content sd-default-content text-center"
								style={{ backgroundImage: `url(${img2})` }}>
								<div className="col-lg-12">
									<span>CI SPOSIAMO</span>
									<h4>Save The Date</h4>
									<p>29 Giugno 2025</p>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Hero;
