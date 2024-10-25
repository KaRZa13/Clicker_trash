// Prix
const prices = [100, 1500, 20000, 100000]

// Cliniques
const buyClinic = document.querySelector("#buyClinic")
const clinicPrice = document.querySelector("#clinicPrice")
const labelClinic = document.querySelector("#labelClinic")
const resetClinic = document.querySelector("#resetClinic")
let clinicCost = 100
let clinic = 0

// Gravedigger
const buyGravedigger = document.querySelector("#buyGrave")
const gravediggerPrice = document.querySelector("#gravePrice")
const gravediggerLabel = document.querySelector("#labelGrave")
const resetGravedigger = document.querySelector("#resetGrave")
let gravediggerCost = 1500
let gravedigger = 0

// Necromencien
const buyNecro = document.querySelector("#buyNecro")
const necroPrice = document.querySelector("#necroPrice")
const necroLabel = document.querySelector("#labelNecro")
const resetNecro = document.querySelector("#resetNecro")
let necroCost = 20000
let necro = 0


// Incrémentation
const increment = document.querySelector("#increment")
const reset = document.querySelector("#resetScore")
let scoreLabel = document.querySelector("#scoreElement")
let score = 100000
let heartsPerSecond = 0



// Fonction pour incrémenter automatiquement
const passiveIncrement = () => {
    score += heartsPerSecond
    scoreLabel.textContent = Math.round(score)
}

setInterval(passiveIncrement, 1)

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
        score -= 100
        clinic++
        labelClinic.textContent = clinic
        heartsPerSecond += 0.005
        clinicCost = Math.round(clinicCost *= 1.3)
        clinicPrice.textContent = clinicCost
    } else {
    }
})

// Reset clinique (dev only)
resetClinic.addEventListener("click", () => {
    heartsPerSecond -= 0.005 * clinic;
    clinicCost = 100
    clinic = 0
    clinicPrice.textContent = clinicCost
    labelClinic.textContent = clinic
})

// Engager un fossoyeur 
buyGravedigger.addEventListener("click", () => {
    if (score >= gravediggerCost) {
        score -= 1500
        gravedigger++
        gravediggerLabel.textContent = gravedigger
        heartsPerSecond += 0.075
        gravediggerCost = Math.round(gravediggerCost *= 1.3)
        gravediggerPrice.textContent = gravediggerCost
    }
})

// Reset fossoyeur (dev only)
resetGravedigger.addEventListener("click", () => {
    heartsPerSecond -= 0.075 * gravedigger
    gravediggerCost = 1500
    gravedigger = 0
    gravediggerPrice.textContent = gravediggerCost
    gravediggerLabel.textContent = gravedigger
})

// Engager un nécromencien
buyNecro.addEventListener("click", () => {
    if (score >= 20000) {
        score -= necroCost
        necro++
        necroLabel.textContent = necro
        heartsPerSecond += 0.2
        necroCost = Math.round(necroCost *= 1.3)
        necroPrice.textContent = necroCost
    }
})

// Reset nécromencien 
resetNecro.addEventListener("click", () => {
    heartsPerSecond -= 0.2 * necro
    necroCost = 20000
    necro = 0
    necroPrice.textContent = necroCost
    necroLabel.textContent = necro
})