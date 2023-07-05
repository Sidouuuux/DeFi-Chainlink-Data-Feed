// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/**
 * @title ChainlinkAggregatorV3
 * @dev A Solidity contract that interacts with the Chainlink price feed contract (AggregatorV3Interface)
 *      to fetch the latest ETH/USD price.
 */
contract ChainlinkAggregatorV3 {
    AggregatorV3Interface internal priceFeed;

    /**
     * @dev Constructor function. Initializes the contract with the address of the Chainlink price feed contract
     *      for the ETH/USD price.
     */
    constructor() {
        priceFeed = AggregatorV3Interface(
            0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419
        );
    }

    /**
     * @dev Fetches the latest ETH/USD price from the Chainlink price feed contract.
     * @return int The latest ETH/USD price scaled down by 10^8 to get the value in USD.
     */
    function getLatestPrice() public view returns (int) {
        (, int price, , , ) = priceFeed.latestRoundData();
        // For ETH/USD price, the value is scaled up by 10^8 in Chainlink's price feed contract.
        // We divide by 1e8 to get the price in USD with 8 decimal places.
        return price / 1e8;
    }
}

interface AggregatorV3Interface {
    function latestRoundData()
        external
        view
        returns (
            uint80 roundId,
            int answer,
            uint startedAt,
            uint updatedAt,
            uint80 answeredInRound
        );
}
