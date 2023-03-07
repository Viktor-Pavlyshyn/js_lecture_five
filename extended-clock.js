/*
   3.	Extend clock class
Create a new class ExtendedClock that inherits from Clock and adds the parameter
precision – the number of ms between “ticks”. Should be 1000 (1 second) by default.
Your code should be in the file extended-clock.js
Don’t modify the original clock.js. Extend it.
*/

import { Clock } from "./clock.js";

export class ExtendedClock extends Clock {

    constructor(template, timer, precision = 1000) {
        super(template, timer);
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(this.render.bind(this), this.precision);

    };
}

let extendedClock = new ExtendedClock({ template: 'h:m:s' }, 100000, 2000);
extendedClock.start();