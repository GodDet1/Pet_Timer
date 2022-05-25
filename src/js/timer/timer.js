import template from '../template';
import './timer.css';
import 'animate.css';

export default class Timer {
  constructor(date, heading, classForAdd) {
    document.querySelector(`.${classForAdd}`).innerHTML = template(heading);

    this.refs = {
      days: document.querySelector('[data-time="days"]'),
      hours: document.querySelector('[data-time="hours"]'),
      minutes: document.querySelector('[data-time="minutes"]'),
      seconds: document.querySelector('[data-time="seconds"]'),
    };

    this.date = new Date(date);

    this.renderTimer = dateStartEnd => {
      const today = Date.now();
      const deltaTime = today - dateStartEnd > 0 ? today - dateStartEnd : dateStartEnd - today;

      // use IIFE for training
      const { seconds, minutes, hours, days } = (deltaTime => {
        const seconds = Math.floor((deltaTime / 1000) % 60);
        const minutes = Math.floor((deltaTime / 1000 / 60) % 60);
        const hours = Math.floor((deltaTime / 1000 / 60 / 60) % 24);
        const days = Math.floor(deltaTime / 1000 / 60 / 60 / 24);
        return { seconds, minutes, hours, days };
      })(deltaTime);

      this.refs.days.textContent = pad(days);
      this.refs.hours.textContent = pad(hours);
      this.refs.minutes.textContent = pad(minutes);
      this.refs.seconds.textContent = pad(seconds);

      if (hours === '00') {
        animate('fadeInDown', this.refs.days);
      }

      if (minutes === '00') {
        animate('fadeInDown', this.refs.hours);
      }

      if (seconds == '00') {
        animate('fadeInDown', this.refs.minutes);
      }

      animate('fadeInDown', this.refs.seconds);
    };

    setInterval(this.renderTimer, 1000, this.date);

    function pad(value) {
      return String(value).padStart(2, '0');
    }
  }
}

function animate(animateIn, elem) {
  elem.classList.add('animate__animated');
  elem.classList.add(`animate__${animateIn}`);

  setTimeout(() => {
    elem.classList.remove('animate__animated');
    elem.classList.remove(`animate__${animateIn}`);
  }, 900);
}
