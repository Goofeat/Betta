function price() {
    window.location.href = "price.html";
}


function sign_up() {
    window.location.href = "sign_up.html";
}


let name1 = "";

const sub = document.getElementById('submit');

sub.addEventListener('click', function submit() {
    if (document.getElementById('password_1').value != document.getElementById('password_2').value) {
        document.getElementById('mistake').style = "display: block";
        document.getElementById('mistake').innerHTML = "Mistake has been found. Passwords are different."
    }
    else if ( document.getElementById('name').value.charAt(0).match(/[^0-9]/) == null ) {
        console.log( document.getElementById('name').value )
        document.getElementById('mistake').style = "display: block";
        document.getElementById('mistake').innerHTML = "Mistake has been found. Name is not valid."
    }
    else if (document.getElementById('phone').value.length < 5) {
        document.getElementById('mistake').style = "display: block";
        document.getElementById('mistake').innerHTML = "Mistake has been found. Phone number is not valid."
    }
    else if (document.getElementById('password_1').value.length < 1) {
        document.getElementById('mistake').style = "display: block";
        document.getElementById('mistake').innerHTML = "Mistake has been found. Password is not valid."
    }
    else {
        document.getElementById('mistake').style = "display: none";
        window.location.href = "recommendation.html";

    }
});

