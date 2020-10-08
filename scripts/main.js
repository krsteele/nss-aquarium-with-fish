// imports the useFish function which slices the fishCollection array into indiv fish obj
import { useFish } from "./FishDataProvider.js"
import { FishList } from "./FishList.js"

// calls the useFish array and stores the return value
const allTheFish = useFish()

// for (const fish of allTheFish) {
//     console.log(fish)
// }

// import FishList function so the fish will be rendered immediately when the page loads
FishList()