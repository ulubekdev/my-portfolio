const projectsContainer = document.querySelector(".projects_container");

async function renderProjects() {
    let data = await fetch("../data/projects.json");
    data = await data.json();                   
    data.forEach((ele) => {
        let project = document.createElement("div");
        project.className = "projects__project";
        project.setAttribute("pro-id", ele.id);
        project.innerHTML = `
            <a href="${ele.url}" target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src="${ele.image}">
            <div class="content-details fadeIn-top">
                    <h3>${ele.name}</h3>
                    <p>${ele.description}</p>
            </div>
            </a>
         `; 
        projectsContainer.append(project);
    });
}
renderProjects();
