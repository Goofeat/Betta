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
        photo: "AppleMacBookAirM2.jpeg",
        category: "Laptop",
        company: "Apple",
        name: "Macbook Air M2",
        color: "Space Gray",
        price: "799 990",
        quantity: 1
    },
    {
        id: 7,
        photo: "AsusROGZephyrusDuo16.jpeg",
        category: "Laptop",
        company: "Asus",
        name: "ROG Zephyrus Duo 16",
        color: "Black",
        price: "2 599 990",
        quantity: 1
    },
    {
        id: 8,
        photo: "AsusTUFGamingF15.jpeg",
        category: "Laptop",
        company: "Asus",
        name: "TUF Gaming F15",
        color: "Black",
        price: "489 990",
        quantity: 1
    },
    {
        id: 9,
        photo: "AppleMacBookPro16M1.jpeg",
        category: "Laptop",
        company: "Apple",
        name: "Macbook Pro 16",
        color: "Space Gray",
        price: "2 235 990",
        quantity: 1
    },
    {
        id: 10,
        photo: "AsusVivobookPro.jpeg",
        category: "Laptop",
        company: "Asus",
        name: "Vivobook Pro 15",
        color: "Black",
        price: "469 990",
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
        photo: "LG32LEDFHDSmart.jpeg",
        category: "TV",
        company: "LG",
        name: '32" LED FHD Smart',
        color: "Black",
        price: "149 990",
        quantity: 1
    },
    {
        id: 13,
        photo: "Samsung50LEDUHDSmart.jpeg",
        category: "TV",
        company: "Samsung",
        name: '50" LED UHD Smart',
        color: "Gray",
        price: "294 990",
        quantity: 1
    },
    {
        id: 14,
        photo: "LG77OLED8KSmart.jpeg",
        category: "TV",
        company: "LG",
        name: '77" OLED 8K Smart',
        color: "Black",
        price: "8 999 990",
        quantity: 1
    },
    {
        id: 15,
        photo: "Bang&Olufsen55BeoVisionEclipseOLED.jpeg",
        category: "TV",
        company: "B&O",
        name: '55" BeoVision Eclipse OLED',
        color: "Black",
        price: "4 312 990",
        quantity: 1
    }
];

loadProducts();

function loadProducts() {
    products.forEach(product => {
        let cardImage = document.getElementById("product-card-image-" + product.id);
        let cardCompany = document.getElementById("product-card-company-" + product.id);
        let cardTitle = document.getElementById("product-card-title-" + product.id);
        let cardPrice = document.getElementById("product-card-price-" + product.id);

        try {
            cardImage.src = "img/" + product.photo;
            cardCompany.innerHTML = product.company;
            cardTitle.innerHTML = product.name + " " + product.color;
            cardPrice.innerHTML = product.price + " ₸";
        } catch (Exception) {}
    });
}

function addToCart(id) {
    if (localStorage.getItem('cart')) {
        
    }

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
                let cartItemJSON = JSON.stringify(element);

                cart.push(cartItemJSON);
            }
        });
    }

	let cartJSON = JSON.stringify(cart);
	localStorage.setItem('cart', cartJSON);
    myFunction();
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

function myFunction() {
    let x = document.getElementById("snackbar");

    x.className = "show";
  
    setTimeout(function() { 
        x.className = x.className.replace("show", ""); 
    }, 3000);
}