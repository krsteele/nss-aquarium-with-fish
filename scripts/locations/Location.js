// renders indiv tip obj as HTML
export const Location = (locObj) => {
    return `
        <section class="location">
            <div class="location__image">${locObj.image}</div>
            <div class="location__name">${locObj.name}</div>
            <div class="location__about">${locObj.about}</div>
        </section>
    `
}