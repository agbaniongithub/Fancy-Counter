// SELECTORS
const currentValue = document.querySelector(".counter__value");
const addButton = document.querySelector(".counter__button--increase");
const minusButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterEl = document.querySelector(".counter");
const counterTitleEl = document.querySelector(".counter__title");


// FUNCTIONS
const incrementCounter = () => {
    const currentCount = +currentValue.innerText;
    currentValue.innerText = currentCount + 1; 
    if(currentCount >= 9) {
        currentValue.innerText = 10;
        counterEl.classList.add("counter--limit");
        counterTitleEl.innerHTML = "Limit! Buy <b>Pro</b> for >10"
    }
    //unfocus
    addButton.blur();
}
const decrementCounter = () => {
    const currentCount = +currentValue.innerText;
    if(currentCount > 0) {
        currentValue.innerText = currentCount - 1; 
    }
    if(currentCount === 10) {
        counterEl.classList.remove("counter--limit");
        counterTitleEl.textContent = "Fancy Counter"
    }
    //unfocus
    minusButtonEl.blur();
}
const resetCounter = () => {
    currentValue.innerText = 0;
    counterEl.classList.remove("counter--limit");
    counterTitleEl.textContent = "Fancy Counter"
    //unfocus
    resetButtonEl.blur();
}

// EVENT LISTENERS
addButton.addEventListener("click", incrementCounter);
addEventListener("keydown", incrementCounter);
minusButtonEl.addEventListener("click", decrementCounter);
resetButtonEl.addEventListener("click", resetCounter);

