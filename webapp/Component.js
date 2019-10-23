sap.ui.define([
  'sap/ui/core/UIComponent',
  'sap/ui/model/json/JSONModel',
  'sap/ui/model/resource/ResourceModel'
], function (UIComponent, JSONModel, ResourceModel) {
  'use strict';

  return UIComponent.extend('walkthrough.Component', {
    metadata: {
      rootView: {
        'viewName': 'walkthrough.view.App',
        'type': 'XML',
        'async': true,
        'id': 'app'
      }
    },
    init: function () {
      // call the init function of the parent
      UIComponent.prototype.init.apply(this, arguments);
      
      // set data model on view
      var oData = {
        recipient: {
          name: 'OpenUI5'
        }
      };

      var oModel = new JSONModel(oData);
      this.setModel(oModel);

      var i18nModel = new ResourceModel({
        bundleName: 'walkthrough.i18n.i18n'
      });
      this.setModel(i18nModel, 'i18n');
    }
  });
});