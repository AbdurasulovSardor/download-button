const downloadBtn = document.querySelector(".download-btn")
const fileLink = "https://drive.google.com/uc?export=download&id=1aYiaLn3YOjL-_o5QBCy7tU1epqA6gZoi"

const initTimer = () => {
  if (downloadBtn.classList.contains("disable-timer")) {
    return (location.href = fileLink)
  }
  let timer = downloadBtn.dataset.timer
  downloadBtn.classList.add("timer")
  downloadBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`

  const initCounter = setInterval(() => {
    if (timer > 0) {
      timer--
      return (downloadBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`)
    }
    clearInterval(initCounter)
    location.href = fileLink
    downloadBtn.textContent = "Your file is downloading..."

    setTimeout(() => {
      downloadBtn.classList.replace("timer", "disable-timer")
      downloadBtn.innerHTML = `<i class="icon fa-solid fa-download"></i>
      <span class="text">Download Files</span>`
    }, 3000);
  }, 1000)
}

downloadBtn.addEventListener("click", initTimer)