

class WeatherSounds {
	app: HTMLElement = null
	listWeather: WeatherSoundsItem[] = null
	currentWeather: WeatherSoundsItem = null
	bodyStyle: CSSStyleDeclaration = null

	constructor(app: HTMLElement = null, listWeather: WeatherSoundsItem[] = null) {
		this.app = app

		this.listWeather = listWeather.map((item: WeatherSoundsItem) => {
			item.sound = new Audio(item.soundUrl)
			return item
		})
		this.bodyStyle = document.body.style
	}

	Init() {
		this.bodyStyle.backgroundImage = `url(${this.listWeather[0].backgroundUrl})`

		this.render()
	}

	render() {
		let template = ''

		this.listWeather.forEach((item: WeatherSoundsItem) => {
			template += `<div class="weather_sound__item" style="background-image: url(${item.backgroundUrl})" data-id="${item.id}">
				<img class="weather_sound__item_icon" src="${item.icon}">
			</div>`
		})

		this.app.innerHTML = template

		const listItems = document.querySelectorAll('.weather_sound__item')

		Array.from(listItems).forEach((item: HTMLElement) => {
			item.addEventListener('click', (e: PointerEvent) => {
				const elem: Element = e.currentTarget as Element
				console.log(elem.getAttribute('data-id'))
				this.changeWeather(elem.getAttribute('data-id'))
			})
		})

	}

	changeWeather(id: string) {

		this.stopAllAudio()

		this.currentWeather = this.listWeather.find((item: WeatherSoundsItem) => item.id === id)
		this.bodyStyle.backgroundImage = `url(${this.currentWeather.backgroundUrl})`


		this.currentWeather.sound.play()
	}

	stopAllAudio() {
		this.listWeather.forEach((item: WeatherSoundsItem) => {
			item.sound.currentTime = 0
			item.sound.pause()
		})
	}
}

export default WeatherSounds