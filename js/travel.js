function calculate() {

    var price = 0;
    var s = document.myform.city.value;

    var country = {
        Norway: 200,
        Switzerland: 250,
        Sweden: 178
    };

    for (var key in country) {
        if (s == key) {
            price = country[key];
            break;
        }
    }


    var p = document.myform.myselect.value;

    switch (p) {

        case '1':
            price += 50;
            break;
    }

    var n = document.myform.num.value;

    if (n > 0) {
        price *= n;

        alert("Your debt is : " + price + "$");
        alert("Thanks for Register");

    } else {
        alert("Enter right amount!!!");
    }



}