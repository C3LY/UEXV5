import { PORTFOLIO_ITEMS } from './PORTFOLIOITEMS.js';
const sidebar = document.querySelector('.sidebar');

PORTFOLIO_ITEMS.forEach(item => {
    const portfolio_container = document.createElement('div');
    portfolio_container.className = 'portfolio-container';

    let symbolP = new Image();
    symbolP.className = 'portfolio-symbol';
    symbolP.src = item.symbolURL;

    const title = document.createElement('div');
    title.className = 'portfolio-item';
    title.textContent = item.title;
    title.onmouseenter = () => showImageAnBigText(item.id);
    // title.onmouseleave = hideImageAndBigText;


    // const description = document.createElement('div');
    // description.className = 'portfolio-description';
    // description.innerHTML = `<div class="description-text">${item.description}</div>`;

    portfolio_container.appendChild(symbolP);
    portfolio_container.appendChild(title);
    // portfolio_container.appendChild(description);
    sidebar.appendChild(portfolio_container);
});

function showImageAnBigText(portfolio) {


    showVideo(portfolio);
  
    changeBigText(portfolio);

    changeSideBarColor(portfolio);

    // var tickerText = document.getElementById('ticker-text');
    // var textDescription = PORTFOLIO_ITEMS.find(x => x.id === portfolio).description;


    // tickerText.innerHTML = (textDescription+" - ").repeat(2);

}

function showImage(portfolio){
    var imagePreview = document.getElementById('imagePreview');
    var tempImageURL = (PORTFOLIO_ITEMS.find(x => x.id === portfolio).imageURL);
    imagePreview.style.backgroundImage = tempImageURL;
    imagePreview.style.display = 'block'; // Show the image box
}

function showVideo(portfolio){
    var videoPreview = document.getElementById('videoPreview');
    videoPreview.src = (PORTFOLIO_ITEMS.find(x => x.id === portfolio).videoURL);
}

function changeSideBarColor(portfolio) {
    var textSpan = document.getElementById(portfolio);
    textSpan.style.color = 'red';

 PORTFOLIO_ITEMS.forEach(element => document.getElementById(element.id).style.color = 'black');

}

function changeBigText(portfolio){
    var bigTextPreview = document.getElementById('bigTextPreview');
    bigTextPreview.textContent = (PORTFOLIO_ITEMS.find(x => x.id === portfolio).bigtext);
    imagePreview.style.display = 'block';
}



function hideImageAndBigText() {
    var imagePreview = document.getElementById('imagePreview');
    imagePreview.style.display = 'none'; // Hide the image box
    var bigTextPreview = document.getElementById('bigTextPreview');
    bigTextPreview.style.display = 'none'; // Hide the image box;
}


