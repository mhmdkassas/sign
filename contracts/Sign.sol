// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Sign is ERC1155, Ownable {
    using SafeMath for uint256;

    uint256 public constant INK = 0;
    uint256 public constant SIGN = 1;
    uint256 public maxInkTokens = 3000;
    uint256 public totalInkTokens = 0;
    uint256 public usableInkTokens = 0;
    uint256 public available = 0;
    uint256 public totalSignTokens = 0;
    uint256 public inkPrice = 1.5 ether; // Price per INK token
    mapping(address => uint256) public inkBalances; // This is the added state variable
    uint8[512][512] img;

    constructor() ERC1155("") {}

    function mintInkTokens(uint256 amount) public payable {
        require(msg.value >= inkPrice.mul(amount), "Insufficient payment");
        
        _mint(msg.sender, INK, amount, "");
        inkBalances[msg.sender] = inkBalances[msg.sender].add(amount); // Update ink balance
    }

    function burnInkTokens(uint256 amount) public {
        require(balanceOf(msg.sender, INK) >= amount, "Not enough INK tokens to burn");
        _burn(msg.sender, INK, amount);
        
        if (totalSignTokens < 1 && balanceOf(msg.sender, INK) == 0) {
            _mint(msg.sender, SIGN, 1, "");
            totalSignTokens = 1;
        }
    }

    function mintSignToken() public onlyOwner {
        require(totalSignTokens < 1, "SIGN token has already been minted");
        _mint(msg.sender, SIGN, 1, "");
        totalSignTokens = 1;
    }

    function setInkPrice(uint256 price) public onlyOwner {
        inkPrice = price;
    }

    // Withdraw contract balance to the owner
    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        payable(owner()).transfer(balance);
    }

    // Function to retrieve the INK token balance for an account
    function getInkBalance(address account) public view returns (uint256) {
        return inkBalances[account];
    }

    function draw() public {
        for (uint256 i = 0; i < 25; i++) {
            img[12][12] = 1;
        }
    }
}
