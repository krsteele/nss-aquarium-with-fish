// imports the useLocation function which slices the locationItems array into indiv location obj
import { useLocations} from "./LocationDataProvider.js"
// imports Location function which takes a location object and concatenates it into html code
import { Location } from "./Location.js"

// LocationList function will render individual location objects as HTML
export const LocationList = () => {
    // The Document method querySelector() returns the first element within the document that matches the specified selector. 
    const contentElement = document.querySelector(".travel__locations")
    const locations = useLocations()

    console.log(contentElement)

    // var to store val of for...of loop
    let locationHTMLRepresentations = ""

    // for...of loop to generate indiv location HTML and append to a var
    for (const location of locations) {
        locationHTMLRepresentations += Location(location)
    }

    // Add to the existing HTML in the content element defined above with the document.querySelector
    contentElement.innerHTML += `
        <section class="locationContainer">
            <h3>Where in the World are All the Fishes?</h3>
            <div class="location">${locationHTMLRepresentations}</div>
        </section>
    `
}

