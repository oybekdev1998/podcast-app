import {createModal, isValid} from "./utils";
import {Question} from './question'
import {authWithEmailAndPassword, getFormHtml} from "./auth";

import './styles.css'



const form = document.getElementById('form')

const input = form.querySelector('#question-text')

const submitBtn = form.querySelector('#submit-button')

const authBtn = document.getElementById('auth-btn')

window.addEventListener('load', Question.renderList)
form.addEventListener('submit', submitFormHandler)
authBtn.addEventListener('click', openModal)

input.addEventListener('input',
    () => {
        submitBtn.disabled = !isValid(input.value)
    })
function submitFormHandler(event) {
    event.preventDefault()
    if (isValid(input.value)) {
      const question = {
        text: input.value.trim(),
        date: new Date().toJSON()
      }
      submitBtn.disabled = true

      Question.create(question).then(() => {
        input.value = ''
        input.className = ''
        submitBtn.disabled = false
      }
      )
    }

}

function openModal() {
  createModal('Авторизация', getFormHtml())
  document.getElementById('auth-form')
      .addEventListener('submit', authFormHandler)
}

function authFormHandler(event) {
  event.preventDefault()
  const button = event.target.querySelector('#button')
  const email = event.target.querySelector('#email').value
  const password = event.target.querySelector('#password').value

  button.disabled = true

  authWithEmailAndPassword(email, password)
      .then(Question.fetch)
      .then(renderModalAfterAuth)
      .then(() => authBtn.disabled = false)

}
function renderModalAfterAuth(content) {
  //console.log(content)
  if (typeof content === 'string') {
    createModal('Ошибка!', content)
  } else {
    createModal('Список вопросов', Question.listToHTML(content))
  }
}