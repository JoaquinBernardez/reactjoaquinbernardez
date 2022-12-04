import { AppBar, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import Facebook from "@mui/icons-material/FacebookRounded";
import WhatsApp from "@mui/icons-material/WhatsApp";

const navBarBackground = grey[900];

export default function Footer() {
	return (
		<AppBar
			position="fixed"
			sx={{
				backgroundColor: `${navBarBackground}`,
				height: "10vh",
				top: "auto",
				bottom: 0,
				justifyContent: "center",
			}}>
			<Stack
				direction="row"
				justifyContent="center"
				alignItems="center"
				spacing={2}>
				<Typography variant="subtitle2">© - JCOMPANY</Typography>
				<Facebook sx={{ color: "#fff" }} />
				<WhatsApp sx={{ color: "#fff" }} />
			</Stack>
		</AppBar>
	);
}
