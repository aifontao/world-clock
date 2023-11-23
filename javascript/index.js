function updateTime() {
  //New York
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");
    newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      `HH:mm:ss [<small>]A[</small>]`
    );
  }
  //Cape Verde
  let capeVerdeElement = document.querySelector("#cape-verde");
  if (capeVerdeElement) {
    let capeVerdeDateElement = capeVerdeElement.querySelector(".date");
    let capeVerdeTimeElement = capeVerdeElement.querySelector(".time");
    let capeVerdeTime = moment().tz("America/Los_Angeles");
    capeVerdeDateElement.innerHTML = capeVerdeTime.format("MMMM Do YYYY");
    capeVerdeTimeElement.innerHTML = capeVerdeTime.format(
      `HH:mm:ss [<small>]A[</small>]`
    );
  }
  //London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");
    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      `HH:mm:ss [<small>]A[</small>]`
    );
  }

  //Shangai
  let shangaiElement = document.querySelector("#shanghai");
  if (shangaiElement) {
    let shangaiDateElement = shangaiElement.querySelector(".date");
    let shangaiTimeElement = shangaiElement.querySelector(".time");
    let shangaiTime = moment().tz("Asia/Shanghai");
    shangaiDateElement.innerHTML = shangaiTime.format("MMMM Do YYYY");
    shangaiTimeElement.innerHTML = shangaiTime.format(
      `HH:mm:ss [<small>]A[</small>]`
    );
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityCurrentTime = moment().tz(cityTimeZone);
  let cityDate = cityCurrentTime.format("MMMM Do YYYY");
  let cityTime = cityCurrentTime.format(`HH:mm:ss [<small>]A[</small>]`);
  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = ` <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityDate}</div>
          </div>
          <div class="time">${cityTime}</div>
        </div>
        <a href="/" class="back-link">All cities</a>
        `;
}

let citySelectElement = document.querySelector("#city-select");
citySelectElement.addEventListener("change", updateCity);
