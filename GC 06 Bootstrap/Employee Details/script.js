/*
    Assignment: Employee Details
    Description:
    - Generate employee name, email, username, and password
    - Input names are space-separated
    - First and last names are joined using underscore
*/

// Input string containing employee names
const input = "Lionel_Messi Cristiano_Ronaldo Luis_Suarez";

// Reference to the span element
const solution = document.getElementById("solution");

/*
    Function to capitalize the first letter of a word
*/
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

/*
    Function to generate employee details
*/
function generateEmployeeDetails(name) {
    const parts = name.split("_");
    const firstName = parts[0];
    const lastName = parts[1];

    const fullName = capitalize(firstName) + " " + capitalize(lastName);
    const email = firstName.toLowerCase() + "." + lastName.toLowerCase() + "@abc.com";
    const username = firstName.toLowerCase() + capitalize(lastName);
    const password = lastName.toLowerCase() + "#" + capitalize(firstName);

    return `
        <div>
            ${fullName}<br>
            ${email}<br>
            ${username}<br>
            ${password}<br><br>
        </div>
    `;
}

/*
    Split input and process each employee
*/
const employees = input.split(" ");

employees.forEach(emp => {
    solution.innerHTML += generateEmployeeDetails(emp);
});
