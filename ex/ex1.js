let number;

//is given number even or odd?
number = 423435422;
//random number


let random_number_positive = Math.floor(Math.random() * 10000);
number = random_number_positive;

let Even = `Liczba ${number} jest parzystą!!`;
let Not_Even = `Liczba ${number} jest nieparzystą!!`;

function jestParzysta_sp1(number) {
    return (((number % 2) == 0) ? Even : Not_Even);
}

function jestParzysta_sp2(number) {
    //sprawdzenie ostatniej cyfry - musi to byc: 0, 2, 4, 6, albo 8.
    let last_digit = number % 10;
    let paired_digits = [0, 2, 4, 6, 8];
    // return ((number == 0 || number == 2 || number == 4 || number == 6 || number == 8) ? Even : Not_Even);
    return (paired_digits.includes(last_digit)) ? Even : Not_Even;
}

function jestParzysta_sp3(number) {
    //tak dlugo odejmuj 2, az uzyskasz 0, lub 1 - roztrzygniecie,czy liczba jest parzysta

    if (number == 1)
        return Not_Even;


    let is_more = true;
    let rest;
    let new_number = number;
    while (
        is_more
    ) {
        new_number = new_number - 2;

        if (new_number == 1)
            return Not_Even;

        if (new_number == 0 || new_number == 2)
            return Even;

        if (new_number < 2)
            is_more = false;
    };

    return Not_Even;

}



console.log(`Wylosowano liczbę: ${random_number_positive}`);


console.log("Metoda 1, dzielenie przez 2 i sprawdzenie, czy jest reszta...:" + jestParzysta_sp1(number));

console.log("Metoda 2, sprawdzenie ostatniej cyfry...:" + jestParzysta_sp2(number));

console.log("Metoda 3, odejmowanie 2 do konca...:" + jestParzysta_sp3(number));
