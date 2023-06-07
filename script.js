document.addEventListener("DOMContentLoaded", function() {
    var messageElement = document.getElementById("message");
    var messages = [
        "¡Ánimo en tu cursillo! Eres tan valiente como Luffy.",
        "No te rindas, al igual que Nami, puedes superar cualquier obstáculo.",
        "Tu inteligencia es tan afilada como la espada de Zoro, ¡sigue adelante!",
        "Recuerda que el esfuerzo y la dedicación son la clave del éxito, ¡tú puedes!",
        "Tu determinación es tan fuerte como la voluntad de Sanji, sigue adelante."
    ];

    var randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageElement.textContent = randomMessage;

    var questions = [
        {
            question: "¿Cuál es el nombre del barco de los Sombrero de Paja?",
            options: ["Thousand Sunny", "Going Merry", "Red Force", "Moby Dick"],
            correctAnswer: "Going Merry"
        },
        {
            question: "¿Quién es el capitán de los Piratas de Heart?",
            options: ["Monkey D. Luffy", "Trafalgar Law", "Portgas D. Ace", "Eustass Kid"],
            correctAnswer: "Trafalgar Law"
        }
    ];

    var questionIndex = 0;
    var score = 0;

    var questionElement = document.getElementById("question");
    var optionsElement = document.getElementById("options");
    var resultElement = document.getElementById("result");
    var nextButton = document.getElementById("next-button");

    function displayQuestion() {
        var currentQuestion = questions[questionIndex];
        questionElement.textContent = currentQuestion.question;

        optionsElement.innerHTML = "";
        for (var i = 0; i < currentQuestion.options.length; i++) {
            var option = document.createElement("li");
            option.className = "option";
            option.textContent = currentQuestion.options[i];
            option.addEventListener("click", function(event) {
                var selectedOption = event.target.textContent;
                checkAnswer(selectedOption);
            });
            optionsElement.appendChild(option);
        }
    }

    function checkAnswer(selectedOption) {
        var currentQuestion = questions[questionIndex];

        if (selectedOption === currentQuestion.correctAnswer) {
            score++;
            resultElement.textContent = "¡Respuesta correcta!";
        } else {
            resultElement.textContent = "Respuesta incorrecta.";
        }

        nextButton.disabled = false;
    }

    function displayResult() {
        resultElement.textContent = "Obtuviste " + score + " de " + questions.length + " respuestas correctas.";
        nextButton.style.display = "none";
    }

    nextButton.addEventListener("click", function() {
        questionIndex++;

        if (questionIndex === questions.length) {
            displayResult();
        } else {
            displayQuestion();
            nextButton.disabled = true;
            resultElement.textContent = "";
        }
    });

    displayQuestion();
});