//Perform all the algebra operations present on the drop down using a=16 and b=4.

describe("Perform algebra operations" , function(){
	beforeEach(function(){
		//Redirect to the desired page
		browser.get("https://juliemr.github.io/protractor-demo/");
		//Input the first element
		element(by.xpath("//input[@ng-model='first']")).sendKeys(16);
		//input the second element
		element(by.xpath("//input[@ng-model='second']")).sendKeys(4);
		
	});
	
	it("Should add two numbers" , function(){
		//click on Go
		element(by.xpath(".//button[@id='gobutton']")).click();
		//Check whether the expected result matches the actual result or not
		expect(element(by.binding('latest')).getText()).toEqual('20');	
	});
	
	it("Should subtract two numbers" , function(){
		//Select the drop down list
		element(by.xpath("//*[@ng-model='operator']")).click();
		//select - for substraction
		element(by.xpath("//option[@value='SUBTRACTION']")).click();
		//click on Go
		element(by.xpath(".//button[@id='gobutton']")).click();
		//Check whether the expected result matches the actual result or not
		expect(element(by.binding('latest')).getText()).toEqual('12');
	});
	
	it("Should multiply two numbers" , function(){
		//Select the drop down list
		element(by.xpath("//*[@ng-model='operator']")).click();
		//select * for multiplication
		element(by.xpath("//option[@value='MULTIPLICATION']")).click();
		//click on Go
		element(by.xpath(".//button[@id='gobutton']")).click();
		//Check whether the expected result matches the actual result or not
		expect(element(by.binding('latest')).getText()).toEqual('64');
	});
	
	it("Should divide two numbers" , function(){
		//Select the drop down list
		element(by.xpath("//*[@ng-model='operator']")).click();
		//select / for division
		element(by.xpath("//option[@value='DIVISION']")).click();
		//click on Go
		element(by.xpath(".//button[@id='gobutton']")).click();
		//Check whether the expected result matches the actual result or not
		expect(element(by.binding('latest')).getText()).toEqual('4');
	});
	
	it("Should calculate the module of two numbers" , function(){
		//Select the drop down list
		element(by.xpath("//*[@ng-model='operator']")).click();
		//select % for mudulo operation
		element(by.xpath("//option[@value='MODULO']")).click();
		//click on Go
		element(by.xpath(".//button[@id='gobutton']")).click();
		//Check whether the expected result matches the actual result or not
		expect(element(by.binding('latest')).getText()).toEqual('0');
	});
});