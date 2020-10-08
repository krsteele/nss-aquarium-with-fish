
// array of tip items

const tipItems = [
    {
        topic: "Tank Cleaning",
        text: "Fish love to take a bath.",
    },
    {
        topic: "Water Salination",
        text: "Keep that water salty",
    },
    {
        topic: "Water Temperature",
        text: "Not too hot, not too cool. Just right.",
    },
    
]

// exports array for use

export const useTip = () => {
    return tipItems.slice()
}

