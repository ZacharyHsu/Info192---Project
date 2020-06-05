const COUNTRIES = [
	{
  	id: "country-1",
    country_title: "Botswana",
    country_subtitle: "Summer 2020",
    country_description: "Spot Hippos and Solve Hypotheses Amid Unspoiled African Scenery. Diamond-rich and conservation friendly, Botswana has devoted over forty percent of its land to national parks, wildlife reserves, and nature preserves, and during our time here we’ll have ample opportunities to engage in some truly unique project-based learning across all three.", 
    image: "images/Botswana.jpg",
    image_title: "Botswana animals"
  }, 
	{
  	id: "country-2",
    country_title: "India",
    country_subtitle: "Fall 2020",
    country_description: "Leave your perceptions at the temple door. A country best known for its innumerable deities, mouth-searing dishes, elaborate weddings, and multicolored sarees. This time around our term will be based out of Mumbai, India’s most populous and multicultural city.", 
    image: "images/India.jpg",
    image_title: "Gateway of India"
  }, 
	{
  	id: "country-3",
    country_title: "Japan",
    country_subtitle: "Winter 2020",
    country_description: "Tradition and modernity combine for a timeless experience. Japan can always be counted on to stay much the same. Little will have changed in Hiroshima since our first visit in 2014, and our new students will likely enjoy the same arcades and okonomiyaki stalls as those who preceded them. ",
   	image: "images/Japan.jpg",
    image_title: "Japan Senbon Torii"
  }, 
	{
  	id: "country-4",
    country_title: "Spain",
    country_subtitle: "Spring 2020",
    country_description: "The Basque country is a region unlike any other. Spain is one of Europe’s most scenic countries, and, perhaps more importantly, one of its friendliest. Gifted architects such as Antoni Gaudí have crafted many wondrous masterpieces throughout Spain, and many stand side-by-side with well-preserved Roman ruins.", 
    image: "images/Spain.jpg",
    image_title: "Spain city"
  }
];

function createCountryHTML(country) {
	let countryHTML = $("<article>");
	
	let figure = $("<figure>");
	let image = $("<img>", {src: country.image, alt: country.image_title});
	let caption = $("<figcaption>" + country.image_title + "</figcaption>");
	figure.append(image);
	figure.append(caption);
	countryHTML.append(figure);
	
	let title = $("<h3>" + country.country_title + "</h3>");
	countryHTML.append(title);

	let subtitle = $("<h4>" + country.country_subtitle + "</h4>");
	countryHTML.append(subtitle);

	let description = $("<p>" + country.country_description + "</p>");
	countryHTML.append(description);

	return countryHTML;
}

function displayCountries(countries) {
	let countriesList = $("#countriesList");

	// Empty previous courses
	countriesList.empty();
	for(let country of countries) {
		let countryHTML = createCountryHTML(country);
		countriesList.append(countryHTML);
	}
}




$(document).ready(function(){
	let mainCountries = [COUNTRIES[0], COUNTRIES[1], COUNTRIES[2], COUNTRIES[3]];

	displayCountries(mainCountries);
	
	$("#searchText").on("keyup", search)
});

function search() {
		let query = $("#searchText").val();
		query = query.toLowerCase().trim();

		let matches = [];
		for(let country of COUNTRIES) {
			let countryTitle = country.country_title.toLowerCase();
			if(countryTitle.includes(query)) {
				matches.push(country);
			}
		}


		displayCountries(matches);
}
