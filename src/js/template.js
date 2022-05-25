export default function template(heading = 'hi') {
  return ` <h1 class="timer__heading" data-time="heading">${heading}</h1>
      <ul class="timer__container">
        <li class="timer__item">
          <span data-time="days" class="timer__data">00</span>
          <span class="timer__name">Days</span>
        </li>
        <li class="timer__item">
          <span data-time="hours" class="timer__data">00</span>
          <span class="timer__name">Hours</span>
        </li>
        <li class="timer__item">
          <span data-time="minutes" class="timer__data">00</span>
          <span class="timer__name">Minutes</span>
        </li>
        <li class="timer__item">
          <span data-time="seconds" class="timer__data ">00</span>
          <span class="timer__name">Seconds</span>
        </li>
      </ul>`;
}
