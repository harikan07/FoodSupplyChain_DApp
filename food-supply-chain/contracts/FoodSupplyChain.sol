// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FoodSupplyChain {
    struct FoodItem {
        uint256 id;
        string name;
        string origin;
        string currentLocation;
        string status;
        uint256 price;
        address owner;
        string[] history;
    }

    mapping(uint256 => FoodItem) public foodItems;
    uint256 public itemCount;

    event FoodItemAdded(uint256 id, string name, string origin, address owner);
    event FoodItemUpdated(uint256 id, string currentLocation, string status);
    event FoodItemPriceUpdated(uint256 id, uint256 price);
    event FoodItemSold(uint256 id, address newOwner);

    function addFoodItem(string memory _name, string memory _origin) public {
        itemCount++;
        string[] memory history;
        foodItems[itemCount] = FoodItem(itemCount, _name, _origin, _origin, "Planted", 0, msg.sender, history);
        foodItems[itemCount].history.push(string(abi.encodePacked("Planted at ", _origin)));
        emit FoodItemAdded(itemCount, _name, _origin, msg.sender);
    }

    function updateFoodItem(uint256 _id, string memory _currentLocation, string memory _status) public {
        require(foodItems[_id].owner == msg.sender, "Only the owner can update the item.");
        FoodItem storage item = foodItems[_id];
        item.currentLocation = _currentLocation;
        item.status = _status;
        item.history.push(string(abi.encodePacked(_status, " at ", _currentLocation)));
        emit FoodItemUpdated(_id, _currentLocation, _status);
    }

    function updateFoodItemPrice(uint256 _id, uint256 _price) public {
        require(foodItems[_id].owner == msg.sender, "Only the owner can set the price.");
        FoodItem storage item = foodItems[_id];
        item.price = _price;
        emit FoodItemPriceUpdated(_id, _price);
    }

    function buyFoodItem(uint256 _id) public payable {
        FoodItem storage item = foodItems[_id];
        require(msg.value >= item.price, "Insufficient payment.");
        require(item.owner != msg.sender, "Owner cannot buy their own item.");

        address payable seller = payable(item.owner);
        seller.transfer(msg.value);

        item.owner = msg.sender;
        item.history.push(string(abi.encodePacked("Sold to ", toString(msg.sender))));
        emit FoodItemSold(_id, msg.sender);
    }

    function getFoodItem(uint256 _id) public view returns (FoodItem memory) {
        return foodItems[_id];
    }

    function getFoodItemHistory(uint256 _id) public view returns (string[] memory) {
        return foodItems[_id].history;
    }

    function toString(address account) internal pure returns (string memory) {
        return toString(abi.encodePacked(account));
    }

    function toString(bytes memory data) internal pure returns (string memory) {
        bytes memory alphabet = "0123456789abcdef";
        bytes memory str = new bytes(2 + data.length * 2);
        str[0] = "0";
        str[1] = "x";
        for (uint i = 0; i < data.length; i++) {
            str[2 + i * 2] = alphabet[uint(uint8(data[i] >> 4))];
            str[3 + i * 2] = alphabet[uint(uint8(data[i] & 0x0f))];
        }
        return string(str);
    }
}
