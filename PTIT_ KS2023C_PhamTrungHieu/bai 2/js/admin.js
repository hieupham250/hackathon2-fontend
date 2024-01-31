let projects = JSON.parse(localStorage.getItem("projects")) || [];
let newProjects = document.getElementById("newProjects");

// lưu dữ liệu lên local
function saveToLocalStorage() {
    localStorage.setItem("projects", JSON.stringify(projects));
}

// hiển thị project
function renderTable() {
    let tableBody = document.getElementById("projectsTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";

    projects.forEach(function(project, index) {
        let newRow = tableBody.insertRow();

        let tables = [
            newRow.insertCell(), newRow.insertCell(), newRow.insertCell(),
            newRow.insertCell(), newRow.insertCell(), newRow.insertCell(),
            newRow.insertCell(), newRow.insertCell(), newRow.insertCell(),
            newRow.insertCell(), newRow.insertCell()
        ];

        tables[0].textContent = index + 1;
        tables[1].textContent = project.projectName;
        tables[2].textContent = project.imageURL;
        tables[3].textContent = project.subTitle;
        tables[4].textContent = project.description;
        tables[5].textContent = project.date;
        tables[6].textContent = project.client;
        tables[7].textContent = project.type;
        tables[8].textContent = project.techs;
        tables[9].textContent = project.url;
        tables[10].innerHTML = '<button class="delete-btn" onclick="deleteRow(' + index + ')">Delete</button> <button class="update-btn" onclick="updateRow(' + index + ')">Update</button>';
    });
}

// thêm project
function addProject() {
    let projectName = document.getElementById("projectName").value;
    let subTitle = document.getElementById("subTitle").value;
    let description = document.getElementById("description").value;
    let date = document.getElementById("date").value;
    let client = document.getElementById("client").value;
    let type = document.getElementById("type").value;
    let techs = document.getElementById("techs").value;
    let url = document.getElementById("url").value;
    projects.push({
        projectName: projectName,
        imageURL: imageURL,
        subTitle: subTitle,
        description: description,
        date: date,
        client: client,
        type: type,
        techs: techs,
        url: url,
    });
    saveToLocalStorage();
    renderTable();
    document.querySelectorAll("input").forEach(function(input) {
        input.value = "";
    });
}

renderTable();

newProjects.addEventListener("click", function(event){
    event.preventDefault();
    addProject();
});

function deleteRow(index) {
    projects.splice(index, 1);
    saveToLocalStorage();
    renderTable();
}