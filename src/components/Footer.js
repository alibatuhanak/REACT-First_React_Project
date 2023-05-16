import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";

export default function Footer() {
	return (
		<div className="footer">
			<Typography variant="p">
				Copyright ©All rights reserved | This template is made with
				<FavoriteIcon
					style={{ position: "relative", top: "5px", width: "0.8em" }}
				/>
				by
			</Typography>
		</div>
	);
}
