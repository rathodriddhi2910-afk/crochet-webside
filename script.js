const products = [

    {
        name: "Crochet Turtle Keychain🐢",
        price: "₹249",
        category: "keychain",
        image: "images/turtle.jpg"
    },

    {
        name: "Mini Tulip Bouquet Keychain🌷",
        price: "₹199",
        category: "keychain",
        image: "images/tulip.jpg"
    },

    {
        name: "Evil Eye Keychain🧿",
        price: "₹149",
        category: "keychain",
        image: "images/evileye.jpg"
    },

    {
        name: "Camera Keychain📷",
        price: "₹199",
        category: "keychain",
        tag : "best",
        image: "images/camera keychain.jpg"
    },

    {
        name: "Cheery Keychain🍒",
        price: "₹149",
        category: "keychain",
        image: "images/cheery.jpg"
    },

    {
        name: "lily Keychain🌾",
        price: "₹99",
        category: "keychain",
        image: "images/lily.jpg"
    },

    {
        name: "Sunflower Keychain🌻",
        price: "₹149",
        category: "keychain",
        image: "images/sunflower keychain.jpg"
    },

    {
        name: "3D Heart Keychain♥️",
        price: "₹149",
        category: "keychain",
        image: "images/3D heart keychain.jpg"
    },

    {
        name: "Heart Keychain♥️",
        price: "₹99",
        category: "keychain",
        image: "images/heart keychain.jpg"
    },

    {
        name: "Panda Keychain",
        price: "₹299",
        category: "keychain",
        image: "images/panda.png"
    },

    {
        name: "Peacock Feather Keychain",
        price: "₹149",
        category: "keychain",
        image: "images/peacock feather keychain.jpg"
    },

    {
        name: "Bow Keychain",
        price: "₹99",
        category: "keychain",
        image: "images/bow keychain.jpg"
    },

    {
        name: "Evil Eye With Pearl Keychain",
        price: "₹199",
        category: "keychain",
        image: "images/evileye2.jpg"
    },

    {
        name: "Butterfly Hair Clip",
        price: "₹149",
        category: "hair",
        image: "images/butterfly hair clip.jpg"
    },

    {
        name: "Sunflower Hair Clip",
        price: "₹149",
        category: "hair",
        image: "images/sunflower hair clip.jpg"
    },

    {
        name: "White Bow Hair Clip",
        price: "₹99",
        category: "hair",
        image: "images/white bow.jpeg"
    },

    {
        name: "Pink Bow Hair Clip",
        price: "₹99",
        category: "hair",
        image: "images/bow hair clip.jpg"
    },

    {
        name: "White Flower Hair Clip",
        price: "₹79",
        category: "hair",
        image: "images/white flower.jpeg"
    },

    {
        name: "Red and White Bow Hair Clip",
        price: "₹199",
        category: "hair",
        image: "images/pink bow.png"
    },

    {
        name: "Shivlinga",
        price: "₹299",
        category: "decor",
        image: "images/shiva.png"
    },

    {
        name: "Tulip Flower Pot",
        price: "₹299",
        category: "decor",
        image: "images/tulip port.jpeg"
    },

    {
        name: "Football keychain",
        price: "₹249",
        category: "keychain",
        image: "images/football.jpeg"
    },

    {
        name: "Pink Butterfly Hair Clip",
        price: "₹249",
        category: "hair",
        image: "images/pink_butterfly.png"
    },

    {
        name: "Blue Butterfly Hair tie",
        price: "₹249",
        category: "hair",
        image: "images/blue_hairtie.png"
    },

    {
        name: "Pink Butterfly Hair tie",
        price: "₹249",
        category: "hair",
        image: "images/pink_hairtie.png"
    },

    {
        name: "Yellow Butterfly Hair tie",
        price: "₹249",
        category: "hair",
        image: "images/yellow_hairtie.png"
    },

    {
        name: "Cat Earbuds Case",
        price: "₹249",
        category: "decor",
        image: "images/cat_case.png"
    },

];

let currentProducts = products;

displayProducts(products);


function displayProducts(list) {

    const container =
        document.getElementById("products");

    container.innerHTML = "";

    list.forEach((p) => {

        const card =
            document.createElement("div");

        card.className = "card";

        card.innerHTML = `

<div class="tag">${p.tag ? p.tag.toUpperCase() : ""}</div>

<img loading="lazy" src="${p.image}">

<h3>${p.name}</h3>

<p class="price">${p.price}</p>

`;

        card.addEventListener("click", () => openPopup(p));

        container.appendChild(card);

    });

}



function filterCategory(category) {

    if (category === "all") {

        currentProducts = products;

    } else {

        currentProducts =
            products.filter(
                p => p.category === category
            );

    }

    displayProducts(currentProducts);

}



function searchProduct() {

    const input =
        document.getElementById("search")
            .value
            .toLowerCase();

    const filtered =
        currentProducts.filter(

            p => p.name
                .toLowerCase()
                .includes(input)

        );

    displayProducts(filtered);

}



function openPopup(product) {

    document.getElementById("popup").style.display = "flex";

    document.getElementById("popupImg").src = product.image;
    document.getElementById("popupTitle").innerText = product.name;
    document.getElementById("popupPrice").innerText = product.price;

    // 👇 IMPORTANT PART
    const message = encodeURIComponent(
        "Hello 😊\n\nI want to order this product:\n\n" +
        product.name +
        "\nPrice: " + product.price +
        "\n\nPlease share details."
    );

    const instaLink = "https://ig.me/m/hookedhearts.in?text=" + message;

    document.querySelector(".order-btn").href = instaLink;
}



function closePopup() {

    document.getElementById("popup")
        .style.display = "none";

}
window.onclick = function (event) {

    const popup = document.getElementById("popup");

    if (event.target === popup) {

        popup.style.display = "none";

    }

}
function copyDetails(){

const name =
document.getElementById("popupTitle").innerText;

const price =
document.getElementById("popupPrice").innerText;

const message =
"Hello 😊\n\nI want to order:\n\n" +
"Product: " + name + "\n" +
"Price: " + price;

navigator.clipboard.writeText(message);

alert("Copied! Now paste in Instagram DM");

}
