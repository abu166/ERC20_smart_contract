// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract ERC20_smart_contract is ERC20 {
    using Strings for uint256;

    address public lastSender;
    address public lastReceiver;
    uint256 public lastTimestamp;
    address public owner;

    constructor(address _owner, uint256 initialSupply) ERC20("AITU_SE-2318_Token", "AITUSE") {
        require(_owner != address(0), "Owner address cannot be zero");
        owner = _owner;
        _mint(_owner, initialSupply);
    }

    function transfer(address recipient, uint256 amount) public override returns (bool) {
        lastSender = msg.sender;
        lastReceiver = recipient;
        lastTimestamp = block.timestamp;
        return super.transfer(recipient, amount);
    }

    function getLastTransactionTimestamp() public view returns (string memory) {
        return lastTimestamp.toString();
    }

    function getLastSenderAddress() public view returns (address) {
        return lastSender;
    }

    function getLastReceiverAddress() public view returns (address) {
        return lastReceiver;
    }

    function timestampToHumanReadable(uint256 timestamp) internal pure returns (string memory) {
        uint256 secondsInOneDay = 86400;
        uint256 dayCount = timestamp / secondsInOneDay;
        uint256 hourCount = (timestamp % secondsInOneDay) / 3600;
        uint256 minuteCount = (timestamp % 3600) / 60;
        uint256 secondCount = timestamp % 60;

        return string(
            abi.encodePacked(
                dayCount.toString(), " days, ",
                hourCount.toString(), " hours, ",
                minuteCount.toString(), " minutes, ",
                secondCount.toString(), " seconds"
            )
        );
    }
}
