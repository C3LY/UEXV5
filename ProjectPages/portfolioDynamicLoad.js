import { portfolioProjects } from './portfolioData.js';
function loadProjectData(projectData) {


    if (projectData) {
        document.getElementById('project-title').innerText = projectData.title; // Update the text with projectData.title
        document.getElementById('project-heading').innerText = projectData.title;

        document.getElementById('project-textProjectDescription').innerHTML = projectData.textProjectDescription;
        // document.getElementById('project-imageContentRight').innerHTML = projectData.imageContentRight;
        document.getElementById('project-textProcessLeft').innerHTML = projectData.textProcessLeft;
        // document.getElementById('project-textProcessRight').innerHTML = projectData.textProcessRight;
        // document.getElementById('project-imageCenter').innerHTML = projectData.imageCenter;
        document.getElementById('project-textMyExperienceAndOpinion').innerHTML = projectData.textMyExperienceAndOpinion;

    }
}

function loadCards(projectData) {

    if (projectData) {
        const cardContainer = document.getElementById('card-container-dynamic');
        console.log("card container" + cardContainer);

        projectData.imageProcessCards.forEach(imageCard => {
            const card = document.createElement('div');
            card.className = 'card enlargeImageAbility';
            card.setAttribute('data-direction', '');

            const image = document.createElement('img');
            image.src = imageCard["image"];
            image.alt = 'Placeholder';

            const info = document.createElement('div');
            info.className = 'info';
            info.textContent = imageCard["text"];

            card.appendChild(image);
            card.appendChild(info);

            console.log("card container" + card);
            cardContainer.append(card);

        });

    };
}

function buildNavBar() {
    const navBar = document.getElementById('project-nav');
    portfolioProjects.forEach(project => {
        const link = document.createElement('a');
        link.href = `projectTemplate.html?project=${project.id}`;
        link.innerText = project.description;
        navBar.appendChild(link);
        navBar.appendChild(document.createTextNode(' - ')); // Separator
    });
}


// On page load
window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('project');
    const projectData = portfolioProjects.find(p => p.id === projectId);

    loadProjectData(projectData);
    buildNavBar();
};

document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('project');
    const projectData = portfolioProjects.find(p => p.id === projectId);

    loadCards(projectData);
});



