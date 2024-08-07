const words = [
    "apple", "applet", "appreciate", "applaud", "applause", "appoint", "appointment", "apportion", 
    "apposite", "appreciate", "apprehend", "apprehensive", "approach", "appropriate",
    "approve", "banana", "bananas", "bannister", "bald", "ball", "ballad", "ballerina",
    "balloon", "ballot", "bamboo", "ban", "band", "bandage", "cat", "catalog", "cater", 
    "cage", "cake", "calculate", "calendar", "calibrate", "call", "calm", "doll",
    "dollar", "dolphin", "domain", "domestic", "dominate", "donate",
    "dog", "dogma", "dogged", "elephant", "elevate", "elevator", "elephant", "elevate",
    "elevation", "elevator", "eleven", "eligible", "eliminate", "elite", "elongate", "else","fish", 
    "fishing", "fished", "grape", "grapes", "grapefruit", "house", "housetop", "housing", "ice", 
    "iceberg", "icy", "jacket", "jack", "jacking", "kite", "kitchen", "kitten", "lemon", "lemons", "lemonade"
];

const search = document.getElementsByClassName('container__search')[0];
const containerList = document.getElementsByClassName('list')[0];

function func() {
    const searchedWord = search.value.toLowerCase().trim();
    containerList.innerText = '';

    if (searchedWord.length >= 1) {
        const suggestedWords = words.filter(word => word.toLowerCase().includes(searchedWord));
        suggestedWords.forEach((word) => {
            const li = document.createElement('li');
            li.textContent = word;
            li.classList.add('individualList');

            function addFunc() {
                search.value = word;
                containerList.innerText = '';
            }

            li.addEventListener('click', addFunc);
            containerList.appendChild(li);
        });
    }
}

search.addEventListener("input", func);
