(function() {
    Ext.namespace("App.ux");

    /**
     * private variables
     */
    var _this;

    App.ux.orderForm = Ext.extend(Ext.Window, {
        autoheight: true,
        autoShow: true,
        data:null,
        width:500,
        closeAction: "hide",
        buttons: [{
            text: "Zatvori",
            itemId:"btn-izvrsi",
            listeners: {
                "click": function() {
                    _this.hide();
                }
            }
        }],
        formPanelCfg: {
            height:"100%",
            layout: "fit",
            items:[{
                xtype:"propertygrid",
                itemId:"pg-data",
                autoHeight: true
            }]
        },

        initComponent: function initComponent() {
            _this = this;
            this.panel = new Ext.form.FormPanel(this.formPanelCfg);

            Ext.apply(this, {
                items: [this.panel]
            });

            App.ux.orderForm.superclass.initComponent.call(this);
            this.panel.getComponent("pg-data").setSource(this.data);
            this.show();
        },

        setData: function setData(data) {
            Ext.apply(this.data, data);
            this.panel.getComponent("pg-data").setSource(this.data);
            return this;
        }
    });

    Ext.reg("orderForm", App.ux.orderForm);
}());
