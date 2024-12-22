import { cloudRainIcon, cloudSnowIcon, pauseIcon, sunIcon } from './assets/icons'
import rain from './assets/sounds/rain.mp3'
import './style.scss'

const myAudio = new Audio(rain)

const app = document.getElementById('app')

document.addEventListener('click', () => {
	myAudio.play()
})

app.innerHTML = `
	<div>
		<h1>Webpack App</h1>
		<img src="${cloudRainIcon}">
		<img src="${cloudSnowIcon}">
		<img src="${pauseIcon}">
		<img src="${sunIcon}">
	</div>
`