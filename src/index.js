import './styles/index.scss';
import load from 'ymaps-loader';

const apiKey = "a0c85176-3d3f-4f78-a099-5ae09fb86fcd";

load({ apiKey }).then(() => {
	ymaps.ready(init);

	function init () {
		let myMap = new ymaps.Map('map', {
			center: [57.599272, 39.806551],
			zoom: 17
		});
		var geoObjects = new ymaps.GeoObject({
			geometry: {
				type: 'Point',
				coordinates: [57.599272, 39.806551]
			}
		});
		myMap.geoObjects.add(geoObjects);
	};
});

const buttons = document.querySelectorAll('#button');
const modal = document.getElementById('modal');

buttons.forEach( button => {
	button.addEventListener('click', modalHandler);
});

function modalHandler() {
	modal.style.display = "block";
	console.log(modal);
};

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	};
};