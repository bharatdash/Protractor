describe("Posse website" , function(){

	var sydney = element(by.xpath("//*[contains(text(), 'SYDNEY')]"));
	var filterResult = element.all(by.xpath("//*[text() >=100][text() <=200]/ancestor::div[3]/preceding-sibling::div[1]/child::div[1]"));
	var totalPictures = element.all(by.xpath("//img[@class='photo']"));
	var selectButton = element(by.xpath("//button[4]"));
	var afterSelected = element.all(by.xpath("//div[@class='placeName']"));
	it("It should select Sydney" , function(){

		//open the web page
		browser.get("https://posse.com/",20000);

		//select Sydney
		sydney.click();

		//Sleep the browser for 3 sec.
		browser.sleep(3000);

		//print the ratings beyween 100 and 200
		filterResult.then(function(list){

			//print length of the filtered result
			console.log("Total places are :"+list.length);
			console.log("=======================================================");

			//printing the places having ratings with in the range 100 and 200.
			for(i=0 ; i < list.length ; i++){
				list[i].getText().then(function(result){
					console.log(result);
				});
			}	

			//select 4 places by picture
			totalPictures.then(function(picture){

				//print length of filtered pictures
				console.log("Total number of pictures"+picture.length);

				//click on 4 of them
				for(i=0 ; i < 4 ; i++){
					picture[i].click();
				}

				//click on select button to show all the selected places
				selectButton.click();	
			});

			//Get those which were places selected by earlier
			afterSelected.then(function(places){
				console.log("Totoal number of places are :" +places.length);
				console.log("-------------------------------------------");

				//Verifies that only places got selected
				expect(places.length).toBe(4);
			});
		});
		//sleep browser for 3 sec
		browser.sleep(3000);
	});
});