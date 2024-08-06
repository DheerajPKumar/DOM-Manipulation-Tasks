const words = [
    "apple", "applet", "appreciate", "banana", "bananas", "bannister", "cat", "catalog", "cater", 
    "dog", "dheeraj", "dogma", "dogged", "elephant", "elevate", "elevator", "fish", "fishing", "fished",
    "grape", "grapes", "grapefruit", "house", "housetop", "housing", "ice", "iceberg", "icy", 
    "jacket", "jack", "jacking", "kite", "kitchen", "kitten", "lemon", "lemons", "lemonade"
];

const search = document.getElementsByClassName('container__search')[0];
const containerList = document.getElementsByClassName('list')[0];

function func() {
    const searchedWord = search.value.toLowerCase();
}

search.addEventListener("input", func);
