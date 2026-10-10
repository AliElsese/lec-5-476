let btnPrimary = document.querySelector(".btn-primary");
let btnSuccess = document.querySelector(".btn-success");
let body = document.body;
// let actorImg = document.querySelector("img");
let imgs = document.querySelectorAll("img");

// btnPrimary.addEventListener("click", () => {
//     console.log("primary button")
//     // body.style.backgroundColor = "blue";
//     // body.classList.remove("bg-danger")
//     // body.classList.add("bg-info")
//     // body.classList.toggle("bg-danger")
//     // body.classList.replace("bg-danger", "bg-info")
//     console.log(actorImg.getAttribute("alt"))
//     actorImg.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIfyKAPvhRJ4REOl8CZ44TDNKLhtWHdjVzPsgj3nUwNQ&s=10")
// })

imgs[1].addEventListener("click", () => {
    changeImg(1)
})
imgs[2].addEventListener("click", () => {
    changeImg(2)
})
imgs[3].addEventListener("click", () => {
    changeImg(3)
})

function changeImg(selectedIndex) {
    // console.log(imgs[selectedIndex].getAttribute("src"))
    let baseImg = imgs[0].getAttribute("src");
    imgs[0].setAttribute("src", imgs[selectedIndex].getAttribute("src"))
    imgs[selectedIndex].setAttribute("src", baseImg)
}