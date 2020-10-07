import {useFish} from "./FishDataProvider"

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}