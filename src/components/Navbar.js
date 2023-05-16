import { Typography, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
	return (
		<div>
			<nav>
				<h2 className="nav__logo">
					<Link
						className="link"
						activeClass="active"
						to="home"
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
					>
						batu.
					</Link>
				</h2>

				<Stack
					spacing={12}
					direction="row"
					m={4}
					style={{ marginRight: "40vh", marginTop: "40px" }}
				>
					<Typography variant="h6">
						<Link
							className="link"
							activeClass="active"
							to="about"
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
						>
							About
						</Link>
					</Typography>
					<Typography variant="h6">
						<Link
							className="link"
							activeClass="active"
							to="skills"
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
						>
							Skills
						</Link>
					</Typography>
					<Typography variant="h6">
						<Link
							className="link"
							activeClass="active"
							to="resume"
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
						>
							Resume
						</Link>
					</Typography>

					<Typography variant="h6">
						<Link
							className="link"
							activeClass="active"
							to="testimonials"
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
						>
							Testimonials
						</Link>
					</Typography>
					<Typography variant="h6">
						<Link
							className="link"
							activeClass="active"
							to="contact"
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
						>
							Contact
						</Link>
					</Typography>
				</Stack>
			</nav>
		</div>
	);
}
