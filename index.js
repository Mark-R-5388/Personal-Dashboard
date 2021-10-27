fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let backgroundPic = data.urls.full;
    document.body.style.backgroundImage = `url(${backgroundPic})`;
    document.body.style.backgroundSize = "cover";
    let authorInformation = `${data.user.name}`;
    document.getElementById(
      "author-name"
    ).textContent = `By: ${authorInformation}`;
    if (data.user.social.portfolio_url != undefined) {
      let authorSocial = data.user.social.portfolio_url;
      document.getElementById(
        "author-social"
      ).innerHTML = `<a href="${authorSocial}">${authorSocial}</a>`;
    }
  });
