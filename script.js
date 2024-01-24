import { PORTFOLIOPROJECTS } from './portfolioData.js';

const sidebar = document.querySelector('.sidebar');
const leftTickerText = document.querySelector('.left-ticker-text');

PORTFOLIOPROJECTS.forEach(project => {
    const portfolio_container = document.createElement('div');
    portfolio_container.className = 'portfolio-container';

    const singleTickerText = document.createElement('span');
    singleTickerText.id = 'ticker-'+ project.id;
    singleTickerText.innerHTML = project.description + " - ";

    leftTickerText.appendChild(singleTickerText);


    let symbolP = new Image();
    symbolP.className = 'portfolio-symbol';
    symbolP.src = project.symbolURL;

    const titleLink = document.createElement('a');
    titleLink.href = `ProjectPages/projectTemplate.html?project=${project.id}`;
    console.log("href: " + location.href + "pathname: " + location.pathname + "hostname: " + location.hostname + "origin: " + location.origin);
    console.log("hreflink:" + titleLink.href);
    symbolP.href = `ProjectPages/projectTemplate.html?project=${project.id}`;
    titleLink.className = 'portfolio-item';
    titleLink.textContent = project.title;
    titleLink.onmouseenter = () => showImageAnBigText(project.id);


    portfolio_container.appendChild(symbolP);
    portfolio_container.appendChild(titleLink);

    sidebar.appendChild(portfolio_container);
});


function showImageAnBigText(portfolioID) {


    showVideo(portfolioID);
  
    changeBigText(portfolioID);

    changeSideBarColor(portfolioID);

    // var tickerText = document.getElementById('ticker-text');
    // var textDescription = PORTFOLIO_projectS.find(x => x.id === portfolio).description;


    // tickerText.innerHTML = (textDescription+" - ").repeat(2);

}

function showImage(portfolio){
    var imagePreview = document.getElementById('imagePreview');
    var tempImageURL = (PORTFOLIOPROJECTS.find(x => x.id === portfolio).imageURL);
    imagePreview.style.backgroundImage = tempImageURL;
    imagePreview.style.display = 'block'; // Show the image box
}

function showVideo(portfolioID){
    var videoPreview = document.getElementById('videoPreview');
    videoPreview.src = (PORTFOLIOPROJECTS.find(x => x.id === portfolioID).videoURL);
}

function changeSideBarColor(portfolioID) {
 PORTFOLIOPROJECTS.forEach(element => document.getElementById('ticker-'+element.id).style.color = 'black');
 var textSpan = document.getElementById('ticker-'+portfolioID);
 textSpan.style.color = 'red';
}

function changeBigText(portfolioID){
    var bigTextPreview = document.getElementById('bigTextPreview');
    bigTextPreview.textContent = (PORTFOLIOPROJECTS.find(x => x.id === portfolioID).bigtext);
    imagePreview.style.display = 'block';
}

function hideImageAndBigText() {
    var imagePreview = document.getElementById('imagePreview');
    imagePreview.style.display = 'none'; // Hide the image box
    var bigTextPreview = document.getElementById('bigTextPreview');
    bigTextPreview.style.display = 'none'; // Hide the image box;
}


