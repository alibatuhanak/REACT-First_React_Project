import React from "react";

export default function About() {
	return (
		<div id="about" className="about__div">
			<h1>About Me</h1>
			<h4 className="choose__h4">Why Choose Me?</h4>
			<div className="about__me">
				<img src="../images/me.png" alt="" />
				<div className="text">
					<h2 className="about__h2">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Quo asperiores pariatur nulla et culpa quas rem.
						Placeat vel possimus ex ipsam dolorem maiores nisi
						necessitatibus, id quidem quo debitis dicta.Lorem ipsum
						dolor sit amet, consectetur adipisicing elit. Quo
					</h2>
					<h1 className="about__h1">Here are a Few Highlights:</h1>
					<ul className="about__ul">
						<li className="about__li">
							Full Stack Web and Mobile Development
						</li>
						<li className="about__li">
							Interactive Front End as per the design
						</li>
						<li className="about__li">React and React Native</li>
						<li className="about__li">
							Redux for State Management
						</li>
						<li className="about__li">Building REST API</li>
						<li className="about__li">Managing database</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
