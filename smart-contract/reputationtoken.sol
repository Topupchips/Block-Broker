// ReputationToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@hashgraph/contracts/token/ILPSCToken.sol";
import "@hashgraph/contracts/token/HederaTokenService.sol"

contract ReputationToken is ERC20, ILPSCToken, HederaTokenService {
    address public owner;

    constructor() ERC20("ReputationToken", "REP") {
        owner = msg.sender;
        _mint(msg.sender, 1000000 * 10**18); // Initial supply of 1,000,000 tokens
    }
}
