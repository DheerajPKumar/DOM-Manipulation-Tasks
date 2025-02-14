const inputEl = document.getElementById('container__input');
const btn = document.getElementById('container__btn');
const list = document.getElementById('container__list');
const container = document.getElementsByClassName('container');
const alert = document.getElementsByClassName('alert')[0];

function create(tag) {
    const chipEl = document.createElement('div');
    chipEl.classList.add('chip');

    const myTag = document.createElement('p');
    myTag.textContent = tag;
    chipEl.appendChild(myTag);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'x';
    removeBtn.classList.add('removeBtn');
    chipEl.appendChild(removeBtn);

    removeBtn.addEventListener('click', func);

    function func() {
        chipEl.parentNode.removeChild(chipEl);
    }

    return chipEl;
}

function addTag() {
    const tag = inputEl.value.trim();

    if (tag) {
        const chipEl = create(tag);
        list.appendChild(chipEl);
        inputEl.value = '';
        alert.style.display = 'none'; 
    } else {
        alert.style.display = 'block';
        alert.textContent = 'Please enter content of tag before adding.';
    }
}

inputEl.addEventListener('input', function() {
    alert.style.display = 'none';
});

btn.addEventListener('click', addTag);