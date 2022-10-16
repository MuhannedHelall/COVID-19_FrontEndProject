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
                counter += 4123567;
                number.textContent = counter;
            }
        }, 5000000000 / goal);
    });
}

function toggleIcon(parent) {
    icons = parent.parentNode.parentNode.querySelectorAll(".icon");
    icons.forEach(icon => {
        icon.classList.add('bi-plus-circle');
        icon.classList.remove('bi-dash-circle-fill');
        if (parent.getAttribute("value") === "plus")
            icon.parentElement.setAttribute("value", "plus");
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

function toggleListItem(item) {
    parentList = item.parentNode.querySelectorAll(".listItem");
    if (item.classList.contains('bg-grey')) {
        item.classList.remove('bg-grey');
    }
    else {
        parentList.forEach(listItem => listItem.classList.remove('bg-grey'));
        item.classList.add('bg-grey');
    }
}