var app = {

    initialize: function() {
        view.receivedEvent();
        this.receivedEvent();
    },

    receivedEvent: function(){

        $('body').show().css({'opacity': '1'});

    }

};