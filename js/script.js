const hero = document.querySelector("#hero-image-container");

hero.addEventListener("click", animate, false);

function animate() {
    let colorArr = ['#0468BF', '#049DBF', '#3B592D', '#D99E6A', '#8C4332'];
    let colorNum = Math.floor(Math.random() * Math.floor(colorArr.length));
    let color = colorArr[colorNum]

    hero.style.borderColor = color;
}