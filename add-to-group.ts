import { PinataSDK } from "pinata-web3";

const pinata = new PinataSDK({
	pinataJwt: process.env.PINATA_JWT,
	pinataGateway: process.env.GATEWAY_URL,
});

// Get latest group
const groups = await pinata.groups.list();
const groupId = groups[0].id;

// Get latest file
const files = await pinata.listFiles();
const fileCid = files[0].ipfs_pin_hash;

// Add to group
const add = await pinata.groups.addCids({
	groupId: groupId,
	cids: [fileCid],
});

console.log(add);

// List files part of the group
const updatedFiles = await pinata.listFiles().group(groupId);

console.log(updatedFiles);
