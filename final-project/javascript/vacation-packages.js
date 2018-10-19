/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    CPNT-262: Web Client & Server Prog.
    Day 9 Workshop - JavaScript
    Instructor: Heather Tovey

    Jason Park
    10/19/2018
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


let packages = [    
  {
    "destination":"city1",
	"departDate":"Nov 13",
	"returnDate":"Nov 19",
    "price": "$1277",
    "details": "details about city 1",
    "imageName": "package-img1.jpg"
  },
  {
    "destination":"city2",
	"departDate":"Nov 19",
	"returnDate":"Nov 26",
    "price": "$1041",
    "details": "detail about city 2",
    "imageName": "package-img2.jpg"
  },
  {
    "destination":"city3",
	"departDate":"Nov 27",
	"returnDate":"Dec 2",
    "price": "$1296",
    "details": "detail about city 3",
    "imageName": "package-img3.jpg"
  }
];


// function that creates a package card and adds to the list of packages
let addPackage = function(package) {
    // get package-list div
    let packageList = document.getElementById('package-list');
    
    // create elements
    let packageCard = document.createElement('div'); //create package card
    packageCard.className = "package-card"; //set class of package card
    let packageTitle = document.createElement('h2'); //create package title
    let packageDate = document.createElement('p'); //create package date paragraph
    let packagePrice = document.createElement('p'); //create package price paragraph
    let city = document.createTextNode(package.destination); //destination text
    let date = document.createTextNode(`${package.departDate}-${package.returnDate}`); //vacation period text
    let price = document.createTextNode(package.price); //price text 
    
    // append text node to appropriate tags
    packageTitle.appendChild(city);
    packageDate.appendChild(date);
    packagePrice.appendChild(price);

    // append package tite,date and price to card
    packageCard.appendChild(packageTitle);
    packageCard.appendChild(packageDate);
    packageCard.appendChild(packagePrice);

    // append card to package-list div
    packageList.appendChild(packageCard);


    // show function that opens package-detail and changes placeholder image to package image
    let showContent = function() {
        // details
        packageDetail = document.getElementById('package-detail');
        details = document.getElementById('details');
        details.innerHTML = package.details;
        packageDetail.className = "package-detail open";

        // image
        packageImage = document.getElementById('package-img');
        packageImage.style.backgroundImage = "url(./img/" + package.imageName + ")";

        // indication
        packageCard.style.backgroundColor = "white";
    }

    // hide function that closes package-detail and changes current image to placeholder image
    let hideContent = function() {
        packageDetail.className = "package-detail closed";
        packageImage.style.backgroundImage = "url(./img/placeholder.jpg)";

        // indication
        packageCard.style.backgroundColor = "#bbb";
    }

    // mouseover eventlistener = when mouse is over package card, call function show
    packageCard.addEventListener('mouseover', showContent);

    // mouseout eventlistener = when mouse is outside a package card, call function hide
    packageCard.addEventListener('mouseout', hideContent);
}


for(let i = 0; i < packages.length; i++) {
    addPackage(packages[i]);
}


