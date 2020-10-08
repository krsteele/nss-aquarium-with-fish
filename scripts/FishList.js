// imports the useFish function which slices the fishCollection array into indiv fish obj
import {useFish} from "./FishDataProvider.js"

// FishList function will render individual fish objects as HTML
export const FishList = () => {
    // The Document method querySelector() returns the first element within the document that matches the specified selector. 
    const contentElement = document.querySelector(".contentContainer__left")
    const fishes = useFish()

    // console.log(contentElement)

    // Add to the existing HTML in the constent element defined above with the document.querySelector
    contentElement.innerHTML += `
        <section class="fishList">
            <h3>Fish List</h3>
            <div class="fishContainer">All the fish go here!</div>
        </section>
    `
}