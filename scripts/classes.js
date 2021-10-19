class Traveler {
    constructor(name) {
        this._name=name
        this._food = 1
        this._isHealthy = true
    }
    eat(){
        if(this._food>0){
            this._food--
        }else{
            this._isHealthy=false
        }
    }
    hunt(){
        this._food+=2
    }
    get name(){
        return this._name
    }
    get food(){
        return this._food
    }
    set food(food){
        this._food=food
    }
    get isHealthy(){
        return this._isHealthy
    }
    set isHealthy(isHealthy){
        this._isHealthy=isHealthy
    }
}
class Wagon{
    constructor(size){
        this._size=size
        this._passengers = []
    }
    getAvailableSeatCount(){
        return this._size-this._passengers.length
    }
    join(person){
        if(this._passengers.length===this._size){
            return false
        }else{
            this._passengers.push(person)
            return true
        }
    }
    shouldQuarantine(){
        let Quarantine = false
        this._passengers.forEach((person)=>{
            if (!person.isHealthy){
                Quarantine = true
            }
        })
        return Quarantine
    }
    totalFood(){
        let total = 0
        this._passengers.forEach(person=>total+=person.food)
        return total
    }
}
class Hunter extends Traveler{
    constructor(name){
        super(name)
        super._food=2
    }
    hunt(){
        this._food+=5
    }
    eat(){
        if(this._food>=2){
            this._food-=2
        }else{
            this._food=0
            this._isHealthy=false
        }
    }
    giveFood(traveler,quantity){
        if(this.food<quantity){
            return false
        }else{
            this._food-=quantity
            traveler.food+=quantity
        }
    }
}
class Doctor extends Traveler{
    constructor(name){
        super(name)
    }
    heal(sick){
        sick.isHealthy=true
    }
}