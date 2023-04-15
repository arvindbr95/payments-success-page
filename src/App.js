import logo from "./logo.svg";
import "./App.css";
import { Grid, Typography } from "@mui/material";
import productImg from "./product-img.jpg";

function App() {
	return (
		<div className="App">
			<Grid
				container
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					flexWrap: "nowrap",
				}}
			>
				<Grid
					item
					xs={5}
					style={{
						backgroundColor: "#e5e5e5",
						padding: "56px 56px 56px 120px",
						minHeight: "100vh",
						display: "flex",
					}}
				>
					<Grid>
						<Typography
							variant="h5"
							style={{ fontWeight: 600, marginBottom: 32 }}
						>
							ethglobal-tokyo-test-store
						</Typography>
						<Grid
							style={{
								display: "flex",
								alignItems: "center",
								marginBottom: 48,
							}}
						>
							<img
								src={productImg}
								style={{ maxHeight: 60 }}
								alt="product-img"
							/>
							<Typography
								style={{ marginLeft: 16, fontWeight: 500 }}
							>
								Black Leather Bag
							</Typography>
						</Grid>
						<Grid
							style={{
								display: "flex",
								alignItems: "center",
								width: "100%",
								marginBottom: 8,
							}}
						>
							<Typography
								style={{
									fontWeight: 500,
									flexGrow: 1,
								}}
							>
								Subtotal
							</Typography>
							<Typography
								style={{
									marginLeft: 16,
									fontWeight: 500,
									textAlign: "right",
								}}
							>
								$30.00
							</Typography>
						</Grid>
                        <Grid
							style={{
								display: "flex",
								alignItems: "center",
								width: "100%",
								marginBottom: 8,
							}}
						>
							<Typography
								style={{
									fontWeight: 500,
									flexGrow: 1,
								}}
							>
								Shipping
							</Typography>
							<Typography
								style={{
									marginLeft: 16,
									fontWeight: 500,
									textAlign: "right",
								}}
							>
								$5.00
							</Typography>
						</Grid>
                        <Grid
							style={{
								display: "flex",
								alignItems: "center",
								width: "100%",
								marginBottom: 8,
							}}
						>
							<Typography
								style={{
									fontWeight: 500,
									flexGrow: 1,
								}}
							>
								Estimated Taxes
							</Typography>
							<Typography
								style={{
									marginLeft: 16,
									fontWeight: 500,
									textAlign: "right",
								}}
							>
								$2.40
							</Typography>
						</Grid>
                        <Grid
							style={{
								display: "flex",
								alignItems: "center",
								width: "100%",
								marginBottom: 16,
							}}
						>
							<Typography
								style={{
									fontWeight: 600,
									flexGrow: 1,
                                    fontSize: 16
								}}
							>
								Total
							</Typography>
							<Typography
								style={{
									marginLeft: 16,
									fontWeight: 600,
									textAlign: "right",
                                    fontSize: 16
								}}
							>
								$37.40
							</Typography>
						</Grid>
                        <Grid
							style={{
								display: "flex",
								alignItems: "center",
								width: "100%",
								marginBottom: 8,
							}}
						>
							<Typography
								style={{
									fontWeight: 600,
									flexGrow: 1,
                                    fontSize: 18
								}}
							>
								Total in ApeCoin
							</Typography>
							<Typography
								style={{
									marginLeft: 16,
									fontWeight: 600,
									textAlign: "right",
                                    fontSize: 18
								}}
							>
								APE 8.2908
							</Typography>
						</Grid>
					</Grid>
				</Grid>

				<Grid
					item
					xs={7}
					style={{
						padding: "56px 120px 56px 56px",
						minHeight: "100vh",
						display: "flex",
						justifyContent: "center",
					}}
				>
					there
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
