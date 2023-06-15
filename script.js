const submit = document.querySelector("button");
const dismiss = document.querySelector(".dismiss");
const input = document.getElementById("email");
const card_1 = document.querySelector(".card");
const card_2 = document.querySelector(".card2");
const change = document.querySelector(".change");
submit.addEventListener("click", e => {
    e.preventDefault();
    card_1.classList.add("hide");
    card_2.classList.remove("hide");
    change.textContent = input.value;
})
dismiss.addEventListener("click", () => {
    card_1.classList.remove("hide");
    card_2.classList.add("hide");
})

