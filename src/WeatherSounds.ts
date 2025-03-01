import { playIcon, pauseIcon } from "./assets/icons"


class WeatherSounds {
	private currentWeather: WeatherSoundsItem = null
	private bodyStyle: CSSStyleDeclaration = null
	private weatherSoundsIcon: HTMLImageElement = null

	constructor(private app: HTMLElement = null, private listWeather: WeatherSoundsItem[] = null) {
		this.app = app

		this.listWeather = listWeather.map((item: WeatherSoundsItem) => {
			item.sound = new Audio(item.soundUrl)
			item.sound.volume = 0.5
			return item
		})
		this.bodyStyle = document.body.style
	}

	public Init() {
		this.currentWeather = this.listWeather[1]

		this.render()
		this.bodyStyle.backgroundImage = `url(${this.currentWeather.backgroundUrl})`

		this.SetStyleActiveSelectedItem()

		this.weatherSoundsIcon = document.getElementById('app__weather_sounds__icon') as HTMLImageElement
		this.weatherSoundsIcon.addEventListener('click', () => {
			if (this.currentWeather.sound.paused) {
				this.playSound()
				return
			}

			this.pauseSound()
		})
	}

	private render() {
		let templateItems = ''

		this.listWeather.forEach((item: WeatherSoundsItem) => {
			templateItems += `<div class="weather_sound__item" style="background-image: url(${item.backgroundUrl})" data-id="${item.id}">
				<img class="weather_sound__item_icon" src="${item.icon}">
			</div>`
		})

		const templateControls = `				
			<img src="${playIcon}" id="app__weather_sounds__icon"/>
			<input type="range" min="1" max="100" value="50" id="app__weather_sounds__volume">`

		this.app.innerHTML = `
		<div id="weather_sound__items">${templateItems}</div>
		<div id="app__weather_sounds__controls">${templateControls}</div>
		`



		const listItems = document.querySelectorAll('.weather_sound__item')

		Array.from(listItems).forEach((item: HTMLElement) => {
			item.addEventListener('click', (e: PointerEvent) => {
				const elem: Element = e.currentTarget as Element
				this.changeWeather(elem.getAttribute('data-id'))
			})
		})


		const weatherSoundVolume = document.getElementById('app__weather_sounds__volume')
		weatherSoundVolume.oninput = (e: Event) => {
			const target: HTMLInputElement = e.target as HTMLInputElement

			this.changeVolume(Number(target.value))
		}

	}

	private changeWeather(id: string) {

		if (this.currentWeather != null) {
			const isPlaying: boolean = !this.currentWeather.sound.paused

			if (this.currentWeather.id === id && isPlaying) {
				this.pauseSound()
				return
			}
		}


		this.stopAllAudio()

		this.currentWeather = this.listWeather.find((item: WeatherSoundsItem) => item.id === id)
		this.bodyStyle.backgroundImage = `url(${this.currentWeather.backgroundUrl})`

		this.playSound()
		this.SetStyleActiveSelectedItem()
	}

	private stopAllAudio() {
		this.listWeather.forEach((item: WeatherSoundsItem) => {
			item.sound.pause()
		})

		this.weatherSoundsIcon.src = playIcon
	}

	private changeVolume(volume: number) {
		this.listWeather.forEach((item: WeatherSoundsItem) => {
			item.sound.volume = volume / 100
		})
	}

	private playSound() {
		this.currentWeather.sound.play()
		this.weatherSoundsIcon.src = pauseIcon
	}

	private pauseSound() {
		this.currentWeather.sound.pause()
		this.weatherSoundsIcon.src = playIcon
	}

	private SetStyleActiveSelectedItem() {		
		const listItems = document.querySelectorAll('.weather_sound__item')

		Array.from(listItems).forEach((item: HTMLElement) => {
			if (item.getAttribute('data-id') === this.currentWeather.id) {
				item.classList.add('active')
			} else {
				item.classList.remove('active')
			}
		})
	}

}

export default WeatherSounds