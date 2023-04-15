import { useState } from "react";
import "./App.css";
import { Grid, Typography } from "@mui/material";
import productImg from "./product-img.jpg";
import { QRCodeSVG } from "qrcode.react";
import { useWeb3Modal } from "@web3modal/react";
import { Button } from "@mui/material";
import { useAccount, useContractWrite } from "wagmi";
import erc20abi from "./erc20abi.json";

function App() {
	const { open } = useWeb3Modal();
	const { isConnected } = useAccount();
	const [loading, setLoading] = useState(false);

	const { write } = useContractWrite({
		mode: "recklesslyUnprepared",
		address: "0x45E5696F16D2BbbD17cAa483c8b4e8cF3Bf51208",
		abi: erc20abi,
		functionName: "transfer",
		args: [
			"0x6b419b3226c00c7fa0Aebe9b933A097a11F43C7d",
			"100000000000000000",
		],
		onSuccess(data) {
			console.log("Success", data);
			window.alert(
				"Payment successful, you will receive your order in 5 working days."
			);
		},
		onError(error) {
			console.log("Error", error);
		},
	});

	const handlePayment = async () => {
		setLoading(true);
		write();
	};

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
									fontSize: 16,
								}}
							>
								Total
							</Typography>
							<Typography
								style={{
									marginLeft: 16,
									fontWeight: 600,
									textAlign: "right",
									fontSize: 16,
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
									fontSize: 18,
								}}
							>
								Total in ApeCoin
							</Typography>
							<Typography
								style={{
									marginLeft: 16,
									fontWeight: 600,
									textAlign: "right",
									fontSize: 18,
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
						flexDirection: "column",
					}}
				>
					<Grid
						style={{
							width: "100%",
							display: "flex",
							// justifyContent: "center",
						}}
					>
						<Typography
							style={{
								fontSize: 16,
								marginBottom: 48,
							}}
						>
							Make payment to this address:
						</Typography>
					</Grid>
					<Grid
						style={{
							width: "100%",
							display: "flex",
							justifyContent: "center",
							marginBottom: 8,
						}}
					>
						<QRCodeSVG
							value={"0x40562Cf2E90f23b3969d782B5c8f134A77069b49"}
							style={{ marginBottom: "8px" }}
						/>
					</Grid>
					<Grid
						style={{
							width: "100%",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<Typography
							style={{
								fontSize: 14,
								backgroundColor: "#e5e5e5",
								borderRadius: "8px",
								marginBottom: 64,
								padding: "8px 32px",
							}}
						>
							0x6b419b3226c00c7fa0Aebe9b933A097a11F43C7d
						</Typography>
					</Grid>
					<Grid
						style={{
							width: "100%",
							display: "flex",
							// justifyContent: "center",
						}}
					>
						<Typography
							style={{
								fontSize: 16,
								marginBottom: 16,
							}}
						>
							Alternatively, pay using your browser wallet:
						</Typography>
					</Grid>
					<Grid
						style={{
							display: "flex",
							justifyContent: "center",
						}}
					>
						{isConnected ? (
							<Button
								disabled={loading}
								variant="contained"
								onClick={handlePayment}
								style={{
									textTransform: "none",
									fontSize: 16,
									fontWeight: 600,
									padding: "8px 16px",
									minWidth: 200,
								}}
							>
								Pay APE 8.2908
							</Button>
						) : (
							<Button
								variant="contained"
								onClick={open}
								style={{
									textTransform: "none",
									fontSize: 16,
									fontWeight: 600,
									padding: "8px 16px",
									minWidth: 200,
								}}
							>
								Connect your wallet
							</Button>
						)}
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
