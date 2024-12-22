declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.mp3' {
  const content: string;
  export default content;
}

interface WeatherSoundsItem {
	id: number;
	name: string;
	icon: string;
	backgroundUrl: string;
	soundUrl: string;
}
