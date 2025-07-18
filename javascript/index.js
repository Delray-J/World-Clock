function updateTime() {
  // Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  // beira
  let beiraElement = document.querySelector("#beira");
  if (beiraElement) {
    let beiraDateElement = beiraElement.querySelector(".date");
    let beiraTimeElement = beiraElement.querySelector(".time");
    let beiraTime = moment().tz("Africa/Maputo");

    beiraDateElement.innerHTML = beiraTime.format("MMMM Do YYYY");
    beiraTimeElement.innerHTML = beiraTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  // California
  let californiaElement = document.querySelector("#california");
  if (californiaElement) {
    let californiaDateElement = californiaElement.querySelector(".date");
    let californiaTimeElement = californiaElement.querySelector(".time");
    let californiaTime = moment().tz("America/Los_Angeles");

    californiaDateElement.innerHTML = californiaTime.format("MMMM Do YYYY");
    californiaTimeElement.innerHTML = californiaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

    // Windhoek
  let windhoekElement = document.querySelector("#windhoek");
  if (windhoekElement) {
    let windhoekDateElement = windhoekElement.querySelector(".date");
    let windhoekTimeElement = windhoekElement.querySelector(".time");
    let windhoekTime = moment().tz("Africa/Windhoek");

    windhoekDateElement.innerHTML = windhoekTime.format("MMMM Do YYYY");
    windhoekTimeElement.innerHTML = windhoekTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

updateTime();
setInterval(updateTime, 1000);


