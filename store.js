//Bluebird is a fully featured promise library with focus on innovative features and performance
var Promise = require('bluebird');

// demo data
var CitiesList = [
    "Anchorage, Lake Hood Seaplane Base",
    "Anchorage, Merrill Field",
    "Anchorage, Ted Stevens Anchorage International Airport",
    "Aniak, Aniak Airport",
    "Barrow, Wiley Post–Will Rogers Memorial Airport",
    "Bethel, Bethel Airport",
    "Cordove, Merle K. (Mudhole) Smith Airport",
    "Deadhorse / Prudhoe, Deadhorse Airport",
    "Dillingham, Dillingham Airport",
    "Fairbanks, Fairbanks International Airport",
    "Galena, Edward G.Pitka Sr.Airport",
    "Homer, Homer Airport",
    "Juneau, Juneau International Airport",
    "Kenai, Kenai Municipal Airport",
    "Ketchikan, Ketchikan International Airport",
    "King Salmon, King Salmon Airport",
    "Kodiak, Kodiak Airport",
    "Kotzebue, Ralph Wien Memorial Airport",
    "Nome, Nome Airport",
    "Petersburg, Petersburg James A.Johnson Airport",
    "Sitka, Sitka Rocky Gutierrez Airport",
    "St.Mary's, St. Mary's Airport",
    "Unalakleet, Unalakleet Airport",
    "Unalaska, Unalaska Airport",
    "Valdez, Valdez Airport",
    "Wrangell, Wrangell Airport"];

var AircraftOptions = [
    "Airbus A380",
    "Boeing 707",
    "Airbus A320",
    "Boeing 727",
    "Boeing 767",
    "Boeing 757",
    "Boeing 787",
    "Boeing 737",
    "Boeing 777",
    "Boeing 747",
    "Irkut MC-21",
    "An-124",
    "Tu-154M"];

var AirlineOptions = [
    "Airline",
    "Alaska Airlines",
    "Allegiant Air",
    "American Airlines",
    "Delta Air Lines",
    "Frontier Airlines",
    "Hawaiian Airlines",
    "JetBlue Airways",
    "Southwest Airlines",
    "Spirit Airlines",
    "Sun Country Airlines",
    "United Airlines",
    "Airline",
    "Air Wisconsin",
    "Cape Air",
    "CommutAir",
    "Compass Airlines",
    "Contour Aviation",
    "Elite Airways",
    "Endeavor Air",
    "Envoy Air",
    "ExpressJet",
    "GoJet Airlines",
    "Great Lakes Airlines",
    "Horizon Air",
    "Mesa Airlines",
    "PenAir",
    "Piedmont Airlines",
    "PSA Airlines",
    "Ravn Alaska",
    "Republic Airline",
    "Silver Airways",
    "SkyWest Airlines",
    "Trans States Airlines",
    "ViaAir"];

var ReviewsOptions = [
    '“Very stylish, great stay, great staff”',
    '“good hotel awful meals”',
    '“Need more attention to little things”',
    '“Lovely small hotel ideally situated to explore the area.”',
    '“Positive surprise”',
    '“Beautiful suite and resort”'];

var ReviewImages = [
    "https://previews.123rf.com/images/winnond/winnond1509/winnond150900001/44560414-relaxation-in-bedroom-with-seaview.jpg",
    "https://previews.123rf.com/images/rilueda/rilueda1507/rilueda150700243/42784989-modern-elegant-twin-room-interior.jpg",
    "https://previews.123rf.com/images/kuprin28/kuprin281511/kuprin28151100114/47270007-bedroom-modern-style-3d-images.jpg",
    "https://previews.123rf.com/images/piovesempre/piovesempre1504/piovesempre150400257/39038292-modern-interior-design-comfortable-bedroom.jpg",
    "https://previews.123rf.com/images/elnur/elnur1507/elnur150702987/42628670-hotel-room-with-modern-interior.jpg",
    "https://previews.123rf.com/images/rilueda/rilueda1504/rilueda150400046/38325327-modern-spacious-hotel-room.jpg",
    "https://previews.123rf.com/images/krsmanovic/krsmanovic1505/krsmanovic150500063/39697832-interior-of-a-hotel-room-for-two-persons-modern-luxury-design-.jpg"
];

// Returns random number between min and max
//The maximum is exclusive and the minimum is inclusive
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
};

// Random date generator
var dateRandomGenerator = function (rangeOfDays, startHour, hourRange) {
    var today = new Date(Date.now());
    return new Date(today.getYear() + 1900, today.getMonth(), today.getDate() + Math.random() * rangeOfDays, Math.random() * hourRange + startHour, Math.random() * 60)
}

module.exports = {
    searchBooking: function (bookingResults) {
        return new Promise(function (resolve) {

            // Filling the booking results manually just for demo purposes
            // 97 is the ASCII code for lower case 'a'. If you want uppercase letters, replace 97 with 65 (uppercase 'A'). Note that if n > 25, you will get out of the range of letters.
            // var chr = String.fromCharCode(97 + n); where n is 0, 1, 2 ...
            var terminalLetter = String.fromCharCode(65 + terminalLetter);
            var departureDate = dateRandomGenerator(300, 8, 23);
            var flights = [];
                flights.push({
                    city: CitiesList[Math.floor(Math.random() * CitiesList.length)],
                    gate: String.fromCharCode(65 + terminalLetter) + getRandomInt(1, 20),
                    terminal: terminalLetter,
                    departDate: departureDate.toLocaleString('en-us'),
                    airline: AirlineOptions[Math.floor(Math.random() * AirlineOptions.length)],
                    flightNum: getRandomInt(100, 2000),
                    aircraft: AircraftOptions[Math.floor(Math.random() * AircraftOptions.length)],
                    image: 'https://www.designboom.com/cms/images/-andy02/air11.gif'
                });

            // complete promise with a timer to simulate async response
            setTimeout(function () { resolve(flights); }, 1000);
        });
    },

    searchHotels: function (destination) {
        return new Promise(function (resolve) {

            // Filling the hotels results manually just for demo purposes
            var hotels = [];
            for (var i = 1; i <= 5; i++) {
                hotels.push({
                    name: destination + ' Hotel ' + i,
                    location: destination,
                    rating: Math.ceil(Math.random() * 5),
                    numberOfReviews: Math.floor(Math.random() * 5000) + 1,
                    priceStarting: Math.floor(Math.random() * 450) + 80,
                    image: ReviewImages[Math.floor(Math.random() * ReviewImages.length)]
                });
            }

            hotels.sort(function (a, b) { return a.priceStarting - b.priceStarting; });

            // complete promise with a timer to simulate async response
            setTimeout(function () { resolve(hotels); }, 1000);
        });
    },

    searchHotelReviews: function (hotelName) {
        return new Promise(function (resolve) {

            // Filling the review results manually just for demo purposes
            var reviews = [];
            for (var i = 0; i < 5; i++) {
                reviews.push({
                    title: ReviewsOptions[Math.floor(Math.random() * ReviewsOptions.length)],
                    image: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif'
                });
            }

            // complete promise with a timer to simulate async response
            setTimeout(function () { resolve(reviews); }, 1000);
        });
    }
};