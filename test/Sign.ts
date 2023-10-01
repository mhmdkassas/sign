import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Sign", function() {
    async function deploySignFixture() {
        const [owner, otherAccount] = await ethers.getSigners();

        const Sign = await ethers.getContractFactory("Sign");
        const sign = await Sign.deploy("");
        return { sign, owner, otherAccount }
    }
})