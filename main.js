$(document).ready(
    $('input').keypress(
        function(event){
            if(event.which===13){
                var takeData=$(this).val();
                $(this).val('');
                $('ul').append('<li>'+takeData + '<span><i class="fa fa-trash"></i></span>');
            }
        }
    )
);
$(document).ready(
    function(){
        $('ul').on('click', 'li', function(event){
            $(this).fadeOut(500, function(){
                $(this).remove();
            })
            event.stopPropagation();
        })
    }
);

