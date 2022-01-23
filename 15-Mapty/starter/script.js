'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
	date = new Date();
	id = (Date.now + '').slice(-10);
	constructor(coords, distance, duration) {
		this.coords = coords;
		this.distance = distance; // in mi
		this.duration = duration; // in min
	}
	_setDescription() {
		// prettier-ignore
		const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		this.description = `${this.type[0].toUpperCase()}${this.type.slice(
			1
		)} on  ${months[this.date.getMonth]}`;
	}
}

class Running extends Workout {
	type = 'running';
	constructor(coords, distance, duration, cadence) {
		super(coords, distance, duration);
		this.cadence = cadence;
		this.calcPace();
	}
	calcPace() {
		this.pace = this.duration / this.distance;
		return this.pace;
	}
}
class Cycling extends Workout {
	type = 'cycling';
	constructor(coords, distance, duration, elevationGain) {
		super(coords, distance, duration);
		this.elevationGain = elevationGain;
		this.calcSpeed();
	}
	calcSpeed() {
		this.speed = this.distance / (this.duration / 60);
		return this.speed;
	}
}

// APPLICATION//////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
class App {
	#map;
	#mapEvent;
	#workouts = [];

	constructor() {
		this._getPosition();
		form.addEventListener('submit', this._newWorkout.bind(this));
		inputType.addEventListener('change', this._toggleElevationField);
	}

	_getPosition() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				this._loadMap.bind(this),
				function () {
					alert('Could not get your location');
				}
			);
		}
	}

	_loadMap(position) {
		const { latitude, longitude } = position.coords;
		const coords = [latitude, longitude];
		this.#map = L.map('map').setView(coords, 13);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		}).addTo(this.#map);
		//MAP CLICK HANDLER
		this.#map.on('click', this._showForm.bind(this));
	}

	_showForm(mapE) {
		this.#mapEvent = mapE;
		form.classList.remove('hidden');
		inputDistance.focus();
	}

	_toggleElevationField() {
		inputElevation
			.closest('.form__row')
			.classList.toggle('form__row--hidden');
		inputCadence
			.closest('.form__row')
			.classList.toggle('form__row--hidden');
	}

	_newWorkout(e) {
		const validInputs = (...values) =>
			values.every((val) => Number.isFinite(val));

		const allPositive = (...values) => values.every((val) => val > 0);

		e.preventDefault();

		const type = inputType.value;
		const distance = +inputDistance.value;
		const duration = +inputDuration.value;
		const { lat, lng } = this.#mapEvent.latlng;
		let workout;

		if (type === 'running') {
			const cadence = +inputCadence.value;
			if (
				!validInputs(distance, duration, cadence) ||
				!allPositive(distance, duration, cadence)
			) {
				return alert('Invalid Number');
			}
			workout = new Running([lat, lng], distance, duration, cadence);
		}

		if (type === 'cycling') {
			const elevation = +inputElevation.value;
			if (
				!validInputs(distance, duration, elevation) ||
				!allPositive(distance, duration)
			) {
				return alert('Invalid Number');
			}
			workout = new Cycling([lat, lng], distance, duration, elevation);
		}
		inputDistance.value =
			inputCadence.value =
			inputDuration.value =
			inputElevation.value =
				'';
		this.#workouts.push(workout);
		this._renderWorkoutMarker(workout);
	}
	_renderWorkoutMarker(workout) {
		L.marker(workout.coords)
			.addTo(this.#map)
			.bindPopup(
				L.popup({
					maxWidth: 250,
					minWidth: 100,
					autoClose: false,
					closeOnClick: false,
					className: `${workout.type}-popup`,
				})
			)
			.setPopupContent(workout.distance)
			.openPopup();
	}
	_renderWorkout(workout) {
		const html = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
            <h2 class="workout__title">Running on April 14</h2>
            <div class="workout__details">
             <span class="workout__icon">${
					workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
				}</span>
             <span class="workout__value">${workout.distance}</span>
             <span class="workout__unit">km</span>
        </div>
         <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>`;
	}
}
const app = new App();
