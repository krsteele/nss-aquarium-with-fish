// imports the useFish function which slices the fishCollection array into indiv fish obj
import {mostHolyFish, nonHolyFish, soldierFish, useFish} from "./FishDataProvider.js"
// imports Fish function which takes a fish object and concatenates it into html code
import { Fish } from "./Fish.js"


const buildFishContainerHTML = (arrayOfFish) => {

    let fishHTMLRepresentations = ""
    // for each fish in whatever array of fish is being passed through
    for (const fish of arrayOfFish) {
        // call the Fish function and append the return value to the fishHTMLRepresentations string
        fishHTMLRepresentations += Fish(fish)
    }
    return fishHTMLRepresentations
}




// Bringing all of the HTML together to create the fish section
export const FishList = () => {
    // The Document method querySelector() returns the first element within the document that matches the specified selector. 
    const contentElement = document.querySelector(".fishContainer")

    
    // console.log(contentElement)
    
    // calling the mostHolyFish function, which returns an array of fish whose length is divisible by 3, and storing that returned value in the holyFishes variable
    const holyFishes = mostHolyFish()
    // calling the buildFishContainerHTML function with holyFishes as the parameter
    const holyFishHTML = buildFishContainerHTML(holyFishes)

    const soldierFishes = soldierFish()
    const soldierFishHTML = buildFishContainerHTML(soldierFishes)

    const regularFishes = nonHolyFish()
    const regularFishHTML = buildFishContainerHTML(regularFishes)



    // Add to the existing HTML in the content element defined above with the document.querySelector
    contentElement.innerHTML += `
        <section class="fishList">
            <h3>Fish List</h3>
            <div class="fishContainer">
            ${holyFishHTML}
            ${soldierFishHTML}
            ${regularFishHTML}
            </div>
        </section>
    `
}

