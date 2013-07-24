// This is a constructor that is used to setup inheritance without
// invoking the base's constructor. It does nothing, so it doesn't
// create properties on the prototype
function surrogateCtor() {}

// Helper function to do OOP
extend = function (base, sub) {
    // Copy the prototype from the base to setup inheritance
    surrogateCtor.prototype = base.prototype;
    // Tricky huh?
    sub.prototype = new surrogateCtor();
    // Remember the constructor property was set wrong, let's fix it
    sub.prototype.constructor = sub;
}


Person_ = function (name) {
    this.name = name;
};

Person_.prototype.sayHi = function () {
    return "Hi! I'm " + this.name;
};

Person_.prototype.tellMore = function () {};

SuperHero_ = function (name, power) {
    Person_.call(this, name);
    this.power = power;
};

extend(Person_, SuperHero_);

SuperHero_.prototype.tellMore = function () {
    return Person_.prototype.sayHi.call(this) +
        ", and I can " + this.power;
};
