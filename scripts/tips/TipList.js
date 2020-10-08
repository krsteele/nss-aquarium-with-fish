// imports the useTip function which slices the tipItems array into indiv tip obj
import {useTip} from "./TipDataProvider.js"
// imports Tip function which takes a tip object and concatenates it into html code
import { Tip } from "./Tip.js"

// TipList function will render individual tip objects as HTML
export const TipList = () => {
    // The Document method querySelector() returns the first element within the document that matches the specified selector. 
    const contentElement = document.querySelector(".contentContainer__right")
    const tips = useTip()

    // console.log(contentElement)

    // var to store val of for...of loop
    let tipHTMLRepresentations = ""

    // for...of loop to generate indiv tip HTML and append to a var
    for (const tip of tips) {
        tipHTMLRepresentations += Tip(tip)
    }

    // Add to the existing HTML in the content element defined above with the document.querySelector
    contentElement.innerHTML += `
        <aside class="tipsList">
            <h3>Tank Care Tips</h3>
            <div class="tipContainer">${tipHTMLRepresentations}</div>
        </aside>
    `
}

