const VentureNFT = artifacts.require("VentureNFT");

module.exports = async (deployer) => {
    const accounts = await web3.eth.getAccounts()

    await deployer.deploy(VentureNFT, 'Venture NFTs', 'VNT', 10, accounts[1])
}