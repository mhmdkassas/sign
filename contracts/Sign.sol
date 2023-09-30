// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract MyERC1155 is ERC1155, Ownable {
    using SafeMath for uint256;

    uint256 public constant INK = 0;
    uint256 public constant SIGN = 1;
    uint256 public totalInkTokens = 3000;
    uint256 public totalSignTokens = 0;
    uint256 public inkPrice = 1.5 ether; // Price per INK token

    constructor() ERC1155("") {
        _mint(msg.sender, INK, totalInkTokens, "");
    }

    function mintInkTokens(uint256 amount) public payable {
        require(msg.value >= inkPrice.mul(amount), "Insufficient payment");
        
        _mint(msg.sender, INK, amount, "");
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
}
