const dotenv = require('dotenv');
dotenv.config();
class Car {

    constructor(color) {
        this.velocity = 0;
        this.color = color;
        console.log(`tengo un coche de color ${color}`);
        console.log(`estoy a ${this.velocity} km/h`);
        console.log(`apunto al API de ${process.env.API} en el entorno de ${process.env.ENV_NAME}`);
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