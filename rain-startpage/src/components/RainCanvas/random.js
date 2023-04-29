export const randomNormal = ({mean, std, min, max}) => {
    // Normally distributed sampling by Box-Muller transform
    const u1 = Math.random()
    const u2 = Math.random()

    const rs = Math.sqrt(2 * -Math.log(u1))
    const theta = 2 * Math.PI * u2

    let randomValue = rs * Math.cos(theta) * std + mean

    if (randomValue > max) randomValue = max
    else if (randomValue < min) randomValue = min

    return Math.round(randomValue)    
}

export const randomPick = prob => Math.random() < prob    