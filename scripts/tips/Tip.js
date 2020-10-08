// renders indiv tip obj as HTML
export const Tip = (tipObj) => {
    return `
        <section class="tip">
            <div class="tip__topic">${tipObj.topic}</div>
            <div class="tip__text">${tipObj.text}</div>
        </section>
    `
}