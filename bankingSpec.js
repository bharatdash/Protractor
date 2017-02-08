describe("Lets test a banking application" , function(){
	it("Should navigate to the banking login page" , function(){
		//Navigate to the page
		browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
		//click on customer login button
		element(by.buttonText("Customer Login")).click();
		//sleep the browser for 3 seconds
		browser.sleep(3000);
		//element.all returns a promise which is a ElementArrayFinder. The line below selects all the options from the drop down and move them to the array "item".
		element.all(by.css("#userSelect option")).then(function(item){
			console.log("Total length is :"+item.length);
			
			//printing the options from the drop downList
			console.log("=============Names=============");
			for(var i=0 ; i<item.length; i++){
				item[i].getText().then(function(text){
					console.log(text);
				});
			//end of for loop	
			}	
			
			//printing the values from the drop downList
			console.log("=============Value attributes============");
			for(i=0 ; i<item.length; i++){
				item[i].getAttribute("Value").then(function(text){
					console.log(text);
				}); 
			//end of for loop	
			}
		});		
		
		//Select an user from the drop down i.e Harry Porter
		element(by.xpath(".//option[@value='2']")).click();
		element(by.buttonText("Login")).click();
		//sleep the browser for 3 seconds
		browser.sleep(3000);
	});
});