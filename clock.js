/*
2.	Rewrite to class.
The Clock class is written in functional style. Rewrite it in the “class” syntax.
Note! I recommend taking a look at the following JS built-in features before implementing the task( in case you do not know/forget it)
https://developer.mozilla.org/en-US/docs/Web/API/setInterval
https://developer.mozilla.org/en-US/docs/Web/API/clearInterval
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  function Clock({ template }) {
    let timer;
    function render() {
      let date = new Date();
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
      console.log(output);
    }
    this.stop = function() {
      clearInterval(timer);
    };
    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };
  }
  let clock = new Clock({template: 'h:m:s'});
  clock.start();
  */

export class Clock {

  constructor({ template }, timer) {
    this.template = template;
    this.timer = timer;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(timer);
  };

  start() {
    this.render();
    this.timer = setInterval(this.render.bind(this), 1000);
  };
}

let clock = new Clock({ template: 'h:m:s' });
clock.start();