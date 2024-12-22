import { cloudRainIcon, cloudSnowIcon, sunIcon } from './assets/icons'
import { rainSound, summerSound, winterSound } from './assets/sounds'
import './style.scss'
import WeatherSounds from './WeatherSounds'


const app = document.getElementById('app')
app.innerHTML = `
	<div id="app__container">
		<div id="app__title"></div>
		<div id="app__weather_sounds"></div>
	</div>
`

const listWeather = [{
	id: '0',
	name: 'sun',
	icon: sunIcon,
	backgroundUrl: require('./assets/summer-bg.jpg'),
	soundUrl: summerSound
}, {
	id: '1',
	name: 'rain',
	icon: cloudRainIcon,
	backgroundUrl: require('./assets/rainy-bg.jpg'),
	soundUrl: rainSound
}, {
	id: '2',
	name: 'winter',
	icon: cloudSnowIcon,
	backgroundUrl: require('./assets/winter-bg.jpg'),
	soundUrl: winterSound
}]

document.addEventListener("DOMContentLoaded", () => {

	const weatherSoundsElem = document.getElementById('app__weather_sounds')
	const weatherSounds = new WeatherSounds(weatherSoundsElem, listWeather)
	weatherSounds.Init()

	document.getElementById('app__title').innerHTML = 'Weather sounds'
});
