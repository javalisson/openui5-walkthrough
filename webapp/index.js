sap.ui.define([
  'sap/m/Button',
  'sap/m/MessageToast'
], function (Button, MessageToast) {
  'use strict';

  console.log('Hello World!')
  var button = new Button({
    text: 'Press me!',
    press: function () {
      MessageToast.show('Hello World!');
    }
  });
  button.addStyleClass('sapUiSmallMargin');
  button.placeAt('content');
});