<!--opens/closes modal window with order form-->  
var manageModalEntry = function() {
    var openModalEntry = document.querySelectorAll(".order-btn--opening");
    var showModalEntry = document.querySelectorAll(".order");
            [].forEach.call(openModalEntry, function(element, index) {
                element.addEventListener('click', function(e) {
             e.preventDefault();
            showModalEntry[0].classList.add("order--on");
                })
            });  
<!--closing on close-btn, esc and clicking outside modal window-->
    var closeModalEntry = function(e) {
        if (e.keyCode === 27 || e.type === 'click' && !$(e.target).closest(".order-btn--opening,.order").length || e.type === 'click' && $(e.target).closest(".order__close-btn").length) {
                $("body").find(".order").removeClass("order--on");
        }
    }
        
        $(document).keyup(closeModalEntry);
        $(document).click(closeModalEntry);
    }
    manageModalEntry();

<!--enables/disables order-btn, if checkbox on/off-->
    $(document).ready(function() {
        $('input[name=electro]').change(function() {
            
            if ($(this).is(':checked')) {
                $('#aftercheckbox-btn').removeClass('order-btn--disabled');
                $('#aftercheckbox-btn').addClass('order-btn--opening');
                manageModalEntry();
            }; 
            
            if (!$('input[name=electro]').is(':checked')) {
                $('#aftercheckbox-btn').addClass('order-btn--disabled');
                $('#aftercheckbox-btn').removeClass('order-btn--opening'); 
            };
        });
    });

<!--deletes autofocus in mobile version to show full view of order form-->
    var windowWidth = Math.min(document.documentElement.clientWidth, window.innerWidth || 0);
            
            if (windowWidth < 768) { 
                $('input[name=client-name]').removeAttr('autofocus');
            };

<!--shows upload filename; "&#128206;" is for clip(attachment) symbol-->
    function getName (str){
        if (str.lastIndexOf('\\')){
            var i = str.lastIndexOf('\\')+1;
        } else {
                var i = str.lastIndexOf('/')+1;
            }	
        
        var filename = str.slice(i);			
        var uploaded = document.getElementById("fileformlabel");
            uploaded.innerHTML = "&#128206;" + " " + filename;
    };