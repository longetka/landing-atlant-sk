import './styles/index.scss';
import load from 'ymaps-loader';

const apiKey = "a0c85176-3d3f-4f78-a099-5ae09fb86fcd";

load({ apiKey }).then(() => {
	ymaps.ready(init);

	function init () {
		let myMap = new ymaps.Map('map', {
			center: [55.76, 37.64],
			zoom: 10
		});
	};
});