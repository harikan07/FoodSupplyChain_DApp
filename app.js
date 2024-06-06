const contractAddress = '0xc3BBC86b3680789d176E77E769FA39946afb936C';
const contractABI = [
    {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "origin",
            "type": "string"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "FoodItemAdded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          }
        ],
        "name": "FoodItemPriceUpdated",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "FoodItemSold",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "currentLocation",
            "type": "string"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "status",
            "type": "string"
          }
        ],
        "name": "FoodItemUpdated",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "foodItems",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "origin",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "currentLocation",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "status",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "price",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "itemCount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_origin",
            "type": "string"
          }
        ],
        "name": "addFoodItem",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "_currentLocation",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_status",
            "type": "string"
          }
        ],
        "name": "updateFoodItem",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_price",
            "type": "uint256"
          }
        ],
        "name": "updateFoodItemPrice",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
          }
        ],
        "name": "buyFoodItem",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
          }
        ],
        "name": "getFoodItem",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "origin",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "currentLocation",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "status",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "internalType": "string[]",
                "name": "history",
                "type": "string[]"
              }
            ],
            "internalType": "struct FoodSupplyChain.FoodItem",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_id",
            "type": "uint256"
          }
        ],
        "name": "getFoodItemHistory",
        "outputs": [
          {
            "internalType": "string[]",
            "name": "",
            "type": "string[]"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      }
];

let web3;
let foodSupplyChain;

window.addEventListener('load', async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    } else {
        console.log('MetaMask is not installed');
    }

    foodSupplyChain = new web3.eth.Contract(contractABI, contractAddress);

    document.getElementById('addItemButton').addEventListener('click', addFoodItem);
    document.getElementById('updateItemButton').addEventListener('click', updateFoodItem);
    document.getElementById('setPriceButton').addEventListener('click', setFoodItemPrice);
    document.getElementById('buyItemButton').addEventListener('click', buyFoodItem);
    document.getElementById('getItemButton').addEventListener('click', getFoodItem);
    document.getElementById('getHistoryButton').addEventListener('click', getFoodItemHistory);
});

async function addFoodItem() {
    const name = document.getElementById('name').value;
    const origin = document.getElementById('origin').value;
    const accounts = await web3.eth.getAccounts();
    await foodSupplyChain.methods.addFoodItem(name, origin).send({ from: accounts[0] });
    alert('Food item added successfully');
}

async function updateFoodItem() {
    const id = document.getElementById('itemId').value;
    const currentLocation = document.getElementById('currentLocation').value;
    const status = document.getElementById('status').value;
    const accounts = await web3.eth.getAccounts();
    await foodSupplyChain.methods.updateFoodItem(id, currentLocation, status).send({ from: accounts[0] });
    alert('Food item updated successfully');
}

async function setFoodItemPrice() {
    const id = document.getElementById('priceItemId').value;
    const price = document.getElementById('price').value;
    const accounts = await web3.eth.getAccounts();
    await foodSupplyChain.methods.updateFoodItemPrice(id, price).send({ from: accounts[0] });
    alert('Food item price updated successfully');
}

async function buyFoodItem() {
    const id = document.getElementById('buyItemId').value;
    const accounts = await web3.eth.getAccounts();
    const item = await foodSupplyChain.methods.getFoodItem(id).call();
    await foodSupplyChain.methods.buyFoodItem(id).send({ from: accounts[0], value: item.price });
    alert('Food item bought successfully');
}

async function getFoodItem() {
    const id = document.getElementById('getItemId').value;
    const item = await foodSupplyChain.methods.getFoodItem(id).call();
    document.getElementById('itemDetails').innerText = JSON.stringify(item, null, 2);
}

async function getFoodItemHistory() {
    const id = document.getElementById('getHistoryItemId').value;
    const history = await foodSupplyChain.methods.getFoodItemHistory(id).call();
    document.getElementById('itemHistory').innerText = JSON.stringify(history, null, 2);
}
