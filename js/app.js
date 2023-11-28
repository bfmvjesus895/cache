const container = document.querySelector(".container");

const onepiece = [
    { name: "onepiece 1", image: "images/onepiece1.jpg"},
    { name: "onepiece 2", image: "images/onepiece2.jpg"},
    { name: "onepiece 3", image: "images/onepiece3.jpg"},
    { name: "onepiece 4", image: "images/onepiece4.jpg"},
    { name: "onepiece 5", image: "images/onepiece5.jpg"},
    { name: "onepiece 6", image: "images/onepiece6.jpg"}
]

const showOnepiece = () => {
    let output =""

    onepiece.forEach(
        ({ name, image, }) =>
        (output += `
            <div class="card">
                <img class="card-avatar" src=${image}/>
                <h1 class="card-title">${name}</h1>
            </div>
            `)
    )

    container.innerHTML = output
}

    document.addEventListener("DOMContentLoaded", showOnepiece)

    if("serviceWorker" in navigator){
        console.log("si soporta SW");
        window.addEventListener("load", function(){
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("Service worker registrado"))
            .catch(err => console.log ("Service worker no registrado"))
        });
    }