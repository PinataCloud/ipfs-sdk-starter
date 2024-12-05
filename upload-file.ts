import { PinataSDK } from "pinata-web3";

const pinata = new PinataSDK({
	pinataJwt: process.env.PINATA_JWT,
	pinataGateway: process.env.GATEWAY_URL,
});

// Create a file object using Web API for Files
const file = new File(["Hello World!"], "hello.txt");

// Upload the file
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
