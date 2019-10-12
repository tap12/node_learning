//is given number a prime number?
let number_to_check = 18;

number_to_check = Math.floor(Math.random() * 20);

//number is prime when it exacly can be divided by two numbers

function is_given_number_prime(number_to_check) {

    let is_prime = true;

    for (let index = number_to_check - 1; index > 1; index--) {
        if ((number_to_check % index) == 0) {
            is_prime = false;
            return is_prime;
        }
    }

    return is_prime;
}

if (is_given_number_prime(number_to_check)) { console.log("Number: " + number_to_check + ": is a PRIME number!") }

else { console.log("Number: " + number_to_check + ": is NOT a PRIME number!") };

