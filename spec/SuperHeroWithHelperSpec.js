describe("SuperHero with helper", function() {
    var bob;
    var superman;

    beforeEach(function() {
        bob = new Person_("Bob");
        superman = new SuperHero_("Superman", "fly");
    });

    it("should be an instance of the child class", function () {
        expect(bob instanceof Person_).toBe(true);
        expect(superman instanceof Person_).toBe(true);
    });

    it("should be an instance of the parent class", function () {
        expect(superman instanceof SuperHero_).toBe(true);
    });

    it("should pass parameters to the parent constructor", function () {
        expect(bob.name).toBe("Bob");
        expect(superman.name).toBe("Superman");
    });

    it("should add new propierties", function () {
        expect(bob.power).toBeUndefined();
        expect(superman.power).toBe("fly");
    });

    it("should call parents methods", function () {
        expect(bob.sayHi()).toBe("Hi! I'm Bob");
        expect(superman.sayHi()).toBe("Hi! I'm Superman");
    });

    it("should redefine parents methods", function () {
        expect(bob.tellMore()).toBeUndefined();
        expect(superman.tellMore()).toBe("Hi! I'm Superman, and I can fly");
    });

});
