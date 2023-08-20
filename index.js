const questions = [
    {
        question: 'Какое фокусное предназначенно для фотографий в полный рост?',
        answers: ['35mm', '24mm', '50mm', '85mm'],
        correct: 1,

    },
    {
        question: 'Снимая на 135мм, какая длинна выдержки минимальна?',
        answers: ['1/60', '1/80', '1,160', '1/200', '1/350'],
        correct: 4,

    },
    {
        question: 'В каком жанре фотосъемки, отключают автофокус?',
        answers: ['Спортивный жанр', 'портретный', 'макро', 'пейзаж'],
        correct: 3,

    },
    {
        question: 'В каких камерах существует фокусировка по глазам?',
        answers: ['В зеркальных', 'В цифровых', 'В обеих'],
        correct: 3,

    },
    {
        question: 'Снимая звeзды, что нужно обязательно сделать с камерой?',
        answers: ['Отключить автофокус', 'Закрыть видоискатель', 'Снять с объектива бленду', 'Протереть камеру'],
        correct: 2,

    },
]
let questionsIndex = 0
let correctYes = 0

questionsStart ()

function questionsStart () {
    document.querySelector('.question'). innerHTML = ''
    document.querySelector('.answers__body').innerHTML = ''
    document.querySelector('.question'). innerHTML = questions[0].question
    questions[0]['answers'].forEach((answers, index) => {
        document.querySelector('.answers__body').innerHTML += `
                <label><input type="radio" value="${index + 1}" name="input" id="" class="input" />${answers}</label>
        ` 
    })
    
}
// Нажимаем на кнопку
document.querySelector('.button').addEventListener('click', function (event) {
    if (!document.querySelector('.input:checked')) {
        alert('Выберите ответ')
        
    } else {
        if (+document.querySelector('.input:checked').value === questions[questionsIndex]['correct']) {
            correctYes++
            questionsNext()
        } else {
            questionsNext()
        }
        
    }
   
})

function  questionsNext()  {
    document.querySelector('.question'). innerHTML = ''
    document.querySelector('.answers__body').innerHTML = ''
    questionsIndex++
    if ( questionsIndex < 5 ) {
            document.querySelector('.question'). innerHTML = questions[questionsIndex].question
    questions[questionsIndex]['answers'].forEach((answers, index) => {
        document.querySelector('.answers__body').innerHTML += `
                <label><input type="radio" value="${index + 1}" name="input" id="" class="input" />${answers}</label>
        ` 
    })
    } else {
        document.querySelector('.question'). innerHTML = `<div>
            <p>Игра Закончилась</p>
            <p>Правильных ответов ${correctYes} из 5</p>
        </div>`
        document.querySelector('.answers__body').innerHTML = `<button class="gameNewStart">Новая Игра</button>`
        
    }
}

document.querySelector('.answers__body').addEventListener('click', function(e) {
    if (e.target.className === 'gameNewStart') {
        questionsIndex = 0
        correctYes = 0
        questionsStart()
    }
})