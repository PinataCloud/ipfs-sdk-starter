import { PinataSDK } from "pinata-web3";

const pinata = new PinataSDK({
	pinataJwt: process.env.PINATA_JWT,
	pinataGateway: process.env.GATEWAY_URL,
});

const files = await pinata.listFiles();
// Optional Queries
// .name("Hello")
// .group("GROUP_ID")
// .keyValue("awesome", "true")
// .pageOffset(10)
// .pageLimit(10);

console.log(files);
