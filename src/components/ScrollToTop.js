import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
	const [backToTopButton, setBackToTopButton] = useState(false);

	useEffect(() => {
		// 👇️ scroll to top on page load
		window.addEventListener("scroll", () => {
			if (window.scrollY > 3000) {
				setBackToTopButton(true);
			} else {
				setBackToTopButton(false);
			}
		});
	}, []);

	return (
		<div>
			{/* 👇️ scroll to top on button click */}
			{backToTopButton && (
				<button
					className="button-33"
					onClick={() => {
						window.scrollTo({
							top: 0,
							left: 0,
							behavior: "smooth",
						});
					}}
					style={{
						position: "fixed",
						padding: "1rem 2rem",
						fontSize: "15px",
						bottom: "40px",
						right: "40px",
						backgroundColor: "#FFEDDB",
						textAlign: "center",

						borderRadius: "50px",

						cursor: "pointer",

						width: "10%",
						boxSizing: "border-box",
						border: "0",
					}}
				>
					Scroll to top
				</button>
			)}
		</div>
	);
}
