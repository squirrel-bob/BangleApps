Graphics.prototype.setFontKdamThmor = function (scale) {
  // actual height 70 (69-0)
  this.setFontCustom(E.toString(require('heatshrink').decompress(atob('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'))),
    46,
    atob('GBo2NjY2NjY2NjY2Gg=='),
    94 + (scale << 8) + (1 << 16)
  );
  return this;
};

{
  let zeroPad = (num, places) => String(num).padStart(places, '0');
  let setFont = (size) => g.setFont('Vector', size);

  let degToRad = Math.PI / 180;

  g.fillCircleProgress = (x, y, radius, thikness, degrees) => {
    g.setColor('#fff');
    g.fillCircle(x, y, radius - 1);
    if (degrees === 1) {
      degrees = 2;
    }
    g.setColor('#9aff9a');
    g.fillCircle(x, y, radius - thikness);
    g.setColor('#000');
    g.drawCircle(x, y, radius);
    g.drawCircle(x, y, radius - thikness + 1);
    if (degrees <= 0) {
      return;
    }
    if (degrees >= 360) {
      g.floodFill(x, y - radius + 1, '#000');
      return;
    }
    if (degrees > 356) {
      degrees = 356;
    }
    let rad = degrees * degToRad;
    let ax = Math.round(x + Math.sin(rad) * (radius - thikness + 1));
    let ay = Math.round(y - Math.cos(rad) * (radius - thikness + 1));
    let bx = Math.round(x + Math.sin(rad) * radius);
    let by = Math.round(y - Math.cos(rad) * radius);
    g.setColor('#000');
    g.drawLine(x, y - radius + thikness - 1, x, y - radius);
    g.drawLine(ax, ay, bx, by);
    g.floodFill(x + 1, y - radius + 1, '#000');
  };

  let draw = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    hours = zeroPad(hours, 2);
    minutes = zeroPad(minutes, 2);

    g.reset();

    // layout
    g.setColor(g.theme.bg);
    g.fillRect(0, 24, 113, 176);
    g.setColor('#008000');
    g.fillRect(113, 24, 176, 176);
    g.setColor('#9aff9a');
    g.fillRect(113, 50, 176, 88);
    g.fillRect(113, 116, 176, 176);
    g.setColor('#008000');
    g.drawLine(113, 24, 176, 24);
    g.drawLine(113, 24, 113, 176);

    // time
    g.setColor(g.theme.fg);
    g.setFontKdamThmor();
    g.setFontAlign(0, -1);
    g.drawString(hours, 56, 26);
    g.drawString(minutes, 56, 102);

    // sidebar
    let dayText = require('date_utils').dow(date.getDay(), 1);
    let dayNumber = date.getDate();
    let monthText = require('date_utils').month(date.getMonth() + 1, 1);

    drawDate(147, 28, dayText, dayNumber, monthText);
    drawStepsCircle(145, 146, 27);

    queueDraw();
  };

  let drawDate = (x, y, dayText, dayNumber, monthText) => {
    // day of week
    g.setColor('#fff');
    setFont(22);
    g.setFontAlign(0, -1);
    g.drawString(dayText.toUpperCase(), x, y);

    // date
    g.setColor('#000');
    setFont(42);
    g.setFontAlign(0, -1);
    g.drawString(dayNumber, x + 1, y + 23);

    // month
    g.setColor('#fff');
    setFont(22);
    g.setFontAlign(0, -1);
    g.drawString(monthText.toUpperCase(), x, y + 65);
  };

  let readStepsGoalFromHealthApp = () => {
    return (require("Storage").readJSON("health.json", true) || {}).stepGoal || 10000;
  };

  let drawStepsCircle = (x, y, radius) => {
    let steps = Bangle.getHealthStatus('day').steps;
    let stepsGoal = readStepsGoalFromHealthApp();
    let sectorAngle = Math.min(Math.round(360 * steps / stepsGoal), 360);
    g.fillCircleProgress(x, y, radius, 8, sectorAngle);
    g.setColor('#000');
    if (steps < 1000) {
      setFont(20);
    } else {
      setFont(24);
    }
    g.setFontAlign(0, 0);
    g.drawString(formatSteps(steps), x + 2, y + 2);
  };

  let formatSteps = (steps) => {
    if (steps < 1000) {
      return steps + '';
    } else if (steps < 10000) {
      return '' + (steps / 1000).toFixed(1);
    }
    return Math.floor(steps / 1000);
  };

  // timeout used to update every minute
  let drawTimeout;

  // schedule a draw for the next minute
  let queueDraw = () => {
    if (drawTimeout) {
      clearTimeout(drawTimeout);
    }
    drawTimeout = setTimeout(() => {
      drawTimeout = undefined;
      draw();
    }, 60000 - (Date.now() % 60000));
  };

  let cleanup = () => {
    Bangle.removeListener('lock', draw);
    if (drawTimeout) {
      clearTimeout(drawTimeout);
    }
    drawTimeout = undefined;
    delete Graphics.prototype.setFontKdamThmor;
  };

  let main = () => {
    Bangle.setUI({
      mode: 'clock', remove: cleanup
    });
    Bangle.loadWidgets();
    Bangle.drawWidgets();
    Bangle.on('lock', draw);
    draw();
  };

  main();
}
