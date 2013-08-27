(function() {
  var app;

  app = {
    initialize: function() {
      return this.bindEvents();
    },
    bindEvents: function() {
      return document.addEventListener("deviceready", this.onDeviceReady, false);
    },
    onDeviceReady: function() {
      return app.receivedEvent("deviceready");
    },
    receivedEvent: function(id) {
      document.write(window.device.name);
      document.write(window.device.model);
      return document.write(window.device.platform);
    }
  };

  app.initialize();

}).call(this);
