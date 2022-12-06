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

if (!window.location.href.includes('cart')) {
    let smartphones = "";
    let laptops = "";
    let tvs = "";
    let add = "";

    shuffleArray(products);
    products.forEach(product => {
        add =
            '<li>' +
                '<div class="product-card">' +
                    '<img class="product-card-image" src="img/' + product.photo + '" alt="Product Photo">' +
                    '<p class="product-card-company ml-1">' + product.company + '</p>' + 
                    '<p class="product-card-title ml-1">' + product.name + ' ' + product.color + '</p>' + 
                    '<p class="product-card-price ml-1">' + product.price + ' ₸</p>' +
                    '<div class="add-button">' +
                        '<button onclick="addToCart(' + product.id + ')">Add to Cart</button>' + 
                    '</div>' + 
                '</div>' +
            '</li>';
        console.log(add);

        switch (product.category) {
            case "Smartphone":
                smartphones += add;
                break;
            case "Laptop":
                laptops += add;
                break;
            case "TV":
                tvs += add;
                break;
        }
    });

    document.getElementById('smartphones-category').innerHTML = smartphones;
    document.getElementById('laptops-category').innerHTML = laptops;
    document.getElementById('tvs-category').innerHTML = tvs;
}

function addToCart(id, is = false) {
    let contains = false;

    let cart = [];

    if (localStorage.getItem('cart')) {
		cart = JSON.parse(localStorage.getItem('cart'));
	}
    
    cart.forEach(item => {
        let element = JSON.parse(item);
        if (element.id === id) {
            element.quantity++;
            contains = true;

            cart[cart.indexOf(item)] = JSON.stringify(element);
        }
    });

    if (!contains) {
        products.forEach(element => {
            if (element.id === id) {
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
        if (element.id === id) {
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
        if (element.id === id) {
            if (element.quantity === 1) {
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
        if (item.id === id) {
            shoppingCart.splice(i, 1);
            break;
        }
    }

    let shoppingCartJSON = JSON.stringify(shoppingCart);
    localStorage.setItem('cart', shoppingCartJSON);
    window.location.reload();
}

function showMain() {
    document.location.href = 'index.html';
}

function showCart() {
    document.location.href = 'cart.html';
}

function setCoverProps() {
    let pageHeight = document.querySelector("div.page").offsetHeight;
    let pageWidth = document.querySelector("div.page").offsetWidth;
    document.querySelector("div.cover").style = "height: " + pageHeight + "px; width: " + pageWidth + "px";
}

try {
    const phoneMask = IMask(
        document.getElementById('phone'),
        {mask: '+{7} ({7}00) 000 00 00'}
    );
} catch (Exception) {}

function loginDisplay() {
    if (localStorage.getItem('currentUser')) {
        // personalAccount(); // go to "личный кабинет"
    } else {
        document.getElementById('log-window').innerHTML =
            '<section>' +
            '<div class="sign">' +
            '<h1>Login</h1>' +
            '<form action="#">' +
            '<div class="sign-card">' +
            '<input type="text" id="phone" class="i" placeholder="Phone number" autofocus autocomplete="off">' +
            '<hr class="sign-hr">' +
            '<input type="password" id="password" class="i" placeholder="Password" autocomplete="off">' +
            '<hr class="sign-hr">' +
            '<p>Don\'t have an account yet? <a href="register.html">Register</a></p>' +
            '<button class="sign-btn" id="submit" onclick="loginCheck()">Submit</button>' +
            '</div>' +
            '</form>' +
            '</div>' +
            '</section>' +
            '<div class="cover" onclick="loginHide()"></div>';

        setCoverProps();
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

        if (password === user.password) {
            localStorage.setItem('currentUser', localStorage.getItem(phone));
            window.location.reload();
        }
    }
}

function regCheck() {
    let firstName = String(document.getElementById('f_name').value);
    let lastName = String(document.getElementById('l_name').value);
    let phone = String(document.getElementById('phone').value);
    let new_password = String(document.getElementById('password').value);
    let confirm_password = String(document.getElementById('confirm_password').value);

    if (!firstName.match(/[A-Z][a-z]{2,}/i)) {
        console.log("1");
        return;
    }

    if (!lastName.match(/[A-Z][a-z]{2,}/i)) {
        console.log("2");
        return;
    }

    if (new_password !== confirm_password && new_password.length < 6) {
        console.log("3");
        return;
    }

    let user = {
        firstName: firstName.substring(0, 1).toUpperCase() + firstName.substring(1).toLowerCase(),
        lastName: lastName.substring(0, 1).toUpperCase() + lastName.substring(1).toLowerCase(),
        phoneNumber: phone,
        password: new_password
    }

    let userJSON = JSON.stringify(user);
    localStorage.setItem(phone, userJSON);
    localStorage.setItem('currentUser', userJSON);
    showMain();
}

if (window.location.href.includes('cart')) {
    let cartRowHTML = "";
    let itemCount = 0;
    let grandTotal = 0;

    let price = 0;
    let quantity = 0;
    let subTotal = 0;

    const emp1 = document.getElementById("cart-display");
    const emp2 = document.getElementById("cart-is-empty");

    if (localStorage.getItem("cart")) {
        let shoppingCart = JSON.parse(localStorage.getItem("cart"));

        if (shoppingCart === 0) {
            emp2.classList.remove('hide');
        } else {
            emp1.classList.remove('hide');

            shoppingCart.forEach(item => {
                let cartItem = JSON.parse(item);
                price = parseInt(cartItem.price.replaceAll(" ", ""));
                quantity = parseInt(cartItem.quantity);
                itemCount += quantity;
                subTotal = price * quantity;
        
                cartRowHTML += 
                    '<tr>' +
                        '<td>' + cartItem.category + ' ' + cartItem.company + ' ' + cartItem.name + ' ' + cartItem.color + '</td>' +
                        '<td class="text-center" width="15%">' + Intl.NumberFormat("ru").format(price) + ' ₸</td>' +
                        '<td class="text-center" width="15%">' +
                            '<button class="btn-table mr-1" onclick="decrementItem(' + cartItem.id + ')">-</button>' + 
                                quantity + 
                            '<button class="btn-table ml-1" onclick="incrementItem(' + cartItem.id + ')">+</button>' + 
                        '</td>' +
                        '<td class="text-center" width="15%">' + Intl.NumberFormat("ru").format(subTotal) + ' ₸</td>' +
                        '<td id="removeItem" class="text-center" width="5%">' +
                            '<button class="btn-table" onclick="removeCartItem(' + cartItem.id + ')">\u00d7</button>' + 
                        '</td>' +
                    '</tr>';
        
                grandTotal += subTotal;
            });
        }
    } else {
        emp2.classList.remove('hide');
    }

    document.getElementById("cartTableBody").innerHTML = cartRowHTML;
    document.getElementById("itemCount").innerHTML = itemCount;
    document.getElementById("totalAmount").innerHTML = Intl.NumberFormat("ru").format(grandTotal) + " ₸";

    let productHTML = '<div class="category-title">' +
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
                '<p class="product-card-company ml-1">' + item.company + '</p>' + 
                '<p class="product-card-title ml-1">' + item.name + ' ' + item.color + '</p>' + 
                '<p class="product-card-price ml-1">' + item.price + ' ₸</p>' +
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