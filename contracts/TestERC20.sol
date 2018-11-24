/*

  << TestERC20 >>

*/

pragma solidity 0.5.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";

contract TestERC20 is ERC20Mintable {

    /**
     */
    constructor () public {
        _addMinter(msg.sender);
    }

}
