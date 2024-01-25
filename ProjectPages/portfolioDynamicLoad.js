import { PORTFOLIOPROJECTS } from '../portfolioData.js';
function loadProjectData(projectData) {


    if (projectData) {
        document.getElementById('project-title').innerText = projectData.title; // Update the text with projectData.title
        document.getElementById('project-heading').innerText = projectData.title;

        document.getElementById('project-imageCover').style.backgroundImage = 'url(' + projectData.imageCover + ')';
        document.getElementById('project-textProjectDescription').innerHTML = projectData.textProjectDescription;
        document.getElementById('project-imageContentRight').src = projectData.imageContentRight;
        document.getElementById('project-textProcessLeft').innerHTML = projectData.textProcessLeft;

        document.getElementById('project-imageCenter').style.background = 'url(' + projectData.imageCenter + ')';
        document.getElementById('project-textImproving').innerHTML = projectData.textImproving;
        document.getElementById('project-textMyExperienceAndOpinion').innerHTML = projectData.textMyExperienceAndOpinion;

    }
}


function createCards(cardContainer, cards) {
    if (cardContainer && cards && Array.isArray(cards)) {
        cards.forEach(cardData => {
            const card = document.createElement('div');
            card.className = 'card enlargeImageAbility';
            card.setAttribute('data-direction', '');

            const image = document.createElement('img');
            image.src = cardData.image;
            image.alt = 'Placeholder';

            const info = document.createElement('div');
            info.className = 'info';
            info.textContent = cardData.text;

            card.appendChild(image);
            card.appendChild(info);

            cardContainer.appendChild(card);
        });
    }
}

function loadInCards(projectData) {
    const processCardContainer = document.getElementById('card-container-process');
    const resultsCardContainer = document.getElementById('card-container-results');
    createCards(processCardContainer, projectData.imageProcessCards);
    createCards(resultsCardContainer, projectData.imageResultsCards);
};


function buildNavBar() {
    const navBar = document.getElementById('project-nav');
    PORTFOLIOPROJECTS.forEach(project => {
        const link = document.createElement('a');
        link.href = `projectTemplate.html?project=${project.id}`;
        link.innerText = project.description;
        navBar.appendChild(link);
        navBar.appendChild(document.createTextNode(' - ')); 
    });
}



window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('project');
    const projectData = PORTFOLIOPROJECTS.find(p => p.id === projectId);

    loadProjectData(projectData);
    buildNavBar();
};

document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('project');
    const projectData = PORTFOLIOPROJECTS.find(p => p.id === projectId);

    loadInCards(projectData);
});



