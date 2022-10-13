const mainForm = document.forms[0]
console.log(mainForm)

const formElements = Array.from(document.forms[0].elements)
console.log(formElements)

function initFormAnimation() {
  function handleChange() {
    const formLabel = this.nextElementSibling
    formLabel.classList.add('form__label--state--change')

    if (this.value === '') {
      formLabel.classList.remove('form__label--state--change')
    }
  }

  formElements.forEach((element) => {
    if (element.type !== 'submit') {
      element.addEventListener('change', handleChange)
    }
  })
}
initFormAnimation()

function initFormValidation() {
  function handleSubmit(e) {
    const errorMessage = document.querySelectorAll('.form__error-message')
    formElements.forEach((element, index) => {
      if (element.type !== 'submit') {
        elementLength = element.value.length
        if (elementLength === 0) {
          errorMessage[index].classList.add('form__error-message--active')
          e.preventDefault()
          if (element.type === 'email') {
            element.setAttribute('placeholder', 'email@example.com')
          }
        } else {
          errorMessage[index].classList.remove('form__error-message--active')
          element.classList.remove('form__input--state--error')
        }
      }
    })
  }
  mainForm.addEventListener('submit', handleSubmit)
}

initFormValidation()
