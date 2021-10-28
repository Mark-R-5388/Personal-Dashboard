// Background Image
fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((res) => res.json())
  .then((data) => {
    let backgroundPic = data.urls.full;
    document.body.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${backgroundPic})`;
    document.body.style.backgroundSize = "cover";
    let authorInformation = `${data.user.name}`;
    document.getElementById(
      "author-name"
    ).textContent = `Image By: ${authorInformation}`;
    if (data.user.social.portfolio_url != undefined) {
      let authorSocial = data.user.social.portfolio_url;
      document.getElementById(
        "author-social"
      ).innerHTML = `<a href="${authorSocial}">${authorSocial}</a>`;
    }
  })
  .catch((err) => {
    document.body.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzUzNzAwMDU&ixlib=rb-1.2.1&q=85"
    )`;
    document.getElementById("author-name").textContent = "Image By: v2osk";
    document.getElementById(
      "author-social"
    ).innerHTML = `<a href="https://www.mixcloud.com/V2OSK/">https://www.mixcloud.com/V2OSK/</a>`;
  });

// Crypto
let baseUrl = "https://api.coingecko.com/api/v3/coins";
let cryptoList = ["bitcoin", "dogecoin"];
let crypto = document.querySelector(".crypto");

cryptoList.forEach((coin) => {
  fetch(baseUrl + `/${coin}`)
    .then((res) => {
      if (!res.ok) {
        throw Error("somehing went wrong");
      }
      return res.json();
    })
    .then((data) => {
      crypto.innerHTML =
        crypto.innerHTML +
        `
        <div class="crypto-info">
    <img src=${data.image.small} />
    <span>${data.name} Current $${data.market_data.current_price.usd}</span>
    </div>
    `;
    })

    .catch((err) => console.log(err));
});

// current time
let timeContainer = document.querySelector(".time-container");

function findDate() {
  let currentDate = new Date();
  let timeString = currentDate.toLocaleTimeString("en-us", {
    timeStyle: "medium",
  });
  timeContainer.innerHTML = `<h1>${timeString}</h1>`;
}

setInterval(findDate, 1000);
