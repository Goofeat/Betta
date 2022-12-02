const SamsungGalaxyA52 = {
    id: 1,
    photo: "SamsungGalaxyA52.jpg",
    category: "Smartphone",
    company: "Samsung",
    name: "Galaxy A52 128GB",
    color: "Black",
    price: 149990,
    quantity: 1
};

const SamsungGalaxyA13 = {
    id: 2,
    photo: "SamsungGalaxyA13.jpg",
    category: "Smartphone",
    company: "Samsung",
    name: "Galaxy A13 64GB",
    color: "Black",
    price: 99990,
    quantity: 1
};

const AppleIPhone13 = {
    id: 3,
    photo: "AppleIPhone13.jpeg",
    category: "Smartphone",
    company: "Apple",
    name: "iPhone 13 128GB",
    color: "Midnight",
    price: 459990,
    quantity: 1
};

const AppleIPhone14Pro = {
    id: 4,
    photo: "AppleIPhone14Pro.jpeg",
    category: "Smartphone",
    company: "Apple",
    name: "iPhone 14 Pro 1TB",
    color: "Gold",
    price: 1049990,
    quantity: 1
};

const HuaweiMate50Pro = {
    id: 5,
    photo: "HuaweiMate50Pro.jpeg",
    category: "Smartphone",
    company: "HUAWEI",
    name: "Mate 50 Pro 512GB",
    color: "Orange",
    price: 599990,
    quantity: 1
};

const products = [SamsungGalaxyA52, SamsungGalaxyA13, AppleIPhone13, AppleIPhone14Pro, HuaweiMate50Pro];

let cart = [];

function add_cart(id) {
    let contains = false;

    cart.forEach(element => {
        if (element.id == id) {
            element.quantity++;
            element.price *= element.quantity;
            contains = true;
        }
    });

    if (!contains) {
        products.forEach(element => {
            if (element.id == id) {
                cart[cart.length] = element;
            }
        });
    }

    console.log(cart);
}

let cartInHTML = "";

function show_cart() {
    cart.forEach(element => {
        cartInHTML += 
            '<div class="card">' +
                '<img class="card-image" src="img/' + element.photo + '" alt="' + element.name + '">' +
                '<p class="card-title">' + element.category + ' ' + element.company + ' ' + element.name + ' ' + element.color + '</p>' +
                '<p class="card-price">' + element.price + ' ₸</p>' +
            '</div>';
    });

    document.getElementById("cart-display").innerHTML += cartInHTML;
}