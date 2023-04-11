const { ethers } = require("hardhat");

// 设置proxy合约地址
const ContractAddress = "0xF004d909E3dddD5C250be23D63EC7Fdb9AED65bC";//代理地址

async function main() {
  // 获取已部署的合约实例
  const Sushi_V2 = await ethers.getContractFactory("Sushi_V2");
  const v2Contract = await Sushi_V2.attach(ContractAddress);

  // 调用setVersion函数

  const setvTx = await v2Contract.setVersion(33);
  await setvTx.wait();
  console.log("Sushi_V2 tx completed.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// npx hardhat run --network tbsc ./scripts/3_setversion.js
