class Car {

    constructor(color) {
        this.velocity = 0;
        this.color = color;
        console.log(`tengo un coche de color ${color}`);
        console.log(`estoy a ${this.velocity} km/h`);
    }

    accelerate() {
        this.velocity += 10;
        console.log(`estoy a ${this.velocity} km/h`);
    }

    brake() {
        this.velocity -= 10;
        console.log(`estoy a ${this.velocity} km/h`);
    }

}

module.exports = { Car }