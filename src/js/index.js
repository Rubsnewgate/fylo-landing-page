const formElements = {
    emailInputOne: document.getElementById('emailOne'),
    emailInputTwo: document.getElementById('emailTwo'),
    submitInputOne: document.getElementById('submitOne'),
    submitInputTwo: document.getElementById('submitTwo'),
    errorMessageOne: document.getElementById('errorOne'),
    errorMessageTwo: document.getElementById('errorTwo'),
}

// Function to validate email
const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Event listener for form submission
formElements.submitInputOne.addEventListener('click', (event) => {
    event.preventDefault()

    const emailOne = formElements.emailInputOne.value

    if (!validateEmail(emailOne) ) {
        formElements.errorMessageOne.style.display = 'block'
        formElements.emailInputOne.style.border = '1px solid red'
        return
    }

    formElements.errorMessageOne.style.display = ''
    formElements.emailInputOne.style.border = 'none'
})

formElements.submitInputTwo.addEventListener('click', (event) => {
    event.preventDefault()

    const emailTwo = formElements.emailInputTwo.value

    if (!validateEmail(emailTwo) ) {
        formElements.errorMessageTwo.style.display = 'block'
        formElements.emailInputTwo.style.border = '1px solid red'
        return
    }

    formElements.errorMessageTwo.style.display = ''
    formElements.emailInputTwo.style.border = 'none'
})
