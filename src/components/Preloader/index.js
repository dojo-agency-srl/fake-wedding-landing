import React, { useEffect, useState } from "react";

const Preloader = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		const timer = setTimeout(() => setLoading(false), 1000);
		return () => clearTimeout(timer);
	}, []);

	if (!loading) return null;

	return (
		<div className="preloader">
			<div className="hart-wrap">
				<div className="heart"></div>
			</div>
		</div>
	);
};

export default Preloader;
