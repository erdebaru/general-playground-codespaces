import { sayHello } from "./";

describe("hello test", () => {
    it("can say hello", () => {
        expect(sayHello("Baru")).toBe("Hello, Baru")
    })
})