let $ = document

let boxInput = $.querySelectorAll('.input-group')
let value = $.querySelectorAll('.input__value')
let massage = $.querySelectorAll('.massage')
let btnSubmit = $.querySelector('.submit')
let iconError = $.querySelectorAll('.icon-error')
let email = $.querySelector('.emailAddress')

function check() {
    value.forEach(function (input, index) {
        if (input.value === '') {
            boxInput[index].style.border = '1.5px solid hsl(0, 100%, 74%)'
            let nameFiled = input.getAttribute('placeholder')
            massage[index].textContent = nameFiled + ' can not be empty'
            iconError[index].style.display = 'block'
        } else {
            boxInput[index].style.border = ''
            massage[index].textContent = ''
            iconError[index].style.display = 'none'
            function isValid(email) {
                return email.includes('@example/com')
            }
            if (!isValid(email.value)) {
                iconError[index].style.display = 'block'
                email.value = ''
                email.setAttribute('placeholder', 'email@example/com')
                massage[2].textContent = 'Looks like this is not an email'
            } else {
                massage[2].textContent = ''
            }
        }
    })
}

btnSubmit.addEventListener('click', check)