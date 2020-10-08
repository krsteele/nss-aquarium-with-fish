// renders indiv fish obj as HTML
export const Fish = (fishObj) => {
    return `
        <section class="fish">
            <div><img class="fish__image" src="${fishObj.image}" alt=""></div>
            <div class="fish__name">${fishObj.name}</div>
            <div class="fish__species">${fishObj.species}</div>
            <div class="fish__length">${fishObj.length} inches</div>
            <div class="fish__location">${fishObj.location}</div>
            <div class="fish__diet">${fishObj.food}</div>
        </section>`
}