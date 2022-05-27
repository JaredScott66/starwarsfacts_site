const url = "https://run.mocky.io/v3/e871d73b-0f1f-4651-9777-d0d78aaa2f5e";

let result = null;
async function factGrap(url) {
    const response = await fetch(url);
    if (response.ok) {
        const fact = await response.json();
        addSite(fact);
    }
}

function addSite(data) {
    result = data;
    const outputElement = document.querySelector("#fact");
    outputElement.innerHTML = data;
    console.log("fact: ", result);
}
factGrap(url);
console.log("fact: ", result)