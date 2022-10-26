const url = "https://swapi.dev/api/starships/9/";

let results = null;
async function getStarship(url = "https://swapi.dev/api/starships/10/") {
  const response = await fetch(url);
  if (response.ok) {  
    const data = await response.json();
    doStuff(data);
    shipToElement(data)
  }
}
function doStuff(data) {
  results = data;
  console.log("first: ", results);
  console.log("Name:", results.name)
//   console.log("Cargo:", results.cargo_capacity)
//   console.log("Consumables:", results.consumables)
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function shipToElement(list) {
    let text = "<ul>";
    delete (list.films)
    delete (list.url)
    delete (list.created)
    delete (list.edited)
    delete (list.pilots)
    for (x in list) { 
        x_ = capitalizeFirstLetter(x);  
        text += "<li>" + x_ + ": " + list[x] + "</li>";
    }
    text += "</ul>";
    document.getElementById("facts").innerHTML = text;
        // console.log(`${x}: ${list[x]}`)
        // p.append(list[x])
        // console.log(p.textContent)
    
}


//getStarship(url);
