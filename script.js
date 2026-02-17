const tableBody = document.getElementById("projectTable");

projects.forEach(project => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${project.title}</td>
    <td><a href="${project.live}" target="_blank">View</a></td>
    <td><a href="${project.source}" target="_blank">GitHub</a></td>
  `;

  tableBody.appendChild(row);
});