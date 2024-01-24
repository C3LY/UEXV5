import { portfolioProjects } from './portfolioData.js';
function loadProjectData() {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('project');
    const projectData = portfolioProjects.find(p => p.id === projectId);
    console.log(portfolioProjects);

    if (projectData) {
        document.getElementById('project-title').innerText = projectData.title;
        document.getElementById('project-description').innerText = projectData.description;
        // Update other placeholders similarly
    }
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
    loadProjectData();
    buildNavBar();
};