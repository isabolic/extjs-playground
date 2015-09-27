Ext.namespace('App');
Ext.onReady( function AppInit() {

    window.payForm = new App.ux.PayForm();

    Ext.get(Ext.query(".toggleForm")).addListener("click", function(){
        if(payForm.isVisible()){
            payForm.hide();
        }else{
            payForm.show();
        }
    });

    payForm.addListener("payForm-proceed", function(data){
        if(window.orderForm === undefined){
            window.orderForm = new App.ux.orderForm({"data":data});
        }else{
            window.orderForm.setData(data).show();
        }
    });

});
