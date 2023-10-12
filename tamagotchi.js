// Create class below
class Tamagotchi {
    constructor(name){
        this.name = name
        this.energy = 9
        this.full = 8
        this.mood = 6
        this.sick = false
        this.rehomed = false
    }

    greet(){
        console.log(`Hello, I'm ${this.name}!`)
    }

    status(){
        console.log(`********************
My mood is: ${this.mood}
I am this full: ${this.full}
My energy is: ${this.energy}
I am ${this.sick ? '' : `not`} sick
********************`)
    }

    eat(){
        this.full = (this.full + 2)
        if (this.full > 10){
            this.sick = true
        }
        this.energy--
    }

    medicate(){
        if (this.sick){
            this.sick = false
            this.full = 9
            this.energy = (this.energy - 3)
        } else {
            this.energy--
        }
    }

    play(){

        if (this.sick){
            this.mood--
            this.energy--
        }
        else if (this.mood > 9){
            this.energy = (this.energy - 2)
            this.full --
        }
        else if(this.energy <= 3){
            this.energy-- 
        }
        else{
            this.mood = (this.mood + 2)
            this.energy--
            this.full--
        }
    }

    sleep(){
        this.energy = (this.energy + 4)
        this.full = (this.full - 3)
    }

    timePasses(){
        if (this.sick === false){
            this.mood = (this.mood - 2)
            this.full--
            this.energy--
        }
        else{
            this.mood = (this.mood -3)
            this.full = (this.full - 2)
            this.energy = (this.energy - 2)
        }
    }

    badGuardian(){
        console.log(`tamagotchi has been rehomed`)
        if (this.energy <= 0){
            this.rehomed = true
        }
        if (this.mood <= 0){
            this.rehomed = true
        }
        if (this.full <= true){
            this.rehomed = true
        }
    }



}

// Do not edit below this line
module.exports = Tamagotchi;
