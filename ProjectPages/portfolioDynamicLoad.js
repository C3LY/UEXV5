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

        if (projectData.subProjects && Array.isArray(projectData.subProjects)) {
            const projectContainer = document.getElementById('subProjects');
            projectData.subProjects.forEach(subProject => {

                const header = document.createElement('div');
                header.className = 'subProjectHeader';
                header.innerHTML = subProject.verb + " - " + subProject.projectTitle;
                projectContainer.appendChild(header);

                const contentContainer = document.createElement('div');
                contentContainer.className = 'content';

                const leftContainer = document.createElement('div');
                leftContainer.className = 'left-column';
                leftContainer.id = 'subProject-description';
                leftContainer.innerHTML = subProject.description;
                contentContainer.appendChild(leftContainer);


                const rightContainer = document.createElement('div');
                rightContainer.className = 'right-column';
                rightContainer.id = 'subProject-image';
                const imgForRight = document.createElement('img');
                imgForRight.className = 'floatingImage content-image enlargeImageAbility';
                imgForRight.src = subProject.image;
                rightContainer.appendChild(imgForRight);
                contentContainer.appendChild(rightContainer);

                projectContainer.appendChild(contentContainer);

            });
        }

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



