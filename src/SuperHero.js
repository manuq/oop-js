Person = function (name) {
    this.name = name;
};

Person.prototype.sayHi = function () {
    return "Hi! I'm " + this.name;
};

Person.prototype.tellMore = function () {};

SuperHero = function (name, power) {
    Person.call(this, name);
    this.power = power;
};

SuperHero.prototype = Object.create(Person.prototype, {
    power: {
        value: null,
        enumerable: true,
        configurable: true,
        writable: true
    },
    tellMore: {
        value: function () {
            return Person.prototype.sayHi.apply(this) +
                ", and I can " + this.power;
        },
        enumerable: true,
        configurable: true,
        writable: true
    }
});
