// Perfect example for generators 

export class Elevator {

    currentFloor: number;
    destinationFloor: number;
    maxFloor: number;
    minFloor: number;
    status: "IDLE" | "UP" | "DOWN";

    constructor() {
        this.currentFloor = 0;
        this.destinationFloor = 0;
        this.maxFloor = 10;
        this.minFloor = -2;
        this.status = "IDLE";
    }

    getCurrentFloor(){
        return this.currentFloor;
    }

    moveTo(floor: number) {
        if(floor < this.minFloor) throw "cannot be below -2"
        if(floor > this.maxFloor) throw "cannot be above 10"
        this.destinationFloor = floor;
    }

    /** returns true if its going to stop */
    getCalledFrom(floor: number, direction: "UP" | "DOWN") {
        if(this.status === "IDLE"){
            return this.moveTo(floor);
        }
        if(this.status === "UP" && direction === "UP") return floor > this.currentFloor
        if(this.status === "DOWN" && direction === "DOWN") return floor > this.currentFloor
    }

    next(){
        if(this.currentFloor > this.destinationFloor  ){
            this.status = "DOWN";
            this.currentFloor -= 1;
        }else if(this.currentFloor < this.destinationFloor  ){
            this.status = "UP";
            this.currentFloor += 1;
        }
        if(this.destinationFloor === this.currentFloor){
            this.status = "IDLE";
        }
    }
}
