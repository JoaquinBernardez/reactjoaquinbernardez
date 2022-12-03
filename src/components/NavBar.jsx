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
import { contextoGeneral } from "../components/ContextContainer";
import { Link } from "react-router-dom";

const pages = [
	{ label: "Home", link: "/" },
	{ label: "Servicios", link: "/servicios" },
	{ label: "Deportes", link: "/categoria/Deportes" },
	{ label: "Electronica", link: "/categoria/Electronica" },
];

function NavBar() {
	const { carrito } = React.useContext(contextoGeneral);
	const [cant, setCant] = React.useState(0);
	React.useEffect(() => {
		setCant(carrito.reduce((acc, item) => acc + item.quantity, 0));
	}, [carrito]);

	const [anchorElNav, setAnchorElNav] = React.useState(null);

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
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "#fff",
						}}>
						JCompany
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
								<MenuItem key={page.label} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">
										<Link
											style={{ color: "white", textDecoration: "none" }}
											to={page.link}>
											{page.label}
										</Link>
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<PaddingIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}>
						JCompany
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
								key={page.label}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: "white", display: "block" }}>
								<Link
									style={{ color: "white", textDecoration: "none" }}
									to={page.link}>
									{page.label}
								</Link>
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Link
							style={{ color: "white", textDecoration: "none" }}
							to={"/Checkout"}>
							<Cart cant={cant} />
						</Link>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default NavBar;
