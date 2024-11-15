const gameData = {
    speed: {
        count: 0,
        rate: 1,
    },
    clinic:{
        count:0,
        rate:0.001,
        cost: 15,
    }
}

// Cliniques
const buyClinic = document.querySelector("#buyClinic")
const clinicPrice = document.querySelector("#clinicPrice")
const labelClinic = document.querySelector("#labelClinic")
const upClinic = document.querySelector("#upClinic")

// Upgrades
const upgrade = document.querySelector('#upClick')


// Incrémentation
const incrementButton = document.querySelector("#heart")
const reset = document.querySelector("#resetScore") // dev only
let scoreLabel = document.querySelector("#scoreLabel")
const kilometerPerSecLabel = document.querySelector("#heartsPerSecCounter")
let kilometerPerSecond = 0

const updateHeartsPerSecDisplay = () => {
    kilometerPerSecLabel.textContent = (kilometerPerSecond*100).toFixed(1)
}

// Fonction pour incrémenter automatiquement
setInterval(passiveIncrement = () => {
    gameData.speed.count += kilometerPerSecond
    scoreLabel.textContent = Math.round(gameData.speed.count)
}, 10)

// Incrémentation manuelle
incrementButton.addEventListener("click", () => {
    gameData.speed.count += gameData.speed.rate
    scoreLabel.textContent = Math.round(gameData.speed.count)
});

// Upgrade incrémentation
upgrade.addEventListener("click",() => {
    gameData.speed.rate *= 2
    upgrade.disabled = true
})

// Reset le score (dev only)
reset.addEventListener("click", () => {
    gameData.speed.count = 0
    scoreLabel.textContent = Math.round(gameData.speed.count)
});

// Acheter une clinique 
buyClinic.addEventListener("click", () => {
    if (gameData.speed.count >= gameData.clinic.cost) {
        gameData.speed.count -= gameData.clinic.cost
        gameData.clinic.count++
        labelClinic.textContent = gameData.clinic.count
        kilometerPerSecond += gameData.clinic.rate
        gameData.clinic.cost = Math.round(gameData.clinic.cost *= 1.15)
        clinicPrice.textContent = gameData.clinic.cost
        updateHeartsPerSecDisplay()
    }
})

upClinic.addEventListener("click", () => {
    gameData.clinic.rate *= 2

})
