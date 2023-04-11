// scripts/upgrade.js
const { ethers, upgrades } = require("hardhat");
const V1_address = "0xF004d909E3dddD5C250be23D63EC7Fdb9AED65bC"; 

async function main() {
  const Sushi2 = await ethers.getContractFactory("Sushi_V2");
  const v2 = await upgrades.upgradeProxy(V1_address, Sushi2);
  console.log("upgraded to", v2.address);
}

main();

//npx hardhat run --network tbsc scripts/2_upgrade.js

//验证代理合约的地址
//npx hardhat verify --network tbsc "0xF004d909E3dddD5C250be23D63EC7Fdb9AED65bC"

