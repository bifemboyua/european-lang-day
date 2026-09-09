// 1. СЛОВАРЬ ПЕРЕВОДОВ
const translations = {
    ru: {
        "header-title": "Европейский день языков",
        "header-subtitle": "✦ 26 сентября ✦",
        "section-sounds": "Как звучит «Привет»?",
        "lang-french": "Французский",
        "lang-german": "Немецкий",
        "lang-spanish": "Испанский",
        "lang-swedish": "Шведский",
        "section-quiz": "Мини-викторина 🎉",
        "footer-text": "Разработано в VS Code",
        "quiz-progress-text": "Вопрос {current} из {total}",
        "quiz-finished": "Викторина завершена!",
        "quiz-score-text": "Ваш результат: {score} из {total} правильных ответов.",
        "quiz-perfect": "🏆 Великолепно! Вы настоящий лингвист!",
        "quiz-good": "Хорошая попытка! Заглядывайте на наш сайт 26 сентября, чтобы узнать еще больше о языках.",
        "quiz-correct-alert": "🎉 Правильно!",
        "quiz-wrong-alert": "❌ Неверно. Правильный ответ: ",
        "btn-restart": "🔄 Начать заново",
        "theme-dark": "🌙 Темная тема",
        "theme-light": "☀️ Светлая тема"
    },
    en: {
        "header-title": "European Day of Languages",
        "header-subtitle": "✦ September 26 ✦",
        "section-sounds": "How to say 'Hello'?",
        "lang-french": "French",
        "lang-german": "German",
        "lang-spanish": "Spanish",
        "lang-swedish": "Swedish",
        "section-quiz": "Mini Quiz 🎉",
        "footer-text": "Developed in VS Code",
        "quiz-progress-text": "Question {current} of {total}",
        "quiz-finished": "Quiz finished!",
        "quiz-score-text": "Your score: {score} out of {total} correct answers.",
        "quiz-perfect": "🏆 Outstanding! You are a true linguist!",
        "quiz-good": "Good effort! Visit our website on September 26 to learn even more about languages.",
        "quiz-correct-alert": "🎉 Correct!",
        "quiz-wrong-alert": "❌ Incorrect. The correct answer is: ",
        "btn-restart": "🔄 Restart Quiz",
        "theme-dark": "🌙 Dark Theme",
        "theme-light": "☀️ Light Theme"
    }
};

// 2. ВОПРОСЫ ВИКТОРИНЫ НА ДВУХ ЯЗЫКАХ
const quizData = {
    ru: [
        { question: "Какой язык является самым распространенным родным языком в Европе?", options: ["Французский", "Немецкий", "Английский"], correct: 1 },
        { question: "Сколько официальных языков существует в Европейском союзе?", options: ["12 языков", "24 языка", "36 языков"], correct: 1 },
        { question: "К какой языковой семье относится большинство европейских языков?", options: ["Индоевропейская", "Уральская", "Алтайская"], correct: 0 }
    ],
    en: [
        { question: "Which language is the most widely spoken native language in Europe?", options: ["French", "German", "English"], correct: 1 },
        { question: "How many official languages exist in the European Union?", options: ["12 languages", "24 languages", "36 languages"], correct: 1 },
        { question: "Most European languages belong to which language family?", options: ["Indo-European", "Uralic", "Altaic"], correct: 0 }
    ]
};

let currentLang = 'ru';
let currentQuestionIndex = 0;
let score = 0;

// Функция смены языка интерфейса
function switchLanguage(lang) {
    currentLang = lang;
    
    // Переводим все элементы с атрибутом data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });

    // Обновляем текст кнопки темы в зависимости от языка
    const themeToggleBtn = document.getElementById('theme-toggle');
    const isDark = document.body.classList.contains('dark-theme');
    themeToggleBtn.innerText = isDark ? translations[currentLang]['theme-light'] : translations[currentLang]['theme-dark'];

    // Перезапускаем отображение текущего шага викторины на новом языке
    loadQuiz();

        // Находим главный контейнер и шапку сайта
    const mainContainer = document.querySelector('.container');
    const headerElement = document.querySelector('header h1');
    const subtitleElement = document.querySelector('header p');

    // Удаляем класс анимации, если он уже был (сброс)
    mainContainer.classList.remove('fade-animation');
    headerElement.classList.remove('fade-animation');
    subtitleElement.classList.remove('fade-animation');

    // Магия триггера: заставляем браузер "перерисовать" элементы перед добавлением класса
    void mainContainer.offsetWidth; 

    // Добавляем класс анимации заново
    mainContainer.classList.add('fade-animation');
    headerElement.classList.add('fade-animation');
    subtitleElement.classList.add('fade-animation');

}

// Переключение по кнопке языка
const langToggleBtn = document.getElementById('lang-toggle');
langToggleBtn.onclick = function() {
    if (currentLang === 'ru') {
        switchLanguage('en');
        langToggleBtn.innerText = "🇷🇺 Русский";
    } else {
        switchLanguage('ru');
        langToggleBtn.innerText = "🇬🇧 English";
    }
};

// 3. ЛОГИКА ВИКТОРИНЫ
function loadQuiz() {
    const progressElement = document.getElementById('quiz-progress');
    const questionElement = document.getElementById('quiz-question');
    const optionsContainer = document.getElementById('quiz-options');
    const resultElement = document.getElementById('quiz-result');

    optionsContainer.innerHTML = '';
    resultElement.innerText = '';

    const currentQuestions = quizData[currentLang];

    if (currentQuestionIndex < currentQuestions.length) {
        const currentQuiz = currentQuestions[currentQuestionIndex];
        
        let progressText = translations[currentLang]['quiz-progress-text'];
        progressText = progressText.replace('{current}', currentQuestionIndex + 1).replace('{total}', currentQuestions.length);
        progressElement.innerText = progressText;
        
        questionElement.innerText = currentQuiz.question;

        currentQuiz.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'quiz-btn';
            button.innerText = option;
            button.onclick = () => handleAnswer(index);
            optionsContainer.appendChild(button);
        });
    } else {
        showFinalResult();
    }
}

function handleAnswer(selectedIndex) {
    const currentQuestions = quizData[currentLang];
    const currentQuiz = currentQuestions[currentQuestionIndex];
    const resultElement = document.getElementById('quiz-result');
    const optionsContainer = document.getElementById('quiz-options');

    const buttons = optionsContainer.querySelectorAll('.quiz-btn');
    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === currentQuiz.correct) {
        score++;
        resultElement.innerText = translations[currentLang]['quiz-correct-alert'];
        resultElement.style.color = "#2ecc71";
    } else {
        resultElement.innerText = translations[currentLang]['quiz-wrong-alert'] + currentQuiz.options[currentQuiz.correct];
        resultElement.style.color = "#e74c3c";
    }

    currentQuestionIndex++;
    setTimeout(loadQuiz, 2000);
}

function showFinalResult() {
    const currentQuestions = quizData[currentLang];
    document.getElementById('quiz-progress').innerText = translations[currentLang]['quiz-finished'];
    
    let scoreText = translations[currentLang]['quiz-score-text'];
    document.getElementById('quiz-question').innerText = scoreText.replace('{score}', score).replace('{total}', currentQuestions.length);
    
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    
    const resultElement = document.getElementById('quiz-result');
    if (score === currentQuestions.length) {
        resultElement.innerText = translations[currentLang]['quiz-perfect'];
        resultElement.style.color = "#2ecc71";
    } else {
        resultElement.innerText = translations[currentLang]['quiz-good'];
        resultElement.style.color = "#003399";
    }

    const restartBtn = document.createElement('button');
    restartBtn.className = 'quiz-btn';
    restartBtn.style.background = '#e67e22';
    restartBtn.innerText = translations[currentLang]['btn-restart'];
    restartBtn.onclick = restartQuiz;
    optionsContainer.appendChild(restartBtn);
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuiz();
}

// 4. ЛОГИКА ТЕМЫ (С ПЕРЕВОДОМ)
const themeToggleBtn = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggleBtn.innerText = translations[currentLang]['theme-light'];
} else {
    document.body.classList.remove('dark-theme');
    themeToggleBtn.innerText = translations[currentLang]['theme-dark'];
}

themeToggleBtn.onclick = function() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    
    if (isDark) {
        themeToggleBtn.innerText = translations[currentLang]['theme-light'];
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggleBtn.innerText = translations[currentLang]['theme-dark'];
        localStorage.setItem('theme', 'light');
    }
};

// Запуск при старте
window.onload = loadQuiz;
