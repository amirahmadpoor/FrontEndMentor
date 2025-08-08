let $ = document

let clickLogo = $.querySelectorAll('.logo')
let answers = $.querySelectorAll('.answer')
clickLogo.forEach(function (logo, index) {
    logo.addEventListener('click', check)
    function check() {
        answers.forEach(function (answer) {
            answer.style.display = 'none'
        })
        let answer = answers[index]
        if (logo.getAttribute('src') === 'assets/images/icon-plus.svg') {
            clickLogo.forEach(function (logo) {
                logo.setAttribute('src', 'assets/images/icon-plus.svg')
            })
            logo.setAttribute('src', 'assets/images/icon-minus.svg')
            answer.style.display = 'block'
        } else {
            logo.setAttribute('src', 'assets/images/icon-plus.svg')
            answer.style.display = 'none'
        }
    }
})