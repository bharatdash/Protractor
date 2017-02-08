describe("Login to the GPS" , function(){
	//To convert a non Angular website to angular
	browser.ignoreSynchronization = true;
	var userId = element(by.xpath("//*[@id='txtName']"));
	var password = element(by.xpath("//*[@id='txtPassword']"));
	var loginButton = element(by.xpath("//*[@id='btnLogin']"));
	var message = element(by.xpath(".//*[@id='ucGPSMenu_hlnkMessage']"));
	var search = element(by.xpath("//*[@id='ctl00_cphBody_txtSearch']"));
	var searchButton = element(by.xpath("//*[@id='ctl00_cphBody_lbtnSearch']/i"));
	var result = element.all(by.xpath("//table[@id='ctl00_cphBody_gvMessageList']//td[1]"));

	//Spec number one
	it("should login with valid credentials" , function(){

		//Navigate to desired page
		browser.get("http://ourgoalplan.com/Login.aspx");

		//Input UserId
		userId.sendKeys("bharatd");

		//Input Password
		password.sendKeys("Kamehameha@2");

		//click on Login
		loginButton.click();

		//Get the current URL of the page
		var UrlName = browser.getCurrentUrl();

		//verify the URL
		expect(UrlName).toEqual("http://ourgoalplan.com/GoalSheet.aspx");

		//click on message
		message.click();

		//Give the value to the search field
		search.sendKeys("Ansuman Sahu");

		//click on search icon
		searchButton.click();

		//Print all the messages
		result.getText().then(function(message){
			console.log(message);
		});
	});
});