import {Elevator} from ".";

describe("elevator", () => {

    let elevator: Elevator;

    beforeEach(() => {
        elevator = new Elevator();
    })

    it("should be initial floor number", () => {
        expect(elevator.getCurrentFloor()).toBe(0);
    });

    it("should move to called floor", () => {
        elevator.getCalledFrom(5);
        for(let i=0; i < 5; i++) elevator.next();
        expect(elevator.getCurrentFloor()).toBe(5);
    });
    
    it("should move to designated floor", () => {
        elevator.moveTo(5);
        for(let i=0; i < 5; i++) elevator.next();
        expect(elevator.getCurrentFloor()).toBe(5);
    });

    it("should not be able to go below -2 and above 10", () => {
        expect(() => elevator.moveTo(-3)).toThrow();
        expect(() => elevator.moveTo(11)).toThrow();
    });

    it("should show correct floor numbers when moving", () => {
        elevator.moveTo(5);
        expect(elevator.getCurrentFloor()).toBe(0);
        elevator.next();
        expect(elevator.getCurrentFloor()).toBe(1);
    });

    it("should stop by floors if called while moving", () => {
        elevator.moveTo(5);
        expect(elevator.getCalledFrom(3, "UP")).toBe(true);
    })

});