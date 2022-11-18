/* This runs after a web page loads */
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    main()
  });
});
observer.observe(document.body, { subtree: true, childList: true });

const changeNames = () => {
  const nameArea = document.querySelectorAll('.r-k4xj1c');
  
  for (const name in nameArea) {
    if (nameArea[name].children) {
      if (nameArea[name].children.length > 0) {
      const leftSide = nameArea[name].children[0].children[0].children[0].children[0]
      const leftText = leftSide.children[0].children[0].children[0].children[0].children[0].children[0]

      const rightSide = nameArea[name].children[0].children[0].children[0].children[1]
      const rightText = rightSide.children[0].children[0].children[0].children[0].children[0]

      if (leftText.innerHTML != "Elon Musk") {
        leftText.innerHTML = "Elon Musk"
      }

      if (rightText.innerHTML != "@elonmusk") {
        rightText.innerHTML = "@elonmusk"
      }
    }
    }
      
  } 
}

const changeImages = () => {
  const imgs = document.querySelectorAll(".r-1wyyakw")

  for (img in imgs) {
    if (imgs[img].children) {
      if (imgs[img].children.length < 1) {
        imgs[img].style.backgroundImage = `url("https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg")`
      }
    }
  }
}

const changeTwitter = () => {
  const text = document.querySelectorAll(".r-poiln3")
  for (const t in text) {
    if (text[t].innerHTML) {
      if (text[t].innerHTML.includes("Twitter") && !text[t].innerHTML.includes("Twitter 2.0")) {
      console.log(text[t].innerHTML)
      text[t].innerHTML = text[t].innerHTML.replace("Twitter", "Twitter 2.0")
      }
     if (text[t].innerHTML.includes("twitter") && !text[t].innerHTML.includes("twitter 2.0")) {
      console.log(text[t].innerHTML)
      text[t].innerHTML = text[t].innerHTML.replace("twitter", "twitter 2.0")
      }
    }
  }
}

const main = () => {
  changeNames();
  changeImages();
  changeTwitter();
}





