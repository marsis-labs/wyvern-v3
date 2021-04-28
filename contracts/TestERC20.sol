/*

  << TestERC20 >>

*/

pragma solidity 0.7.5;

import "hardhat/console.sol";

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract TestERC20 is ERC20("test", "TST") {

    /**
     */
    constructor () public {
    }

    /**
     */
    function mint(address to, uint256 value) public returns (bool) {
        console.log("[TestERC20 -in ] Trying to send %s tokens to %s", value, to);

        _mint(to, value);
        return true;
    }

}
