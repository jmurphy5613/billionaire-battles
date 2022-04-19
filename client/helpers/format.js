export const putNftIntoCorrectObjectFormat = (name, imgLink, health, maxHealth) => {
    let current = {
        img: `${imgLink}`,
        name: `${name}`,
        health: health,
        maxHealth: maxHealth
    }
    return current;
}