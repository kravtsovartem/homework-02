

class WeatherSounds {
	app: HTMLElement = null
	listWeather: WeatherSoundsItem[] = null
	bodyStyle: CSSStyleDeclaration = null

	constructor(app: HTMLElement = null, listWeather: any = null) {
		this.app = app
		this.listWeather = listWeather
		this.bodyStyle = document.body.style
	}

	Init() {
		this.bodyStyle.backgroundImage = `url(${this.listWeather[0].backgroundUrl})`

		this.Render()
	}

	Render() {
		let template = ''

		this.listWeather.forEach((item: WeatherSoundsItem) => {
			template += `<div class="weather_sound__item" style="background-image: url(${item.backgroundUrl})">
				<img class="weather_sound__item_icon" src="${item.icon}">
			</div>`
		})

		this.app.innerHTML = template
	}
}

export default WeatherSounds