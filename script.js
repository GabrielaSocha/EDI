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

function displayCharts(){
    var screenWidth = window.innerWidth;
    var chart1 = document.getElementById("carYearsChart");
    var chart2 = document.getElementById("carMakesChart");
    if (screenWidth >= 600 ) {
        chart1.style.display = "inline-block";
        chart2.style.display = "inline-block";
    } else {
        centerChart(chart1);
        centerChart(chart2);        
    }
}
function centerChart(chart) {
    chart.style.display = "block";
    chart.style.margin = "0 auto";
}

//Chart-1
fetch('https://my.api.mockaroo.com/cars.json?key=26099330')
  .then(response => response.json())
  .then(data => {
    const productionYearsCount = {};

    data.forEach(entry => {
      const year = entry.year;
      productionYearsCount[year] = (productionYearsCount[year] || 0) + 1;
    });

    const labels = Object.keys(productionYearsCount);
    const dataValues = Object.values(productionYearsCount);

    const ctx = document.getElementById('carYearsChart').getContext('2d');
    const carYearsChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Number of cars',
          data: dataValues,
          backgroundColor: '#9966FF', 
          borderColor: '#6633CC', 
          borderWidth: 2, 
        }],
      },
      options: {
        plugins:{
          legend:{
            labels, title: {
              color: 'white'
            }
          }
        },

        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: 'white'
            },
            title: {
              display: true,
              text: 'Number of cars', color: 'white'
            },
          },
          x: {
            ticks: {
              color: 'white'
            },
            title: {
              display: true,
              text: 'Production year', color: 'white'
            },
          },
        },
        responsive: false,
        maintainAspectRatio: true
      },
    });
  })

  .catch(error => console.error('Error fetching data:', error));


//Chart-2
fetch('https://my.api.mockaroo.com/cars.json?key=26099330')
    .then(response => response.json())
    .then(data => {
      const carMakesCount = {};

      data.forEach(entry => {
        const make = entry.make;
        carMakesCount[make] = (carMakesCount[make] || 0) + 1;
      });

      const labels = Object.keys(carMakesCount);
      const dataValues = Object.values(carMakesCount);

      const options = {
        plugins:{
          legend:{
            labels: {
              color: 'white'
            }
          }
        },
        responsive: false,
        maintainAspectRatio: true
      };
      const ctx = document.getElementById('carMakesChart').getContext('2d');

      const carMakesChart = new Chart(ctx, {
        scaleFontColor: "white",
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            data: dataValues,
            backgroundColor: getRandomColors(dataValues.length),
            borderColor: '#D3D3D3'
          }],
        },
        options: options
      });

      function getRandomColors(count) {
        const colors = [];
        for (let i = 0; i < count; i++) {
          const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.7)`;
          colors.push(color);
        }
        return colors;
      }
    })
    
    .catch(error => console.error('Error fetching data:', error));
