window.onload = function () {
    show(0);
}
//Questions

let questions = [{
        id: 1,
        question: "What is life",
        options: [
            "Death",
            "Love",
            "Blah",
            "IDK Man"
        ]
    },
    {
        id: 2,
        question: "What is dovev",
        options: [
            "chut",
            "lavda",
            "lasun",
            "bosdike"
        ]
    },
    {
        id: 3,
        question: "What is coal",
        options: [
            "Dth",
            "ve",
            "Bh",
            "I Man"
        ]
    },
    {
        id: 4,
        question: "What is chut",
        options: [
            "Death",
            "Love",
            "Blah",
            "IDK Man"
        ]
    }
];

function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome-form"]["name"].value;

    //store the user's name
    //Session storage
    sessionStorage.setItem("name", name);

    location.href = "quiz.html";

}

let question_count = 0;


function next() {
    question_count++;
    show(question_count);

}

function show(count) {
    let question = document.getElementById("questions");

    // question.innerHTML = "<h2>" + questions[count].question + "</h2>";
    question.innerHTML = `<h2>${questions[count].question}</h2>
                <ul class="option_group">
                    <li class="option">${questions[count].options[0]}</li>
                    <li class="option">${questions[count].options[1]}</li>
                    <li class="option">${questions[count].options[2]}</li>
                    <li class="option">${questions[count].options[3]}</li>
                </ul>
                `;

    toggleActive();
}

function toggleActive() {
    let option = document.querySelectorAll("li.option");

    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function() {
            for(let j=0;j<option.length; j++)
            {
                if(option[j].classList.contains("active-option")){
                    option[j].classList.remove("active-option");
                }
            }
            option[i].classList.add("active-option");
        }
    }

}