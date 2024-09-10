import generateJoke from "./generateJoke";
import './styles/main.scss'
import test from './assets/test.svg'

const testImg = document.getElementById('testImg')

testImg.src = test

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke()