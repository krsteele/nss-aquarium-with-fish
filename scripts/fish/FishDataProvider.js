
// array of fish objects

const fishCollection = [
    {
        name: "Trey",
        image: "https://cdn.pixabay.com/photo/2015/09/26/19/36/fish-959636_960_720.jpg",
        species: "Clownfish",
        length: 5,
        location: "Indian Ocean, Red Sea, western Pacific",
        food: "algae, zooplankton, guitar riffs, morsels you happen to drop"
    },
    {
        name: "Mike",
        image: "https://reefbuilders.com/wp-content/blogs.dir/1/files/2020/05/harlequin-tuskfish1.jpg",
        species: "Harlequin Tuskfish",
        length: 12,
        location: "western Pacific",
        food: "black worms, feeder shrimp, bass notes"
    },
    {
        name: "Page",
        image: "https://cdn.pixabay.com/photo/2013/11/26/20/45/arabian-angelfish-218989_960_720.jpg",
        species: "Angelfish",
        length: 6,
        location: "Atlantic Ocean, Indian Ocean, western Pacific",
        food: "tropical flakes, color flakes, white keys, black keys, coffee that somehow leaks out of your cup"
    },
    {
        name: "Fishman",
        image: "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555451599/shape/mentalfloss/istock_000008208368_small.jpg?itok=ezJlv0IU",
        species: "Pufferfish",
        length: 25,
        location: "Many tropical and subtropical ocean waters and some brackish waters",
        food: "invertebrates, algae, drum licks and vacuum cleaners"
    },
    {
        name: "Brendan",
        image: "https://cdn.pixabay.com/photo/2018/07/10/09/02/astronotus-3528098_960_720.jpg",
        species: "Cichlid",
        length: 14,
        location: "Amazon and Orinoco Rivers and tributaries",
        food: "small insects, crustaceans, snarky comments and red wine"
    },
    {
        name: "Jake",
        image: "https://fishkeepingadvice.com/wp-content/uploads/red_swordtail.jpg",
        species: "Red Swordtail",
        length: 5,
        location: "Belize, Guatemala, Mexico",
        food: "bloodworms, daphnia, brine shrimp, and sick guitar shreds"
    },
    {
        name: "Ryan",
        image: "https://cdn.pixabay.com/photo/2016/10/09/19/05/fish-1726604_960_720.jpg",
        species: "Tropical Discus",
        length: 9,
        location: "Amazon River",
        food: "bloodworms, earthworms, brine shrimp, mullet and backbeats"
    },
    {
        name: "Chris",
        image: "https://animalsadda.com/wp-content/uploads/2015/05/Butterfly-Fish-6.jpg",
        species: "Orange Butterfly",
        length: 6,
        location: "Atlantic, Indian and Pacific Ocean coral reefs",
        food: "crustaceans, mysis shrimp, and boots and cats"
    },
    {
        name: "Andy",
        image: "https://cdn.pixabay.com/photo/2019/09/02/06/29/aquarium-4446625_960_720.jpg",
        species: "Guppy",
        length: 1,
        location: "Barbados, Brazil, Trinidad",
        food: "soft algae, plant remains, bongos"
    },
    {
        name: "Joel",
        image: "https://i.pinimg.com/originals/37/4d/5f/374d5f349cffd32a171b2fd9af720c69.jpg",
        species: "Rainbow Shark",
        length: 6,
        location: "Mekong, Chao Phraya, Xe Bangfai",
        food: "insect larvae, tubifex worms, periphyton, and synthesizers"
    },
]

// exports array for use

export const useFish = () => {
    return fishCollection.slice()
}

// Sorting fish by size exercise

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    // creating an empty array that will the fish whose length is divisible by 3
    const holyFish = []
    
    // for each object in this array
    for (const fish of fishCollection) {
        // console.log(fish)
        // if the remainder of the value of the length property divided by three is equal to 0 
        if (fish.length % 3 === 0) {
            // then push that fish object into the holyFish array
            holyFish.push(fish)
        }
    }
    // return the full holyFish array 
    // console.log(holyFish)
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    // create empty array to hold sorted fish
    const soldiers = []

    for (const fish of fishCollection) {
        if (fish.length % 5 ===0 && fish.length % 5 !== 3) {
            soldiers.push(fish)
        }
    }
    console.log(soldiers)
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    return regularFish
}