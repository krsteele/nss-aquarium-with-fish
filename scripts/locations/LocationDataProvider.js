
// array of location items

const locationItems = [
    {
        name: "Maldives",
        image: "https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_960_720.jpg",
        about: "The Maldives, officially the Republic of Maldives, is a small island nation in South Asia, situated in the Arabian Sea of the Indian Ocean. It lies southwest of Sri Lanka and India, about 700 kilometres from the Asian continent's mainland. "
    },
    {
        name: "Dahab,",
        image: "https://cdn.pixabay.com/photo/2017/11/27/21/33/red-sea-2982277_960_720.jpg",
        about: "Dahab is a small town on the southeast coast of the Sinai Peninsula in Egypt, approximately 80 km northeast of Sharm el-Sheikh. Formerly a Bedouin fishing village, Dahab is now considered to be one of Sinai's most treasured diving destinations."
    },
    {
        name: "New Zealand",
        image: "https://cdn.pixabay.com/photo/2014/12/29/18/44/new-zealand-583172_960_720.jpg",
        about: "New Zealand is an island country in the southwestern Pacific Ocean. It consists of two main landmasses—the North Island and the South Island —and around 600 smaller islands, covering a total area of 268,021 square kilometres."
    },
    {
        name: "Bonaire",
        image: "https://cdn.pixabay.com/photo/2020/02/26/08/53/bonaire-4881161_960_720.jpg",
        about: "Bonaire, an island municipality of the Netherlands, lies off Venezuela’s coast in the southern Caribbean. Its reef-lined coast is protected by Bonaire National Marine Park. Beyond its rich marine life, the island shelters lizards, donkeys and birds within its immense Washington Slagbaai National Park, marked by beaches, lagoons, caverns and desert-like hills."
    },
    
    
]

// exports array for use

export const useLocations = () => {
    return locationItems.slice()
}

