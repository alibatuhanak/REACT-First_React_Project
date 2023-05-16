import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export const Education = props => {
	return (
		<div id="education" className={props.className}>
			<h5>
				<CalendarMonthIcon /> {props.calendar}
			</h5>
			<h3 className="ce">{props.engineer}</h3>
			<p>{props.about}</p>
			<h4>{props.company}</h4>
		</div>
	);
};
