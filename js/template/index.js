var showingSourceCode = false, editMode = true;

var view = {

    receivedEvent: function(){
        boxTextEditor.document.designMode = 'On';

        $(".edit").on("click", function(){
            view.action.toggle.editor();
        });

        $(".source").on("click", function(){
            view.action.toggle.source();
        });

        $(".cmd").on("click", function(){
            var cmd = $(this).attr("data-cmd");
            view.action.executeCommand(cmd);
        });

        $(".cmd-prompt").on("click", function(){
            var cmd = $(this).attr("data-cmd");
            var text = $(this).attr("data-text");
            var arg = prompt(text, '');
            view.action.executeCommand(cmd, arg);
        });

        $(".cmd-arg").on("change", function(){
            var cmd = $(this).attr("data-cmd");
            var arg = $(this).val();
            view.action.executeCommand(cmd, arg);
        });

    },

    action: action = {
        executeCommand: function(cmd, arg = null){
            boxTextEditor.document.execCommand(cmd, false, arg);
        },
        toggle: toggle = {
            source: function(){
                if(showingSourceCode){
                    boxTextEditor.document.getElementsByTagName('body')[0].innerHTML = boxTextEditor.document.getElementsByTagName('body')[0].textContent;
                    showingSourceCode = false;
                }else{
                    boxTextEditor.document.getElementsByTagName('body')[0].textContent = boxTextEditor.document.getElementsByTagName('body')[0].innerHTML;
                    showingSourceCode = true;
                }
            },
            editor: function(){
                if(editMode){
                    boxTextEditor.document.designMode = 'Off';
                    editMode = false;
                }else{
                    boxTextEditor.document.designMode = 'On';
                    editMode = true;
                }
            }
        }
    }

};


$.getScript("js/app/all.js", function(){
    app.initialize();
});