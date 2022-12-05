console.log(localStorage);

if (localStorage.getItem('currentUser')) {
    document.querySelector('div.account p').innerHTML = 'account';
} else {
    document.querySelector('div.account p').innerHTML = 'sign in';
}

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

function addToCart(id, is = false) {
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
    if (is) {    
        window.location.reload();
    } else {
        // successful();
    }
}

function emptyCart() {
	if (localStorage.getItem('cart')) {
		localStorage.removeItem('cart');
        window.location.reload();
	}
}

function incrementItem(id) {
	let cart = JSON.parse(localStorage.getItem('cart'));
    
    cart.forEach(item => {
        let element = JSON.parse(item);
        if (element.id == id) {
            element.quantity++;

            cart[cart.indexOf(item)] = JSON.stringify(element);
        }
    });

    let cartJSON = JSON.stringify(cart);
	localStorage.setItem('cart', cartJSON);
    window.location.reload();
}

function decrementItem(id) {
    let isRemove = false;

    let cart = JSON.parse(localStorage.getItem('cart'));
    
    cart.forEach(item => {
        let element = JSON.parse(item);
        if (element.id == id) {
            if (element.quantity == 1) {
                removeCartItem(id);
                isRemove = true;
            } else {
                element.quantity--;        
                cart[cart.indexOf(item)] = JSON.stringify(element);
            }
        }
    });
    
    if (!isRemove) {
        let cartJSON = JSON.stringify(cart);
        localStorage.setItem('cart', cartJSON);
        window.location.reload();   
    }
}

function removeCartItem(id) {
    let shoppingCart = JSON.parse(localStorage.getItem('cart'));

    for (let i = 0; i < shoppingCart.length; i++) {
        const item = JSON.parse(shoppingCart[i]);
        if (item.id == id) {
            shoppingCart.splice(i, 1);
            break;
        }
    }

    let shoppingCartJSON = JSON.stringify(shoppingCart);
    localStorage.setItem('cart', shoppingCartJSON);
    window.location.reload();
}

function show_main() {
    document.location.href = 'index.html';
}

function show_cart() {
    document.location.href = 'cart.html';
}

function setCoverProps() {
    let pageHeight = document.querySelector("div.page").offsetHeight;
    let pageWidth = document.querySelector("div.page").offsetWidth;
    document.querySelector("div.cover").style = "height: " + pageHeight + "px; width: " + pageWidth + "px";
}

var phoneMask = IMask(
    document.getElementById('phone'), 
    { mask: '+{7} ({7}00) 000 00 00' }
);

function loginDisplay() {
    if (localStorage.getItem('currentUser')) {
        // personalAccount(); // go to "личный кабинет"
    } else {
        setCoverProps();
        document.querySelector('div.cover').classList.toggle('hide');
        document.querySelector('div.sign').classList.toggle('hide');
    }
}

function loginHide() {
    document.querySelector('div.cover').classList.toggle('hide');
    document.querySelector('div.sign').classList.toggle('hide');
}

function loginCheck() {
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;

    if (localStorage.getItem(phone)) {
        let user = JSON.parse(localStorage.getItem(phone));

        console.log(localStorage);

        if (password == user.password) {
            localStorage.setItem('currentUser', localStorage.getItem(phone));
            window.location.reload();
        }
    }
}

function regCheck() {
    let fname = String(document.getElementById('f_name').value);
    let lname = String(document.getElementById('l_name').value);
    let phone = String(document.getElementById('phone').value);
    let new_password = String(document.getElementById('password').value);
    let confirm_password = String(document.getElementById('confirm_password').value);

    if (!fname.match(/[A-Z][a-z]{2,}/i)) {
        console.log("1");
        return;
    }

    if (!lname.match(/[A-Z][a-z]{2,}/i)) {
        console.log("2");
        return;
    }

    if (new_password != confirm_password && new_password.length < 6) {        
        console.log("3");
        return;
    }

    let user = {
        firstName: fname.substring(0, 1).toUpperCase() + fname.substring(1).toLowerCase(),
        lastName: lname.substring(0, 1).toUpperCase() + lname.substring(1).toLowerCase(),
        phoneNumber: phone,
        password: new_password
    }

    let userJSON = JSON.stringify(user);
    localStorage.setItem(phone, userJSON);
    localStorage.setItem('currentUser', userJSON);
    show_main();
}

if (window.location.pathname == '/cart.html') {
    let cartRowHTML = "";
    let itemCount = 0;
    let grandTotal = 0;

    let price = 0;
    let quantity = 0;
    let subTotal = 0;

    if (localStorage.getItem("cart")) {
        let shoppingCart = JSON.parse(localStorage.getItem("cart"));

        if (shoppingCart == 0) {
            document.getElementById("cart-display").style = "position:absolute; visibility: hidden";
        } else {
            document.getElementById("cart-is-empty").style = "position:absolute; visibility: hidden";

            shoppingCart.forEach(item => {
                let cartItem = JSON.parse(item);
                price = parseInt(cartItem.price.replaceAll(" ", ""));
                quantity = parseInt(cartItem.quantity);
                itemCount += quantity;
                subTotal = price * quantity;
        
                cartRowHTML += 
                    "<tr>" +
                        "<td>" + cartItem.category + ' ' + cartItem.company + ' ' + cartItem.name + ' ' + cartItem.color + "</td>" +
                        "<td class='text-center' width='15%'>" + Intl.NumberFormat("ru").format(price) + " ₸</td>" +
                        "<td class='text-center' width='10%'>" + 
                            '<button class="btn-table" onclick="decrementItem(' + cartItem.id + ')">-</button>' + 
                                quantity + 
                            '<button class="btn-table" onclick="incrementItem(' + cartItem.id + ')">+</button>' + 
                        "</td>" +
                        "<td class='text-center' width='15%'>" + Intl.NumberFormat("ru").format(subTotal) + " ₸</td>" +
                        '<td id="removeItem" class="text-center" width="10%">' +
                            '<button class="btn-table" onclick="removeCartItem(' + cartItem.id + ')">x</button>' + 
                        '</td>'
                    "</tr>";
        
                grandTotal += subTotal;
            });
        }
    } else {
        document.getElementById("cart-display").style = "position:absolute; visibility: hidden";
    }

    document.getElementById("cartTableBody").innerHTML = cartRowHTML;
    document.getElementById("itemCount").innerHTML = itemCount;
    document.getElementById("totalAmount").innerHTML = Intl.NumberFormat("ru").format(grandTotal) + " ₸";

    var productHTML =   '<div class="category-title">' +
                            '<h1>Products</h1>' +
                        '</div>' + 
                        '<ul class="category-products">';

    shuffleArray(products);
    for (let i = 0; i < 5; i++) {
        const item = products[i];
        productHTML += 
        '<li>' +
            '<div class="product-card">' +
                '<img class="product-card-image" src="img/' + item.photo + '" alt="Product Photo">' +
                '<p class="product-card-company">' + item.company + '</p>' + 
                '<p class="product-card-title">' + item.name + ' ' + item.color + '</p>' + 
                '<p class="product-card-price">' + item.price + ' ₸</p>' +
                '<div class="add-button">' +
                    '<button onclick="addToCart(' + item.id + ', true)">Add to Cart</button>' + 
                '</div>' + 
            '</div>' +
        '</li>';
    }

    productHTML += '</ul>'

    document.getElementById("product-item-container").innerHTML = productHTML;

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}