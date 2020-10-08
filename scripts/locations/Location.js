// renders indiv location obj as HTML
export const Location = (locObj) => {
    return `
        <div class="location">
            <div><img class="location__image" src="${locObj.image}" alt=""></div>
            <div class="location__name">${locObj.name}</div>
            <div class="location__about">${locObj.about}</div>
        </div>
    `
}