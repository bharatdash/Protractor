describe("Add a Todo" , function(){
 //maximise the browser
 browser.driver.manage().window().maximize();

 it("Should add an event in ToDo list" , function(){
 //opens the website
 browser.get("https://angularjs.org/");
  
  //creates new task
  element(by.model("todoList.todoText")).sendKeys("My Event");
  
  element(by.xpath('//input[@value="add"]')).sendKeys(protractor.Key.ENTER);
  
 //Selects the newly added task
 var greeting = element(by.xpath("//label[@class='checkbox']//following::label[2]")).click();
 browser.driver.sleep(5000);
 //matches 
 expect(greeting.getText()).toEqual('My Event');
  
 //});
 });
});