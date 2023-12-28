async function apiData(){
    const apiLink = 'https://my.api.mockaroo.com/cars.json?key=26099330';

    const response = await fetch(apiLink)
    const datapoints = await response.json()

    console.log(datapoints);

    const X = datapoints.map((brand) => brand.make)
    arr = X
    console.log(arr)
    
    //const Y = datapoints.map((number) => number.variableX)
    //variableY = Y
    //console.log(variableY)


}


