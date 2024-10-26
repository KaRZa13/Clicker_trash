// Cliniques
const buyClinic = document.querySelector("#buyClinic")
const clinicPrice = document.querySelector("#clinicPrice")
const labelClinic = document.querySelector("#labelClinic")
let clinicCost = 15
let clinic = 0

// Gravedigger
const buyGravedigger = document.querySelector("#buyGrave")
const gravediggerPrice = document.querySelector("#gravePrice")
const gravediggerLabel = document.querySelector("#labelGrave")
let gravediggerCost = 100
let gravedigger = 0

// Necromencien
const buyNecro = document.querySelector("#buyNecro")
const necroPrice = document.querySelector("#necroPrice")
const necroLabel = document.querySelector("#labelNecro")
let necroCost = 1100
let necro = 0


// Incrémentation
const increment = document.querySelector("#heart")
const reset = document.querySelector("#resetScore") // dev only
let scoreLabel = document.querySelector("#scoreLabel")
const heartsPerSecLabel = document.querySelector("#heartsPerSecCounter")
let score = 100000
let heartsPerSecond = 0

const updateHeartsPerSecDisplay = () => {
    heartsPerSecLabel.textContent = (heartsPerSecond*100).toFixed(1)
}

// Fonction pour incrémenter automatiquement
const passiveIncrement = () => {
    score += heartsPerSecond
    scoreLabel.textContent = Math.round(score)
}

setInterval(passiveIncrement, 10)

// Incrémentation manuelle
increment.addEventListener("click", () => {
    score++
    scoreLabel.textContent = Math.round(score)
});

// Reset le score (dev only)
reset.addEventListener("click", () => {
    score = 0
    scoreLabel.textContent = Math.round(score)
});

// Acheter une clinique 
buyClinic.addEventListener("click", () => {

    if (score >= clinicCost) {
        score -= clinicCost
        clinic++
        labelClinic.textContent = clinic
        heartsPerSecond += 0.001
        clinicCost = Math.round(clinicCost *= 1.15)
        clinicPrice.textContent = clinicCost
        updateHeartsPerSecDisplay()
    }
})

// Engager un fossoyeur 
buyGravedigger.addEventListener("click", () => {
    if (score >= gravediggerCost) {
        score -= gravediggerCost
        gravedigger++
        gravediggerLabel.textContent = gravedigger
        heartsPerSecond += 0.01
        gravediggerCost = Math.round(gravediggerCost *= 1.15)
        gravediggerPrice.textContent = gravediggerCost
        updateHeartsPerSecDisplay()
    }
})

// Engager un nécromencien
buyNecro.addEventListener("click", () => {
    if (score >= necroCost) {
        score -= necroCost
        necro++
        necroLabel.textContent = necro
        heartsPerSecond += 0.08
        necroCost = Math.round(necroCost *= 1.15)
        necroPrice.textContent = necroCost
        updateHeartsPerSecDisplay()
    }
})
