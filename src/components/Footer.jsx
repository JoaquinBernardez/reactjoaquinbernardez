import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Facebook from "@mui/icons-material/FacebookRounded";
import WhatsApp from "@mui/icons-material/WhatsApp";

export default function Footer() {
	return (
		<Box
			sx={{
				display: "flex",
				background: "grey",
				justifyContent: "end",
				padding: "1rem",
			}}>
			<Facebook sx={{ color: "#fff", paddingInline: "5px" }} />
			<WhatsApp sx={{ color: "#fff", paddingInline: "5px" }} />

			<Typography sx={{ color: "white" }}>Copyright</Typography>
		</Box>
	);
}
