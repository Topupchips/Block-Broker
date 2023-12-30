// ReputationToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ReputationToken is ERC20 {
    address public owner;

    constructor() ERC20("ReputationToken", "REP") {
        owner = msg.sender;
        _mint(msg.sender, 1000000 * 10**18); // Initial supply of 1,000,000 tokens
    }
}
