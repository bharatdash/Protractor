describe("To get the first line from web-page",function(){
	browser.ignoreSynchronization = true;

	it("Should get the first line",function(){

		//Navigate to the desired web page
		browser.get("http://www.w3schools.com/html/tryit.asp?filename=tryhtml_default");

		//Selects the first line
		browser.actions().mouseMove({x: 72, y: 154}).click().click().click().perform();

		//wait to see before closing
		browser.sleep(2000);
	});
});