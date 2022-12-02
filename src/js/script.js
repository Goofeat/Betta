const products = [
    {
        id: 1,
        photo: "SamsungGalaxyA52.jpg",
        category: "Smartphone",
        company: "Samsung",
        name: "Galaxy A52 128GB",
        color: "Black",
        price: "149 990",
        quantity: 1
    },
    {
        id: 2,
        photo: "SamsungGalaxyA13.jpg",
        category: "Smartphone",
        company: "Samsung",
        name: "Galaxy A13 64GB",
        color: "Black",
        price: "99 990",
        quantity: 1
    },
    {
        id: 3,
        photo: "AppleIPhone13.jpeg",
        category: "Smartphone",
        company: "Apple",
        name: "iPhone 13 128GB",
        color: "Midnight",
        price: "459 990",
        quantity: 1
    },
    {
        id: 4,
        photo: "AppleIPhone14Pro.jpeg",
        category: "Smartphone",
        company: "Apple",
        name: "iPhone 14 Pro 1TB",
        color: "Gold",
        price: "1 049 990",
        quantity: 1
    },
    {
        id: 5,
        photo: "HuaweiMate50Pro.jpeg",
        category: "Smartphone",
        company: "HUAWEI",
        name: "Mate 50 Pro 512GB",
        color: "Orange",
        price: "599 990",
        quantity: 1
    },
    {
        id: 6,
        photo: "MacBook14Pro.jpg",
        category: "",
        company: "",
        name: "",
        color: "",
        price: "599 990",
        quantity: 1
    },
    {
        id: 7,
        photo: "LenovoIdeapad3.jpg",
        category: "",
        company: "",
        name: "",
        color: "",
        price: "599 990",
        quantity: 1
    },
    {
        id: 8,
        photo: "AsusZenbook14.jpg",
        category: "",
        company: "",
        name: "",
        color: "",
        price: "599 990",
        quantity: 1
    },
    {
        id: 9,
        photo: "LenovoYogaSlim7Pro.jpg",
        category: "",
        company: "",
        name: "",
        color: "",
        price: "599 990",
        quantity: 1
    },
    {
        id: 10,
        photo: "photo.jpeg",
        category: "",
        company: "",
        name: "",
        color: "",
        price: "599 990",
        quantity: 1
    },
    {
        id: 11,
        photo: "Samsung65LEDUHDSmart.jpeg",
        category: "TV",
        company: "Samsung",
        name: '65" LED UHD Smart',
        color: "Black",
        price: "499 990",
        quantity: 1
    },
    {
        id: 12,
        photo: "photo.jpeg",
        category: "",
        company: "",
        name: "",
        color: "",
        price: "599 990",
        quantity: 1
    },
    {
        id: 13,
        photo: "photo.jpeg",
        category: "",
        company: "",
        name: "",
        color: "",
        price: "599 990",
        quantity: 1
    },
    {
        id: 14,
        photo: "photo.jpeg",
        category: "",
        company: "",
        name: "",
        color: "",
        price: "599 990",
        quantity: 1
    },
    {
        id: 15,
        photo: "photo.jpeg",
        category: "",
        company: "",
        name: "",
        color: "",
        price: "599 990",
        quantity: 1
    },
];

let is = true;

if (is) {
    loadProducts();
    is = false;
}

function loadProducts() {
    products.forEach(product => {
        let cardImage = document.getElementById("product-card-image-" + product.id);
        let cardTitle = document.getElementById("product-card-title-" + product.id);
        let cardPrice = document.getElementById("product-card-price-" + product.id);

        cardImage.src = "img/" + product.photo;
        cardTitle.innerHTML = product.company + " " + product.name + " " + product.color;
        cardPrice.innerHTML = product.price + " ₸";
    });
}

function addToCart(id) {
    let contains = false;

    let cart = new Array();

    if (localStorage.getItem('cart')) {
		cart = JSON.parse(localStorage.getItem('cart'));
	}
    
    cart.forEach(item => {
        let element = JSON.parse(item);
        if (element.id == id) {
            element.quantity++;
            contains = true;

            cart[cart.indexOf(item)] = JSON.stringify(element);
        }
    });

    if (!contains) {
        products.forEach(element => {
            if (element.id == id) {
                var cartItemJSON = JSON.stringify(element);

                cart.push(cartItemJSON);
            }
        });
    }

	var cartJSON = JSON.stringify(cart);
	localStorage.setItem('cart', cartJSON);
}

function emptyCart() {
	if (localStorage.getItem('cart')) {
		localStorage.removeItem('cart');
        window.location.reload();
	}
}

function removeCartItem(id) {
	if (localStorage.getItem('cart')) {
		let shoppingCart = JSON.parse(localStorage.getItem('cart'));
		localStorage.removeItem(shoppingCart[id]);
	}
}

function show_main() {
    document.location.href = 'index.html';
}

function show_cart() {
    document.location.href = 'cart.html';
}