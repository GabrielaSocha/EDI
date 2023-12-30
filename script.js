document.addEventListener('DOMContentLoaded', fetchData);

function fetchData() {
    const apiUrl = 'https://my.api.mockaroo.com/cars.json?key=26099330'; 

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => populateTable(data))
        .catch(error => console.error('Error fetching data:', error));
}

function populateTable(data) {
    const tableBody = document.querySelector('#data-table tbody');

    tableBody.innerHTML = '';

    data.forEach(item => {
        const row = tableBody.insertRow();
        const idCell = row.insertCell(0);
        const brandCell = row.insertCell(1);
        const yearCell = row.insertCell(2);
        const modelCell = row.insertCell(3);
        const colorCell = row.insertCell(4);
        const vinCell = row.insertCell(5);

        idCell.textContent = item.id;
        brandCell.textContent = item.make;
        yearCell.textContent = item.year;
        modelCell.textContent = item.model;
        colorCell.textContent = item.color;
        vinCell.textContent = item.vin;

    });
}