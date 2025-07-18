const form = document.getElementById('form')
const firstname_input = document.getElementById('Firstname-input')
const email_input = document.getElementById('Email-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('RepeatPassword-input')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e)=>{
    let errors=[]
    if(firstname_input){
        errors = getErrorFromSignup(firstname_input.value,email_input.value,password_input.value,repeat_password_input.value)
    }
    else{
        errors = getErrorFromLogin(email_input.value,password_input.value)
    }
    if(errors.length>0){
        e.preventDefault()
        error_message.innerText = errors.join(". ")
    }
})

function getErrorFromSignup(firstName, email, password, repeatPassword){
    let errors = []
    if(firstName === '' || firstName==null){
        errors.push('Firstname is required')
        firstname_input.parentElement.classList.add('incorrect')
    }
    if(email === '' || email==null){
        errors.push('Email is required')
        email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password==null){
        errors.push('Password is required')
        password_input.parentElement.classList.add('incorrect')
    }
    if(password.length<6){
        errors.push('Password must be at least 6 characters')
        password_input.parentElement.classList.add('incorrect')
    }
    if(password!==repeatPassword){
        errors.push('Password does not match repeated password')
        password_input.parentElement.classList.add('incorrect')
        repeat_password_input.parentElement.classList.add('incorrect')
    }
    return errors

}function getErrorFromLogin(email, password){
    let errors = []
    if(email === '' || email==null){
        errors.push('Email is required')
        email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password==null){
        errors.push('Password is required')
        password_input.parentElement.classList.add('incorrect')
    }
    return errors
}

const allInputs = [firstname_input, email_input, password_input, repeat_password_input].filter(input=>input!=null)
allInputs.forEach(input =>{
    input.addEventListener('input',()=>{
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ' '
        }
    })
})