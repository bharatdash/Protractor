describe("Baba Ramdev Patanjali Gulab Jal" , function(){
	var filter = element(by.xpath("//input[@ng-model='filterProduct']"));
	var editButton = element(by.xpath("//*[@class='btn btn-default fa fa-edit']"));
	var validate = element(by.xpath("//*[@class='modal-title ng-binding']"));
	var cancelButton = element(by.xpath("//*[@ng-click='cancel()']"));
	var deleteButton = element(by.xpath("//*[@class='btn btn-danger fa fa-trash-o']"));
	var result = element(by.xpath(".//*//tr[10]/td[2]"));

	//Spec number one
	it("Should go to the page ", function(){
		//Redirect to the desired page
		browser.get("http://demos.angularcode.com/product-manager/#/");

		//Verifying the page title
		expect(browser.getTitle()).toEqual("Product Manager Web Application");
	});

	//Spec number two
	it("Should able to filter the page by a keyword" , function(){

		//search an item Baba Ramdev Patanjali Gulab Jal
		filter.sendKeys("Baba Ramdev Patanjali Gulab Jal");

		//click on the edit icon
		editButton.click();	

		//Switch focus to the pop up window
		browser.driver.switchTo().activeElement();

		//validate the pop up window
		expect(validate.getText()).toEqual("Edit product [ID: 589]");

		//click on cancel
		cancelButton.click();

		//sleep browser for 3 sec
		browser.sleep(3000);

		//delete product
		deleteButton.click();

		//Wait for the pop-up to show AND Click OK on the pop-up
		browser.switchTo().alert().accept();

		//sleep browser for 3 sec
		browser.sleep(3000);

	});

	//Spec number three
	it("should verify that no record was found" , function(){
		expect(result).not.toEqual("Baba Ramdev Patanjali Gulab Jal ");
	});
});