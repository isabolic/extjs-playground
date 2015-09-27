(function() {
    Ext.namespace("App.ux");

    /**
     * private variables
     */
    var _this;

    /**
     * [setData Private function for filing data in specific fldSet]
     * @param {Ext.Store}  store    [JsonStore]
     * @param {Ext.record} data     [record to load into fld]
     */
    var setData = function setData(store, data) {
        var flag = this.flag,
            fldSet;

        fldSet = _this.formPanel.find("name", flag)[0];

        if (!Ext.isArray(data)) {
            data = [data];
        }

        Ext.each(data, function(rec, idx) {
            Ext.iterate(rec.data, function(key, val) {
                fldSet.find("name", flag + "." + key)[0].setValue(val);
                fldSet.find("name", flag + "." + key)[0].clearInvalid();
            });
        });

        updateFormPanelSize();
    };

    /**
     * [updateFormPanelSize  Private function for update form panel size]
     */
    var updateFormPanelSize = function updateFormPanelSize() {
        _this.formPanel.doLayout();
    };

    /**
     * [setFocus Private function for focusing specific input]
     */
    var setFocus = function setFocus() {
        var flag = this.flag,
            fldName = this.fldName,
            fldSet;

        fldSet = _this.formPanel.find("name", flag)[0];


        fldSet.find("name", fldName)[0].focus("", 500);
    };

    /**
     * [removefldPrefix  private function remove fld prefix]
     * @param  {[type]} str [description]
     * @return {[type]}     [description]
     */
    var removefldPrefix = function  removefldPrefix(str){
        return str.substr(str.indexOf(".")+1, str.lenght);
    };

    /**
     * [validateIban private function validate iban]
     * @param  {[type]} val [value of fld]
     * @return {Boolean or string}     [true or invalid val. msg]
     */
    var validateIban = function validateIban(val) {
        var msg = null,
            platiteljFld = _this.formPanel.getComponent("fldPlatitelj");

        this.clearInvalid();

        if (!val) {
            msg = "Polje IBAN je obavezno.";
        }

        if (!msg && val.indexOf("HR") !== 0) {
            msg = "IBAN mora početi s 'HR'.";
        }

        if (!msg && val.length !== 21) {
            msg = "IBAN mora biti duljine 21 znaka.";
        }

        if (!msg &&
            val.toUpperCase() ===
            platiteljFld.getComponent("platiteljIban").getValue().toUpperCase()) {
            msg = "IBAN primatelja ne može biti isti ko i IBAN platitelja.";
        }

        return (msg !== null ? getValMsgTemp(msg) : true);
    };

    var validateMaxChar = function validateMaxChar(val){
        var msg = null;
        if (val.length > this.maxLength) {
            msg = "Polje " + removefldPrefix(this.name).toUpperCase() +
                  " je ograničen na maksimalni broj znakova " + this.maxLength + ".";
        }

        return (msg !== null ? getValMsgTemp(msg) : true);
    };

    var validateModel = function validateModel (val, maxChar){
        var msg = null;

        if (val.length !== maxChar) {
            msg = "Polje " + removefldPrefix(this.name).toUpperCase() +
                  " mora sadržavati " + maxChar + " znaka.";
        }

        if(!msg && val.indexOf("HR") !== 0){
           msg = "Polje " + removefldPrefix(this.name).toUpperCase() + " mora početi s 'HR'.";
        }

        if(!msg && isNaN(parseFloat(val.replace("HR", "")))){
            msg = "Polje " + removefldPrefix(this.name).toUpperCase() +
                  " ima invalidnu numeričku vrijednost nakon 'HR' predznaka.";
        }

        return (msg !== null ? getValMsgTemp(msg) : true);
    };

    /**
     * [validateNumber validate number]
     * @param  {String} val            [value]
     * @param  {Number} min            [allowed min. number value]
     * @param  {Number} max            [allowed max. number value]
     * @return {Boolean/error msg}     []
     */
    var validateNumber = function validateNumber(val, min, max) {
        var msg = null;

        if (isNaN(parseFloat(val))) {
            msg = "Polje " + removefldPrefix(this.name).toUpperCase() +
                  " ima invalidnu vrijednost za broj.";
        }else{
            if(min !== undefined && parseFloat(val) < min){
                msg = "Polje " + removefldPrefix(this.name).toUpperCase() +
                      " ima dozvoljenu minimalnu vrijednost "+ min +".";
            }

            if(max !== undefined && parseFloat(val) > max){
                msg = "Polje " + removefldPrefix(this.name).toUpperCase() +
                      " ima dozvoljenu maximalnu vrijednost "+ max +".";
            }
        }

        return (msg !== null ? getValMsgTemp(msg) : true);
    };

    /**
     * [validateDate validate date]
     * @param  {String} val          [validate date]
     * @param  {String} format       []
     * @return {Boolean/error msg}   []
     */
    var validateDate = function validateDate(val, format) {
        var msg = null;

        if (this.getValue() === "" && !this.el.getValue() ||
            !(this.getValue() instanceof Date) ) {
            msg = "Polje " + removefldPrefix(this.name).toUpperCase() +
                  " ima invalidnu vrijednost za datum.";
        }

        return (msg !== null ? getValMsgTemp(msg) : true);
    };

    /**
     * [validationReq validate fld if value is required]
     * @param  {String} val          [validate val]
     * @return {Boolean/error msg}   []
     */
    var validationReq = function validationReq(val) {
        var msg = null;

        if (!val) {
            msg = "Polje " + removefldPrefix(this.name).toUpperCase() + " je obavezno.";
        }

        this.clearInvalid();

        return (msg !== null ? getValMsgTemp(msg) : true);
    };

    /**
     * [getValMsgTemp private function generate val msg template]
     * @param  {String} msg    [validation msg]
     * @return {Ext.template}  [template]
     */
    var getValMsgTemp = function getValMsgTemp(msg) {
        var temp = new Ext.Template(
            "<span class='val-msg'>{value}</span>"
        );

        return temp.applyTemplate({
            value: msg
        });
    };

    /**
     * [checkExistingData check if data already exists (iban value) in store and load value into flds]
     */
    var checkExistingData = function checkExistingData() {
        var d, inputIban = this.getValue();

        if (!inputIban) {
            return;
        }

        _this.primateljiStore.data.find(function(row) {
            if (row.data.iban.toUpperCase() === inputIban.toUpperCase()) {
                d = row;
            }
        });

        if (d) {
            setData.apply({
                flag: "primatelj"
            }, [_this.primateljiStore, d, true]);
        }
    };


    App.ux.PayForm = Ext.extend(Ext.Window, {
        autoheight: true,
        container: null,
        autoShow: true,
        platiteljiStore: null,
        formPanel: null,
        title:"Nalog za plaćanje",
        closeAction: "hide",
        width: 585,
        buttons: [{
            text: "Izvrši",
            disabled: true,
            itemId:"btn-izvrsi",
            listeners: {
                "click": function() {
                    _this.fireEvent("payForm-proceed",_this.formPanel.getForm().getValues());
                }
            }
        }, {
            text: "Zatvori",
            listeners: {
                "click": function() {
                    _this.hide();
                }
            }
        }],
        dataStorePlatiteljiCfg: {
            root: "data",
            idProperty: "iban",
            url: "data/platitelji.json",
            autoLoad: true,
            fields: ["iban", "ime", "adresa", "mjesto"]
        },
        dataStorePrimateljiCfg: {
            root: "data",
            idProperty: "iban",
            url: "data/poznatiPrimatelji.json",
            autoLoad: true,
            fields: ["iban", "ime", "adresa", "mjesto"]
        },
        formPanelCfg: {
            xtype: "form",
            layout: "table",
            height: "100%",
            width: "100%",
            monitorValid:true,
            layoutConfig: {
                columns: 2
            },
            items: [{
                xtype: "fieldset",
                border: false,
                defaultType: "textfield",
                colspan: 2,
                id: "validation-msg",
                items: [{
                    xtype: "box",
                    id: "val-ms-iban",
                }, {
                    xtype: "box",
                    id: "val-ms-ime"
                }, {
                    xtype: "box",
                    id: "val-ms-adresa"
                }, {
                    xtype: "box",
                    id: "val-ms-datum"
                }, {
                    xtype: "box",
                    id: "val-ms-iznos"
                }, {
                    xtype: "box",
                    id: "val-ms-model"
                }, {
                    xtype: "box",
                    id: "val-ms-poziv"
                }, {
                    xtype: "box",
                    id: "val-ms-opis"
                }],
                style: {
                    padding: "3px 5px",
                    marginBottom:"0px"
                }
            }, {
                xtype: "fieldset",
                title: "Podaci o platitelju",
                defaultType: "textfield",
                name: "platitelj",
                itemId: "fldPlatitelj",
                style: {
                    margin: "5px"
                },
                items: [{
                    fieldLabel: "IBAN",
                    name: "platitelj.iban",
                    readOnly: true,
                    itemId: "platiteljIban"
                }, {
                    fieldLabel: "Ime",
                    name: "platitelj.ime",
                    readOnly: true
                }, {
                    fieldLabel: "Adresa",
                    name: "platitelj.adresa",
                    readOnly: true
                }, {
                    fieldLabel: "Mjesto",
                    name: "platitelj.mjesto",
                    readOnly: true
                }]
            }, {
                xtype: "fieldset",
                title: "Podaci o primatelju",
                defaultType: "textfield",
                name: "primatelj",
                style: {
                    margin: "5px"
                },
                items: [{
                    fieldLabel: "IBAN",
                    name: "primatelj.iban",
                    allowBlank: false,
                    validator: validateIban,
                    msgTarget: "val-ms-iban",
                    listeners: {
                        blur: checkExistingData
                    }
                }, {
                    fieldLabel: "Ime",
                    name: "primatelj.ime",
                    msgTarget: "val-ms-ime",
                    validator: validationReq,
                    allowBlank: false
                }, {
                    fieldLabel: "Adresa",
                    name: "primatelj.adresa",
                    msgTarget: "val-ms-adresa",
                    validator: validationReq,
                    allowBlank: false
                }, {
                    fieldLabel: "Mjesto",
                    name: "primatelj.mjesto"
                }]
            }, {
                xtype: "fieldset",
                title: "Podaci o plaćanju",
                defaultType: "textfield",
                labelWidth: 120,
                colspan: 2,
                style: {
                    margin: "5px"
                },
                items: [{
                    fieldLabel: "Datum",
                    name: "placanje.datum",
                    xtype: "datefield",
                    allowBlank: false,
                    format: "d.m.Y",
                    msgTarget: "val-ms-datum",
                    validator: function() {
                        var ret = validationReq.apply(this, [this.el.getValue()]);
                        if (ret === true) {
                            ret = validateDate.apply(this, [this.el.getValue(), this.format]);
                        }
                        return ret;
                    },
                    width: 150
                }, {
                    fieldLabel: "Iznos",
                    name: "placanje.iznos",
                    xtype: "numberfield",
                    allowBlank: false,
                    msgTarget: "val-ms-iznos",
                    minValue: 0,
                    maxValue: 5000,
                    validator: function() {
                        var ret = validationReq.apply(this, [this.el.getValue()]);
                        if (ret === true) {
                            ret = validateNumber.apply(
                                    this,
                                    [this.el.getValue(), this.minValue, this.maxValue]
                                );
                        }
                        return ret;
                    },
                    width: 150
                }, {
                    xtype: "fieldset",
                    fieldLabel: "Model / Poziv na broj",
                    layout: "table",
                    border: false,
                    style: {
                        padding: "0px",
                        margin: "0px"
                    },
                    layoutConfig: {
                        columns: 2
                    },
                    items: [{
                        xtype: "textfield",
                        width: 50,
                        allowBlank: false,
                        validationEvent: "blur",
                        validator: function() {
                            var ret = validationReq.apply(this, [this.el.getValue()]);
                            if (ret === true) {
                                ret = validateModel.apply(
                                         this,
                                        [this.el.getValue(), this.maxLength]
                                    );
                            }
                            return ret;
                        },
                        name: "placanje.model",
                        msgTarget: "val-ms-model",
                        maxLength:4,
                        style: {
                            marginRight: "10px"
                        },
                    }, {
                        xtype: "numberfield",
                        allowBlank: false,
                        name: "placanje.poziv",
                        validationEvent: "blur",
                        validator: validationReq,
                        msgTarget: "val-ms-poziv",
                        width: 270
                    }]
                }, {
                    xtype: "textarea",
                    fieldLabel: "Opis",
                    name: "placanje.opis",
                    maxLength:200,
                    validator: validateMaxChar,
                    msgTarget:"val-ms-opis",
                    width: 330
                }]
            }]
        },

        initComponent: function initComponent() {
            _this = this;
            this.formPanel = new Ext.form.FormPanel(this.formPanelCfg);

            Ext.apply(this, {
                items: [this.formPanel]
            });

            this.platiteljiStore = new Ext.data.JsonStore(this.dataStorePlatiteljiCfg);
            this.primateljiStore = new Ext.data.JsonStore(this.dataStorePrimateljiCfg);

            //reg events
            this.addListener("resize", updateFormPanelSize, this);
            this.addListener("afterlayout",
                setFocus, {
                    flag: "primatelj",
                    fldName: "primatelj.iban"
                });
            this.platiteljiStore
                .addListener("load", setData, {
                    flag: "platitelj"
                });
            this.formPanel.addListener(
                "clientvalidation",
                function (formPanel, isValid){
                    if(isValid){
                        Ext.each(this.buttons, function(btn){
                            if(btn.itemId === "btn-izvrsi"){
                                btn.enable();
                            }
                        });
                    }
                },
                this);

            App.ux.PayForm.superclass.initComponent.call(this);
            this.show();
        }
    });

    Ext.reg("PayForm", App.ux.PayForm);
}());
