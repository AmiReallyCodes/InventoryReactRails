# InventoryReactRails
Inventory project in React and Rails.
Rails is backend while React (inventory_react) is frontend.  

Rails server is at location : http://localhost:3000/api/v1/items
React frontend of project is at location: http://localhost:3001/

How to run project:
Open Terminal.
Go in project folder location.
Type rails s to start rails server.
Open other terminal and go to react project folder by typing cd inventory_react
Type npm start

If you get below error:
r@xyz inventory_react % npm start

> inventory_react@0.1.0 start
> react-scripts start

sh: react-scripts: command not found

Solution:
1.Check for
 "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },


If it is not there then add.

2.Check for node_modules folder. If it is not present then 

i) delete Package-lock.json file.

ii) In terminal run command under  inventory_react (react folder): npm install
It will create missing node_modules folder.

iii)Start project with: npm start command.
It will take you to http://localhost:3001/

