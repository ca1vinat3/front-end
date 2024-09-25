export const donateData = (ticker) => {
	let walletAddress;
	switch (ticker) {
		case "ETH":
			walletAddress = "0x93905fd3f9b8732015f2b3Ca6c16Cbcb60ECf895";
			break;
		case "BTC":
			walletAddress = "bc1qa83s92u6xqnyag4lcg45cm2cjzajr4av4m9q7z";
			break;
		case "DASH":
			walletAddress = "XgEDxXDiJaYhEW4Uh6mKsDKZ6Lnnh4udyz";
			break;
		case "XMR":
			walletAddress =
				"42WoZCDP4dQPbh7vpXRJAGV2rHtubYaQyD61d3WLMz3qD5i5FihDorbKG2Xv2YjKgxaD25Sm1xV6ic7Akp2w2A7P6KXRYAb";
			break;
		case "BCH":
			walletAddress = "qquxgz8hszv5hxa89q9st80zfty4hnmfjgvhmuqw0f";
			break;
		case "LTC":
			walletAddress = "LPhPS2uBJNzsFPw9Dxz1GcbR1R7Y6udqSN";
			break;
		case "ARBI":
			walletAddress = "0x93905fd3f9b8732015f2b3Ca6c16Cbcb60ECf895";
			break;
		case "MANTA":
			walletAddress = "0x93905fd3f9b8732015f2b3Ca6c16Cbcb60ECf895";
			break;
		case "CELO":
			walletAddress = "0x93905fd3f9b8732015f2b3Ca6c16Cbcb60ECf895";
			break;
		case "LUKSO":
			walletAddress = "0x93905fd3f9b8732015f2b3Ca6c16Cbcb60ECf895";
			break;
		case "SOLANA":
			walletAddress = "2BzRmvnk9juzrsbN9Yj7Q6yYggcUU6F35cDR5m5gLGZW";
			break;
		default:
			walletAddress = "0x09";
	}

	return {
		key: "donate-ad",
		title: "Contribute to SolanaCity!",
		html: `<div class="ta-l">
    <span class="t-yellow">SolanaCity citizens!</span>
    <br />
    Now you can contribute to the development of SolanaCity, your donations will help to develop features.						
    <br />

    <div class="contributeInner">
    <b>Donation address</b>
    <ul>
    <li>
    <span class="t-yellow">Wallet address fro ${ticker}:</span
    <br/>
    ${walletAddress}</li>
    						
    </ul>									
    </div>								
    </div>
    `,
	};
};
