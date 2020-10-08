
// array of fish objects

const fishCollection = [
    {
        name: "Trey",
        image: "https://cdn.pixabay.com/photo/2015/09/26/19/36/fish-959636_960_720.jpg",
        species: "Clownfish",
        length: 4.3,
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
        length: 24,
        location: "Many tropical and subtropical ocean waters and some brackish waters",
        food: "invertebrates, algae, drum licks and vacuum cleaners"
    },
]

// exports array for use

export const useFish = () => {
    return fishCollection.slice()
}

