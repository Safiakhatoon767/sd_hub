// 1. Input box banana
let input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Enter your wishlist here");
document.body.appendChild(input);

// 2. Add button banana
let addBtn = document.createElement("button");
addBtn.textContent = "Add";
document.body.appendChild(addBtn);

// 3. ul (task list) banana
let ul = document.createElement("ul");
ul.setAttribute("id", "taskList");
document.body.appendChild(ul);

// 4. Add button ka kaam
addBtn.addEventListener("click", function () {
    let user_input = input.value.trim();

    if (user_input !== "") {
        // li banayein
        let li = document.createElement("li");
        li.textContent = user_input;

        // ❌ button banayein
        let del_button = document.createElement("button");
        del_button.textContent = "❌";

        // ❌ dabane pe delete
        del_button.addEventListener("click", function () {
            li.remove();
        });

        // ❌ ko li me chipkao
        li.appendChild(del_button);

        // li ko ul me chipkao
        ul.appendChild(li);

        // Input box clear karo
        input.value = "";
    } else {
        alert("Please enter something first!");
    }
});



