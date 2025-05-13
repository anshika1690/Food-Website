//dummy data for project
// length - images=10  ,  res_name=20  ,  foodTypes=10  ,  delhiLocations=10

const restaurant = [];
const images = ["first", "second", "third", "four", "five", "six", "seven", "eight", "nine", "ten"];
const res_name = ["The Gourmet Spot",
    "Ocean's Catch",
    "Spice Symphony",
    "Urban Bites",
    "The Hungry Fork",
    "Fire & Smoke BBQ",
    "Sizzling Wok",
    "Bistro Delights",
    "Golden Spoon",
    "Flavors of Italy",
    "The Cozy Nook",
    "Taste Haven",
    "Sunset Diner",
    "Fusion Feast",
    "Royal Curry House",
    "Green Leaf Café",
    "Steakhouse Supreme",
    "Sweet Cravings",
    "Sushi Zen",
    "The Rustic Table"];

const foodTypes = [
    "Italian",
    "Mexican",
    "Chinese",
    "Indian",
    "Japanese",
    "Mediterranean",
    "Thai",
    "French",
    "American",
    "Greek"
];

const delhiLocations = [
    "Connaught Place",
    "Chandni Chowk",
    "Hauz Khas",
    "Karol Bagh",
    "Saket",
    "Lajpat Nagar",
    "Rajouri Garden",
    "South Extension",
    "Dwarka",
    "Vasant Kunj"
  ];

const offers = [10, 20, 25, 30, 40, 50];

for (let i = 0; i < 100; i++) {
    const obj = {};
    obj["image"] = images[Math.floor(Math.random() * 10)];
    obj["name"] = res_name[Math.floor(Math.random() * 20)];
    obj["rating"] = Math.floor(Math.random() * 5 + 1);
    //for one decimal point - use tofixed()

    obj["foodType"] = foodTypes[Math.floor(Math.random() * 10)];

    obj["price_for_two"] = Math.floor(Math.random() * 2401 + 100);
    obj["location"] = delhiLocations[Math.floor(Math.random() * 10)];

    obj["distance_from_customer_house"] = (Math.random() * 10 + 1).toFixed(1);
    obj["offer"] = offers[Math.floor(Math.random() * 6)];

    obj["alcohol"] = Math.random() > 0.7;       //return in true or false
    obj["restaurant_open_time"] = Math.floor(Math.random() * 24);
    obj["restaurant_close_time"] = (obj["restaurant_open_time"] + 12) % 24;
    
    restaurant.push(obj);

}

// console.log(restaurant);

const jsonFormatPretty = JSON.stringify(restaurant, null, 2);
console.log(jsonFormatPretty);
// console.table(restaurant);

