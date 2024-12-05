import { PinataSDK } from "pinata-web3";

const pinata = new PinataSDK({
	pinataJwt: process.env.PINATA_JWT,
	pinataGateway: process.env.GATEWAY_URL,
});

// Get latest file
const files = await pinata.listFiles().pageLimit(1);
const cid = files[0].ipfs_pin_hash;

// Create a url using the Dedicated Gateway
const url = await pinata.gateways.convert(cid);
console.log(url);

// Create a url using a different gateway
const publicGatewayUrl = await pinata.gateways.convert(cid, "https://ipfs.io");
console.log(publicGatewayUrl);
