import React from "react";

export default function Contact() {
	return (
		<div id="contact" className="contact">
			<div className="inp">
				<input type="text" name="name" placeholder="Your Name" />
				<input type="email" name="email" placeholder="Your Email" />
				<input type="text" name="phone" placeholder="Your Phone" />
				<textarea
					name="textarea"
					cols="30"
					rows="10"
					placeholder="Write a Message"
				></textarea>
				<button className="button-33">Send Message</button>
			</div>

			<h1 className="c_h1">Wanna Start Work With Me?</h1>
			<div className="mycntc">
				<h1 className="myc">My Contact Details</h1>
				<div className="first_div">
					<div>
						<h5>EMAIL</h5>
						<h5 className="value_cntc">example@gmail.com</h5>
					</div>
					<div>
						<h5>PHONE</h5>
						<h5 className="value_cntc">+12 3456 78910</h5>
					</div>
					<div>
						<h5>ADDRESS</h5>
						<h5 className="value_cntc">
							Robert Robertson, 1234 NW Bobcat Lane, St. Robert,
							MO 65584-5678
						</h5>
					</div>
				</div>
			</div>
		</div>
	);
}
