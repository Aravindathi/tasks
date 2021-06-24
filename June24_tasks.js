// Class to calculate uber charges

class uberCharges {
    constructor(extraDist,bookedDist,bookedTime,extraTime) {
        this.tarif = bookedDist*14 +bookedTime*200
        this.extraFare = extraDist*16 + extraTime*300
        this.totalFare = this.tarif + this.extraFare
    }
}

var p = new uberCharges(20,100,6,2);
console.log(p);              // output : uberCharges { tarif: 2600, extraFare: 920, totalFare: 3520 }
console.log(p.totalFare);  // Output :  3520



-------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Class to add a movie title, production house and rating



class movie {
    constructor(title,studio,rating = "PG") {
        this.title = title
        this.studio = studio
        this.rating = rating
    }
}

var mov = new movie("Casino Royale", "EON Productions","PG13")      
console.log(mov.title)                                                
//output 
//   movie {
//   title: 'Casino Royale',
//   studio: 'EON Productions',
//   rating: 'PG13' }



-------------------------------------------------------------------------------------------------------------------------------------------------------------------
class cicleCharacteristics {
    constructor(radius) {
        this.dia = radius*2
        this.area = (22/7)*radius*radius
        this.circumference = this.dia*(22/7)
        
    }
}

var cir = new cicleCharacteristics(7)
console.log(cir)     // output : cicleCharacters { dia: 14, area: 154, circumference: 44 }
