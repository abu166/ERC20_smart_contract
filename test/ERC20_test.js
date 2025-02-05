const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ERC20 Smart Contract", function () {
    let Token, token, owner, addr1, addr2;

    beforeEach(async function () {
        Token = await ethers.getContractFactory("ERC20_smart_contract"); // Load the contract
        [owner, addr1, addr2] = await ethers.getSigners();

        // Передаем initialSupply в контракт
        token = await Token.deploy(owner.address, ethers.utils.parseEther("2000"));
        await token.deployed();


        console.log("Owner Address:", owner.address);
        console.log("Contract Address:", token.address);

    });

    it("Should deploy with correct initial supply", async function () {
      const totalSupply = await token.totalSupply();
        console.log("Total Supply:", totalSupply.toString());

        expect(totalSupply).to.equal(ethers.utils.parseUnits("2000", 18));
        expect(await token.balanceOf(owner.address)).to.equal(ethers.utils.parseEther("2000"));
    });

    it("Should allow transfer of tokens", async function () {
        await token.transfer(addr1.address, ethers.utils.parseEther("1"));
        expect(await token.balanceOf(addr1.address)).to.equal(ethers.utils.parseEther("1"));
    });

    it("Should emit Transfer event on successful transfer", async function () {
        await expect(token.transfer(addr1.address, ethers.utils.parseEther("1")))
            .to.emit(token, "Transfer")
            .withArgs(owner.address, addr1.address, ethers.utils.parseEther("1"));
    });

    it("Should not allow transferring more than balance", async function () {
        await expect(token.transfer(addr1.address, ethers.utils.parseEther("3000")))
            .to.be.revertedWith("ERC20InsufficientBalance");
    });

    it("Should fail transfer if sender has insufficient balance", async function () {
        await expect(token.connect(addr1).transfer(addr2.address, ethers.utils.parseEther("100")))
            .to.be.revertedWith("ERC20InsufficientBalance");
    });
});
