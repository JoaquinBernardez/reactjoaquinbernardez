import React from "react";
import { Grid, Paper, Typography, Button, Stack } from "@mui/material";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";

export default function CheckoutSuccess({ orderID }) {
	return (
		<Grid
			container
			spacing={2}
			justifyContent="center"
			my={2}
			alignItems="center"
			mb={10}>
			<Grid item xs={11} xl={10}>
				<Paper elevation={4} sx={{ bgcolor: "whitesmoke", padding: "16px" }}>
					<Typography align="center" variant="h4" color="initial" mt={2} mb={4}>
						Orden completada
					</Typography>
					<CheckCircleSharpIcon
						color="success"
						fontSize="large"
						sx={{ display: "block", mx: "auto" }}
					/>
					<Typography mt={3} align="center" variant="h6" color="initial">
						Haz comprado exitosamente!
					</Typography>
					<Stack
						direction="row"
						justifyContent="center"
						alignItems="center"
						spacing={10}></Stack>
				</Paper>
			</Grid>
		</Grid>
	);
}
