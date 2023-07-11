function toggleMode(){
    const html = document.documentElement

    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        img.setAttribute("scr", "./Assets/avatar1.png")
    } else {
        img.setAttribute("scr", "./Assets/avatar2.png")
    }   
}