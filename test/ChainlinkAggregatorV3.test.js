const { expect } = require("chai");

describe("ChainlinkAggregatorV3", () => {
  let chainlinkAggregatorV3;
  beforeEach(async () => {
    const ChainlinkAggregatorV3 = await ethers.getContractFactory(
      "ChainlinkAggregatorV3"
    );
    chainlinkAggregatorV3 = await ChainlinkAggregatorV3.deploy();
  });

  it("Should return ETH pricde in terms of USD", async () => {
    const price = await chainlinkAggregatorV3.getLatestPrice();
    console.log(price);
  });
});
