const heart = document.querySelector("#heart")

const scaleMax = 1.2
const scaleMin = 0.9
const intervalTimeHeartBeat = 2500
const bounceScale = 1.1

const mouseOverEffect = () => {
    heart.style.transform = `scale(${scaleMax})`
    setTimeout(() => {
        heart.style.transform = `scale(1.1)`
    }, 150)
}

const mouseDownEffect = () => {
    heart.style.transform = `scale(${scaleMin})`
}

const mouseUpEffect = () => {
    heart.style.transform = `scale(${bounceScale})`

    setTimeout(() => {
        heart.style.transform = `scale(1)`
    }, 200)
}

const heartBeat = () => {
    heart.style.transform = `scale(${bounceScale})`

    setTimeout(() => {
        heart.style.transform = `scale(1)`
    }, 200)
}

setInterval(heartBeat, intervalTimeHeartBeat)
heart.addEventListener("mouseover", mouseOverEffect)
heart.addEventListener("mousedown", mouseDownEffect)
heart.addEventListener("mouseup", mouseUpEffect)
heart.addEventListener("mouseleave", () => {
    heart.style.transform = `scale(1)`
})
