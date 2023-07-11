function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');

    const img = document.querySelector("#profile img");

    if (html.classList.contains('light')) {
        img.setAttribute("src", "./Assets/avatar1.png");
    } else {
        img.setAttribute("src", "./Assets/avatar2.png");
    }
    
}