import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Education } from "./Education";
import educationDB from "../educationDB";

export default function Resume() {
	const data = educationDB.map(item => {
		return (
			<Education
				className="grid_1"
				calendar={item.calendar}
				engineer={item.engineer}
				about={item.about}
				company={item.company}
			/>
		);
	});

	return (
		<div id="resume" className="resume__div">
			<h1 className="resume__title">My Resume</h1>
			<div className="grid">
				<div className="grid_x">Education</div>
				<div className="grid_y">Experience</div>
				{data}
			</div>
		</div>
	);
}
