//Perform all the algebra operations present on the drop down using a=16 and b=4.

describe("Perform algebra operations" , function(){
	var goButton = element(by.xpath(".//button[@id='gobutton']"));
	var dropdown = element(by.xpath("//*[@ng-model='operator']"));
	var subtract = element(by.xpath("//option[@value='SUBTRACTION']"));
	var multiply = element(by.xpath("//option[@value='MULTIPLICATION']"));
	var divide = element(by.xpath("//option[@value='DIVISION']"));
	var modulo = element(by.xpath("//option[@value='MODULO']"));
	var result = element(by.xpath('//table//tr[1]//td[3]'));


	//Redirect to the desired page
	browser.get("https://juliemr.github.io/protractor-demo/");


	beforeEach(function(){

		//Input the first element
		element(by.xpath("//input[@ng-model='first']")).sendKeys(16);
		//input the second element
		element(by.xpath("//input[@ng-model='second']")).sendKeys(4);

	});


	//Spec number one for Addition
	it("Should add two numbers" , function(){
		//click on Go
		goButton.click();
		//Check whether the expected result matches the actual result or not
		expect(result.getText()).toEqual('20');	
	});


	//Spec number two for subtraction
	it("Should subtract two numbers" , function(){
		//Select the drop down list
		dropdown.click();
		//select - for subtraction
		subtract.click();
		//click on Go
		goButton.click();
		//Check whether the expected result matches the actual result or not
		expect(result.getText()).toEqual('12');
	});




	//Spec number three for Multiplication
	it("Should multiply two numbers" , function(){
		//Select the drop down list
		dropdown.click();
		//select * for multiplication
		multiply.click();
		//click on Go
		goButton.click();
		//Check whether the expected result matches the actual result or not
		expect(result.getText()).toEqual('64');
	});


	//Spec number four for Division
	it("Should divide two numbers" , function(){
		//Select the drop down list
		dropdown.click();
		//select / for division
		divide.click();
		//click on Go
		goButton.click();
		//Check whether the expected result matches the actual result or not
		expect(result.getText()).toEqual('4');
	});


	//Spec number five for modulo
	it("Should calculate the module of two numbers" , function(){
		//Select the drop down list
		dropdown.click();
		//select % for mudulo operation
		modulo.click();
		//click on Go
		goButton.click();
		//Check whether the expected result matches the actual result or not
		expect(result.getText()).toEqual('0');
	});
});