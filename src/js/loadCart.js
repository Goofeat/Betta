let cartRowHTML = "";
let itemCount = 0;
let grandTotal = 0;

let price = 0;
let quantity = 0;
let subTotal = 0;

if (localStorage.getItem("cart")) {
    let shoppingCart = JSON.parse(localStorage.getItem("cart"));

    console.log(shoppingCart);
    if (shoppingCart.length == 0) {
        document.getElementById("cart-display").style = "visibility: hidden;";
    } else {
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
                    "<td class='text-center' width='10%'>" + quantity + "</td>" +
                    "<td class='text-center' width='15%'>" + Intl.NumberFormat("ru").format(subTotal) + " ₸</td>" +
                "</tr>";

            grandTotal += subTotal;
        });
    }
}

document.getElementById("cartTableBody").innerHTML = cartRowHTML;
document.getElementById("itemCount").innerHTML = itemCount;
document.getElementById("totalAmount").innerHTML = Intl.NumberFormat("ru").format(grandTotal) + " ₸";