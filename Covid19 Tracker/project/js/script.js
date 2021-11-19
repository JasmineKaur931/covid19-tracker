function searchData() {
    var city = document.getElementById("searchBox").value;
    console.log(city.value);
  fetch("https://disease.sh/v3/covid-19/countries" + "/" + city)
    .then((response) => {
      return response.json();
    })
     .then((data) => {
      var x = document.getElementById("total");
      console.log(x);
      displayData(data);
    })
    .catch((error) => {
      alert("Country Not Found");
    })
}
function displayData(data)
{
  location.href = "#country_info"
    console.log(data.cases);
    const country  = data.country;
    const flag = data.countryInfo;
    const cases = data.cases;
    const deaths = data.deaths;
    const recovered = data.recovered;
    const active = data.active;
    const critical = data.critical;
    const tests = data.tests;
    const flagimg = data.countryInfo.flag;
    console.log(country, flag, cases, deaths, recovered, active, critical, tests);
    console.log(document.getElementById("cname").innerText); 
    document.getElementById("cname").innerText = country;
    document.getElementById("flag").src = flagimg;
    document.getElementById("total").innerText = cases;
    document.getElementById("active").innerText = active;
    document.getElementById("critical").innerText = critical;
    document.getElementById("recovered").innerText = recovered;
    document.getElementById("death").innerText = deaths;
    document.getElementById("test").innerText = tests;
    displayChart(data);
  }

  let myChart;

  function displayChart(info)
  {
    if(myChart)
    {
      myChart.destroy();
    }
  const data = {
    labels: ['Total', 'Recovered', 'Death'],
          datasets: [{
              label: 'Covid-19 Trends',
              data: [info.cases, info.recovered, info.deaths],
              backgroundColor: [
                  'rgba(37, 150, 190, 0.7)',
                  'rgba(120, 209, 98, 0.7)',
                  'rgba(230, 23, 23, 0.7)',
              ]
          }]
  };
  const config = {
    type: 'bar',
    data,
    options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
  };

    myChart = new Chart(
    document.getElementById('chart'), config
  );

}
