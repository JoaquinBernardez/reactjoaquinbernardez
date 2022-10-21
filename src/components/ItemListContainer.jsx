import * as React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function ItemListContainer({ greeting }) {
	return (
		<Box
			sx={{
				textAlign: "center",
				boxShadow: "0px 5px 20px #666",
			}}>
			<Typography sx={{ color: "#555", fontFamily: "sans-serif" }} variant="h5">
				{greeting}
			</Typography>
		</Box>
	);
}
