sap.ui.define([
  'sap/ui/core/mvc/Controller'
], function (Controller) {
  'use strict';

  return Controller.extend('walkthrough.controller.App', {
    onSayHello: function () {
      alert('Hello World!');
    }
  });
});