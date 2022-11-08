import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import PaddingIcon from "@mui/icons-material/Padding";
import Cart from "./CartWidget";
import { Link } from "react-router-dom";

/*
	* Estas importaciones capaz se puedan resumir exportandolas desde la Raiz de mui y simplificando lineas. Fijate eso!
			!	import { Box } from "@mui/system";
	*/

function NavBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const pages = ["Inicio", "Servicios", "Contacto"]; //* Mejor definir las paginas dentro del componente

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<PaddingIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
					<Typography
						variant="h4"
						noWrap
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
						}}>
						<Link
							style={{
								color: "white",
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								textDecoration: "none",
							}}
							to={"/"}>
							JCompany
						</Link>
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit">
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<PaddingIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
						}}>
						<Link
							style={{
								color: "white",
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								textDecoration: "none",
							}}
							to={"/"}>
							JCompany
						</Link>
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: {
								xs: "none",
								md: "flex",
								justifyContent: "end",
								paddingRight: "1.2rem",
							},
						}}>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: "white", display: "block" }}>
								{page}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Cart />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default NavBar;
