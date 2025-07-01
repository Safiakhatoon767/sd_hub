//odd_even_game

function odd_even_game() {
    let even_count = 0
    let odd_count = 0
    for (let i = 0; i <= 3; i++) {
        let user_input = parseInt(prompt("Enter a number : "));
        console.log("user_entered : ", user_input)

        let random_num = Math.floor(Math.random() * 10)
        console.log("random number : ", random_num)

        let sum = user_input + random_num
        console.log(`sum of two number is ${sum}`)

        if (sum % 2 === 0) {
            console.log(`${sum} is even number`)
            even_count++
        }
        else {
            console.log(`${sum} is odd `)
            odd_count++
        }
    }

    //final count

    if (even_count > odd_count) {
        console.log("Final Result : user is win")
    }
    else if (odd_count > even_count) {
        console.log("Final Result : computer is win")
    }
    else {
        console.log("Final Result: It's a tie!")
    }



}

odd_even_game()