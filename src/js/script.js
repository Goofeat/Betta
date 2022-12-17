// localStorage.clear();

const navbarElement = document.querySelector('div.account p');

if (localStorage.getItem('currentUser')) {
    $('#sign-in').addClass('hide');
    $('#acc').removeClass('hide');
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

function loadProducts() {
    let smartphones = "";
    let laptops = "";
    let tvs = "";
    let add = "";

    shuffleArray(products);
    products.forEach(product => {
        add =
            '<li>' +
                '<div class="product-card">' +
                    '<img class="wishlist-add" src="icons/add-wishlist.svg" onclick="addToWishlist(' + product.id + ')" alt="wishlist logo">' +
                    '<img class="product-card-image" src="img/' + product.photo + '" alt="Product Photo">' +
                    '<p class="product-card-company ml-1">' + product.company + '</p>' + 
                    '<p class="product-card-title ml-1">' + product.name + ' ' + product.color + '</p>' + 
                    '<p class="product-card-price ml-1">' + product.price + ' ₸</p>' +
                    '<div class="add-button">' +
                        '<button onclick="addToCart(' + product.id + ')">Add to Cart</button>' + 
                    '</div>' + 
                '</div>' +
            '</li>';

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

    $('#smartphones-category').append(smartphones);
    $('#laptops-category').append(laptops);
    $('#tvs-category').append(tvs);
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
        toast("Item has been added successfully!", "success");
    }
}

function addToWishlist(id) {
    let contains = false;

    let wishlist = [];

    if (localStorage.getItem('wishlist')) {
		wishlist = JSON.parse(localStorage.getItem('wishlist'));
	}
    
    wishlist.forEach(item => {
        let element = JSON.parse(item);
        if (element.id === id) {
            element.quantity++;
            contains = true;

            wishlist[wishlist.indexOf(item)] = JSON.stringify(element);
        }
    });

    if (!contains) {
        products.forEach(element => {
            if (element.id === id) {
                let wishlistItemJSON = JSON.stringify(element);

                wishlist.push(wishlistItemJSON);
            }
        });
    }

	let wishlistJSON = JSON.stringify(wishlist);
	localStorage.setItem('wishlist', wishlistJSON);
    toast("Item has been added successfully!", "success");
}

function emptyCart() {
	if (localStorage.getItem('cart')) {
		localStorage.removeItem('cart');
        toast("Item has been added successfully!", "success");
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
    toast("Item has been added successfully!", "success");
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
        toast("Item has been added successfully!", "success");
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

function showProfile () {
    document.location.href = 'account.html';
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
    let phoneMask = IMask(
        document.getElementById('phone'),
        {mask: '+{7} ({7}00) 000 00 00'}
    );
} catch (Exception) {}

function loginDisplay() {
    $('#log-window').toggleClass('hide');
    
    setCoverProps();
}

function loginHide() {
    $('#log-window').toggleClass('hide');
}

console.log(localStorage);

function loginCheck() {
    let phone = $('#phone').val();
    let password = $('#password').val();

    if (localStorage.getItem(phone)) {
        let user = JSON.parse(localStorage.getItem(phone));

        if (password === user.password) {
            localStorage.setItem('currentUser', localStorage.getItem(phone));
            window.location.reload();
        }
    }
}

function regCheck() {
    let firstName = String($('#f-name').val());
    let lastName = String($('#l-name').val());
    let phone = String($('#phone').val());
    let new_password = String($('#password').val());
    let confirm_password = String($('#confirm_password').val());

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

function loadCart() {
    let cartRowHTML = "";
    let itemCount = 0;
    let grandTotal = 0;

    let price = 0;
    let quantity = 0;
    let subTotal = 0;

    const emp1 = $('#cart-display');
    const emp2 = $('#cart-is-empty');

        
    let shoppingCart = JSON.parse(localStorage.getItem("cart"));

    if (shoppingCart == 0 || shoppingCart == null) {
        emp2.removeClass('hide');
    } else {
        emp1.removeClass('hide');

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

    $("#cartTableBody").html(cartRowHTML);
    $("#itemCount").html(itemCount);
    $("#totalAmount").html(Intl.NumberFormat("ru").format(grandTotal) + " ₸");

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

    $("#product-item-container").html(productHTML);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function toast(message, type){
    $.Toast("Success!", message, type, {
        has_icon:true,
        has_close_btn:true,
        stack: true,
        fullscreen:true,
        timeout:3000,
        sticky:false,
        has_progress:true,
        rtl:false,
    });
}

function exitAccount() {
    localStorage.removeItem('currentUser');
    showMain();
}

(function(){
    "use strict";
    $.Toast = function(title, message, type, options){
        var defaultOptions = {
            appendTo: "body",
            stack: false,
            position_class: "toast-bottom-right",
            fullscreen:false,
            width: 250,
            spacing:20,
            timeout: 4000,
            has_close_btn:true,
            has_icon:true,
            sticky:false,
            border_radius:6,
            has_progress:false,
            rtl:false
        }

        var $element = null;

        var $options = $.extend(true, {}, defaultOptions, options);

        var spacing = $options.spacing;

        var css = {
            "position":($options.appendTo == "body") ? "fixed" : "absolute",
            "min-width":$options.width,
            "display":"none",
            "border-radius":$options.border_radius,
            "z-index":99999
        }

        $element = $('<div class="toast-item-wrapper ' + type + ' ' + $options.position_class + '"></div>');
        $('<p class="toast-title">' + title + '</p>').appendTo($element);
        $('<p class="toast-message">' + message + '</p>').appendTo($element);

        if($options.fullscreen){
            $element.addClass( "fullscreen" );
        }

        if($options.rtl){
            $element.addClass( "rtl" );
        }

        if($options.has_close_btn){
            $('<span class="toast-close">&times;</span>').appendTo($element);
            if( $options.rtl){
                css["padding-left"] = 20;
            } else {
                css["padding-right"] = 20;
            }
        }

        if($options.has_icon){
            $('<i class="toast-icon toast-icon-' + type + '"></i>').appendTo($element);
            if( $options.rtl){
                css["padding-right"] = 50;
            } else {
                css["padding-left"] = 50;
            }            
        }

        if($options.has_progress && $options.timeout > 0){
            $('<div class="toast-progress"></div>').appendTo($element);
        }

        if($options.sticky){
            $options.spacing = 0;
            spacing = 0;

            switch($options.position_class){
                case "toast-top-left" : {
                    css["top"] = 0;
                    css["left"] = 0;
                    break;
                }
                case "toast-top-right" : {
                    css["top"] = 0;
                    css["left"] = 0;                    
                    break;
                }
                case "toast-top-center" : {
                    css["top"] = 0;
                    css["left"] = css["right"] = 0;  
                    css["width"] = "100%";                  
                    break;
                }
                case "toast-bottom-left" : {
                    css["bottom"] = 0;
                    css["left"] = 0;                     
                    break;
                }
                case "toast-bottom-right" : {
                    css["bottom"] = 0;
                    css["right"] = 0;                     
                    break;
                }
                case "toast-bottom-center" : {
                    css["bottom"] = 0;
                    css["left"] = css["right"] = 0;  
                    css["width"] = "100%";                     
                    break;
                }
                default : {
                    break;
                }                                                                        
            }
        }

        if($options.stack){
            if($options.position_class.indexOf("toast-top") !== -1 ){
                $($options.appendTo).find('.toast-item-wrapper').each(function(){
                    css["top"] = parseInt($(this).css("top")) + this.offsetHeight + spacing;
                });
            } else if($options.position_class.indexOf("toast-bottom") !== -1 ){
                $($options.appendTo).find('.toast-item-wrapper').each(function(){
                    css["bottom"] = parseInt($(this).css("bottom")) + this.offsetHeight + spacing;
                });
            }
        }        

        $element.css(css);

        $element.appendTo($options.appendTo);

		if($element.fadeIn) {
            $element.fadeIn();
        }else {
            $alert.css({display: 'block', opacity: 1});
        }

		function removeToast(){          
			$.Toast.remove( $element );
		}

		if($options.timeout > 0){
			setTimeout(removeToast, $options.timeout);
            if($options.has_progress){
                $(".toast-progress", $element).animate({"width":"100%"}, $options.timeout);
            }
		}        

        $(".toast-close", $element).click(removeToast)

        return $element;
    }

    $.Toast.remove = function( $element ){
        "use strict";        
		if($element.fadeOut)
		{
			$element.fadeOut(function(){
				return $element.remove();
			});
		}
		else{
			$element.remove();
		}        
    }
})();