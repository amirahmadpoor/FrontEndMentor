let $ = document

let btnSubmit = $.querySelector('.submit')
let ratings = $.querySelectorAll('.rating__number')
let form = $.querySelector('.wrapper')
let massage = $.querySelector('.box-massage')
let score = $.querySelector('.score')
let scores = []
let content

ratings.forEach(function (number) {
    let click = false
    function clicked() {
        if (!click) {
            ratings.forEach(function (defaultBtn) {
                defaultBtn.style.backgroundColor = 'hsl(213, 19%, 18%)'
                defaultBtn.style.color = 'hsl(217, 12%, 63%)'
            })
            click = true
            number.style.backgroundColor = 'hsl(25, 97%, 53%)'
            number.style.color = '#fff'
            content = number.textContent
        } else {
            number.style.backgroundColor = 'hsl(213, 19%, 18%)'
            number.style.color = 'hsl(217, 12%, 63%)'
            click = false
        }
    }
    number.addEventListener('click', clicked)
})

function submit() {
    let interval = setInterval(function () {
        massage.style.display = 'flex'
        score.textContent = 'You selected ' + content + ' out of 5'
        form.style.display = 'none'
    }, 100)
    setTimeout(function () {
        if (massage.style.display === 'flex') {
            clearInterval(interval)
            massage.style.display = 'none'
            form.style.display = 'block'
            ratings.forEach(function (defaultForm) {
                defaultForm.style.backgroundColor = 'hsl(213, 19%, 18%)'
                defaultForm.style.color = 'hsl(217, 12%, 63%)'
            })
        }
    }, 3000)
}
btnSubmit.addEventListener('click', submit)
