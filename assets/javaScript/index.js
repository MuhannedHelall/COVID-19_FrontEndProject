function loadNumber() {
    let numbers = document.querySelectorAll('.loadNumber');
    numbers.forEach(number => {
        let goal = number.textContent;
        let counter = 0;
        let interval = setInterval(() => {
            if (counter >= goal) {
                clearInterval(interval);
                number.textContent = goal;
            } else {
                counter += 3124567;
                number.textContent = counter;
            }
        }, 3000 / goal);
    });
}

function toggleIcon(parent) {
    icons = parent.parentNode.parentNode.querySelectorAll(".icons");
    icons.forEach(icon => {
        icon.classList.add('bi-plus-circle');
        icons[i].classList.remove('bi-dash-circle-fill');
        if (parent.getAttribute("value") === "plus")
            icons[i].parentElement.setAttribute("value", "plus");
    });
    if (parent.getAttribute("value") === "plus") {
        parent.children[1].classList.remove('bi-plus-circle');
        parent.children[1].classList.add('bi-dash-circle-fill');
        parent.setAttribute("value", "minus");
    }
    else {
        parent.children[1].classList.add('bi-plus-circle');
        parent.children[1].classList.remove('bi-dash-circle-fill');
        parent.setAttribute("value", "plus");
    }
}