// imports necessary fish files
import { useFish } from "./fish/FishDataProvider.js"
import { FishList } from "./fish/FishList.js"

//imports necessary tips files
import { useTip } from "./tips/TipDataProvider.js"
import { TipList } from "./tips/TipList.js"

// imports necessary location items
import { useLocations } from "./locations/LocationDataProvider"

// calls the useFish array and stores the return value
// const allTheFish = useFish()

// for (const fish of allTheFish) {
//     console.log(fish)
// }

// test tips data provider
// const allTheTips = useTip()
// for (const tip of allTheTips) {
//     console.log(tip)
// }

// test location data provider
const allTheLocations = useLocations()
for (const location of allTheLocations) {
    console.log(location)
}

// import FishList function so the fish will be rendered immediately when the page loads
FishList()

// TipList function to render html for tips
TipList()