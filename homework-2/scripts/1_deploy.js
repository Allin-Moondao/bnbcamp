const { ethers, upgrades } = require("hardhat");

const provider = new ethers.providers.FallbackProvider([ethers.provider], 1);
provider.getFeeData = async () => FEE_DATA;
provider.estimateGas = async () => BigNumber.from("<GAS_LIMIT>");

async function main() {
	const Sushi = await ethers.getContractFactory("Sushi");
	const sushi = await upgrades.deployProxy(Sushi);
	await sushi.deployed();
	console.log("Sushi deployed to proxy:", sushi.address);
}

main();

//npx hardhat run --network tbsc scripts/1_deploy.js

//npx hardhat verify --network tbsc "0xF004d909E3dddD5C250be23D63EC7Fdb9AED65bC"
