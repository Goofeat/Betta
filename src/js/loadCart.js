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