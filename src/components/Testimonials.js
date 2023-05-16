import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import Carousel from "react-bootstrap/Carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Testimonials extends Component {
	render() {
		return (
			<div id="testimonials" className="t_div">
				<h1 className="t_h1">Testimonials</h1>
				<Carousel
					showArrows={true}
					infiniteLoop={true}
					showThumbs={false}
					showStatus={false}
					autoPlay={true}
					interval={6100}
				>
					<div>
						<img src="../../images/7.png" alt="" />
						<div className="myCarousel">
							<h3>Shirley Fultz</h3>
							<h4>Designer</h4>
							<p>
								It's freeing to be able to catch up on
								customized news and not be distracted by a
								social media element on the same site
							</p>
						</div>
					</div>

					<div>
						<img src="../../images/7.png" alt="" />
						<div className="myCarousel">
							<h3>Daniel Keystone</h3>
							<h4>Designer</h4>
							<p>
								The simple and intuitive design makes it easy
								for me use. I highly recommend Fetch to my
								peers.
							</p>
						</div>
					</div>

					<div>
						<img src="../../images/7.png" alt="" />
						<div className="myCarousel">
							<h3>Theo Sorel</h3>
							<h4>Designer</h4>
							<p>
								I enjoy catching up with Fetch on my laptop, or
								on my phone when I'm on the go!
							</p>
						</div>
					</div>
				</Carousel>
			</div>
		);
	}
}
