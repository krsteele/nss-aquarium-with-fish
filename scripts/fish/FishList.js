// imports the useFish function which slices the fishCollection array into indiv fish obj
import {useFish} from "./FishDataProvider.js"
// imports Fish function which takes a fish object and concatenates it into html code
import { Fish } from "./Fish.js"

// FishList function will render individual fish objects as HTML
export const FishList = () => {
    // The Document method querySelector() returns the first element within the document that matches the specified selector. 
    const contentElement = document.querySelector(".fishContainer")
    const fishes = useFish()

    // console.log(contentElement)

    // var to store val of for...of loop
    let fishHTMLRepresentations = ""

    // for...of loop to generate indiv fish HTML and append to a var
    for (const fish of fishes) {
        fishHTMLRepresentations += Fish(fish)
    }

    // Add to the existing HTML in the content element defined above with the document.querySelector
    contentElement.innerHTML += `
        <section class="fishList">
            <h3>Fish List</h3>
            <div class="fishContainer">${fishHTMLRepresentations}</div>
        </section>
    `
}

