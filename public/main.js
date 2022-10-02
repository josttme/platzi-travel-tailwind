import './style.css'

const htmlElement = document.querySelector('html')
const buttonDark = document.querySelector('.toggle-dark-mode')
const Userperfil = document.querySelector('#user-perfil')
const perfil = document.querySelector('#perfil')
const closedPerfil = document.querySelector('#closed-perfil')

buttonDark.addEventListener('click', darkMode)
Userperfil.addEventListener('click', verPerfil)
closedPerfil.addEventListener('click', verPerfil)

function darkMode() {
	htmlElement.classList.toggle('dark')
}
function verPerfil() {
	perfil.classList.toggle('hidden')
}
