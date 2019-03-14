const login = document.querySelector('.login')
const signup = document.querySelector('.signup')

const loginForm = 'https://keen-hodgkin-2ca05d.netlify.com/login/form'
const signupForm = 'https://keen-hodgkin-2ca05d.netlify.com/login/registration'

login.addEventListener('click', () => (window.location.href = `${loginForm}`))
signup !== null &&
  signup.addEventListener(
    'click',
    () => (window.location.href = `${signupForm}`)
  )
