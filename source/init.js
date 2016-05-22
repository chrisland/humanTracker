
var _app = {
  _video: null,
  _canvas: null,
  _context: null,
  init: function () {

      //_app._video = window.document.getElementById('video');
      _app._canvas = window.document.getElementById('canvas');
      _app._context = _app._canvas.getContext('2d');


      navigator.mediaDevices.enumerateDevices().then(function (deviceInfos) {

        for (var i = 0; i !== deviceInfos.length; ++i) {
          if (deviceInfos[i].kind == 'videoinput') {
            console.log(deviceInfos[i]);
          }
        }
      });

      _app.loop();
      _app.track();
  },
  loop: function () {

    var interval = 1000;
    window.setInterval(function () {
      
    }, interval);

  },
  track: function () {

    var tracker = new tracking.ObjectTracker('face');
    tracker.setInitialScale(4);
    tracker.setStepSize(2);
    tracker.setEdgesDensity(0.1);

console.log(tracking);
    tracking.track('#video2', tracker, { camera: true, deviceId: 'f2ee59d90a8a67852fae196e5fa7b1599376d0d371c1d7267a4d3094d810e861' });

    tracker.on('track', function(event) {
      _app._context.clearRect(0, 0, _app._canvas.width, _app._canvas.height);

      event.data.forEach(function(rect) {
        _app._context.strokeStyle = '#a64ceb';
        _app._context.strokeRect(rect.x, rect.y, rect.width, rect.height);
        _app._context.font = '11px Helvetica';
        _app._context.fillStyle = "#fff";
        _app._context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
        _app._context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
      });
    });

  }
};




_app.init();
