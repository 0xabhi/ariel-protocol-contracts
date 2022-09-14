const hre = require("hardhat");
const { ethers } = require('hardhat');
const fs = require('fs');

const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000';

const toBytes32 = function (string) {
    return ethers.utils.formatBytes32String(string);
}
const fromBytes32 = function (string) {
    return ethers.utils.parseBytes32String(string);
}

const parseUnits = function (number, units) {
    return ethers.utils.parseUnits(number, units || 8);
}

const formatUnits = function (number, units) {
    return ethers.utils.formatUnits(number, units || 8);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {

    const provider = hre.ethers.provider;
    const signer = await provider.getSigner(1);
    const darkOracleAddress = '0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0';

    const account = await signer.getAddress();
    console.log('account', account);
    console.log('Account balance', formatUnits(await provider.getBalance(account)));

}
main()


