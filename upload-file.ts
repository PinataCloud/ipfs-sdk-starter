import { PinataSDK } from "pinata-web3";

const pinata = new PinataSDK({
	pinataJwt: process.env.PINATA_JWT,
	pinataGateway: process.env.GATEWAY_URL,
});

const file = new File(["Hello World!"], "hello.txt");

const upload = await pinata.upload.file(file);
// Optional methods
// .addMetadata({
// 	name: "Hello",
// 	keyValues: {
// 		awesome: "true",
// 	},
// })
// .group("GROUP_ID");

console.log(upload);
