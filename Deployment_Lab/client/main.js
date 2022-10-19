let action = document.querySelector("img")

let superAlert = evt => {
    alert("Please do not hover over this image.")
}

action.addEventListener("mouseover", superAlert)