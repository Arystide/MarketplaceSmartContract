import { expect } from "chai";
import { ethers } from "hardhat";

describe("game_tokens", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Game_token = await ethers.getContractFactory("GameTokens");
    const game_token = await Game_token.deploy("https://kzzetttqdlwj.usemoralis.com/{id}.json");
    await game_token.deployed();

    const mintTx = await game_token.mint(
      "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
      0,
      10
    );

    await mintTx.wait();

    expect(await game_token.balanceOf("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", 0)).to.equal(10);
  });
});

