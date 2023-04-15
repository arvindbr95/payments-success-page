import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
	EthereumClient,
	w3mConnectors,
	w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";

const chains = [polygonMumbai];
const projectId = "54bc015963fddedceebf015ebdf0f579";

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
	autoConnect: false,
	connectors: w3mConnectors({ projectId, version: 1, chains }),
	provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<WagmiConfig client={wagmiClient}>
			<App />
		</WagmiConfig>
		<Web3Modal
			projectId={projectId}
			ethereumClient={ethereumClient}
			themeMode={"light"}
		/>
	</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
