var mysql = require("mysql");
var inquirer = require('inquirer')



var connection = mysql.createConnection({
    host: "localhost",
   // Your port; if not 3306
    port: 3306,
   // Your username
    user: "root",
   // Your password
    password: "password",
    database: "bamazon"
  });


  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
 
  });


//  This displays the table to the user and asks first question
  function queryAllProducts(res) {
      //First do the query and display it
    connection.query("SELECT * FROM products", function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price);
      }

      console.log("-----------------------------------");
        //Then run an inquirer prompt and pass the query into it
        idPrompt(res);
    });  
  };


  //First Question

  function idPrompt(productInventory){
      inquirer.prompt (
        [{
            type: "list",
            name: "productID",
            message: "Enter the ID of the item you would you like to purchase? ",
            //validate provides true if answer is valid and a string if not
            validate: function (input) {
                // Declare function as asynchronous, and save the done cal
                // Do async stuff
                    setTimeout(function() {
                        if (isNaN(input) ) {
                            // Pass the return value in the done callback
                            console.log('You need to provide an ID');
                        }else{

                        }
                
                
                    }, 3000);
                    };
      }]//checks the input value from the customer
      ).then(function (answer){
          //turns it into a number
        var inputID = parseInt(answer.productID);
        //now we have both 
        
        function checkIfMatches(inputID,productInventory){
                for(var i = 0; i < productInventory.length;i++){
                    if(productInventory[i].id === inputID){
                        return productInventory[i];
                    }
                };
        };

    checkIfMatches(inputID,productInventory);

          
      })
  }


  queryAllProducts();


  quantityPrompt = () => {
    inquirer.prompt (
        [{
      type: "input",
      name: "productQuantity",
      message: "How many of this item would you like to purchase? [Quit with Q]",}]
      ).then(function(){})



 };


 sufficientQuantityCheck = () => {


 }