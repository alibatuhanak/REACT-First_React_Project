import React from "react";
import Navbar from "./Navbar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "@mui/material";

export default function Home() {
	return (
		<div id="home" className="home__big">
			<Navbar />
			<div className="home__div">
				<h3 className="job">UI/UX Designer & Developer</h3>
				<h1 className="who">I'm Batu</h1>
				<button className="button-33">
					More About Me <ArrowForwardIcon />
				</button>
			</div>
			<div className="socials">
				<Link href="http://www.twitter.com/batulol1">
					<FacebookIcon
						sx={{ color: "#3b5998", height: "50px", width: "50px" }}
					/>
				</Link>
				<Link href="http://www.twitter.com/batulol1">
					<TwitterIcon
						sx={{ color: "#00acee", height: "50px", width: "50px" }}
					/>
				</Link>
				<Link href="http://www.twitter.com/batulol1">
					<LinkedInIcon
						sx={{ color: "#0e76a8", height: "50px", width: "50px" }}
					/>
				</Link>
				<Link href="http://www.twitter.com/batulol1">
					<GitHubIcon
						sx={{ color: "#171515", height: "50px", width: "50px" }}
					/>
				</Link>
			</div>
			<div className="img">
				<img className="man" src="../images/man.png" alt="man" />
			</div>
		</div>
	);
}
