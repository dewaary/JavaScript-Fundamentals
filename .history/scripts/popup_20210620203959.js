alert("Welcome To Learn JavaScript Fundamentals");

// PopUp Using Prompt
const name = prompt("What is your name?");

alert(`Hello ${name}`);


// PopUp Confirm

const open = confirm("Are You Open?");

if(open) {
    const name = prompt("What is Your Name?");
    alert(`Hello ${name}`);
}else {
    alert("Bye Bye");
}