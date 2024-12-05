import { PinataSDK } from "pinata-web3";

const pinata = new PinataSDK({
	pinataJwt: process.env.PINATA_JWT,
	pinataGateway: process.env.GATEWAY_URL,
});

const files = await pinata.listFiles().pageLimit(1);
const cid = files[0].ipfs_pin_hash;

const url = await pinata.gateways.convert(cid);

console.log(url);

const publicGatewayUrl = await pinata.gateways.convert(cid, "https://ipfs.io");

console.log(publicGatewayUrl);
