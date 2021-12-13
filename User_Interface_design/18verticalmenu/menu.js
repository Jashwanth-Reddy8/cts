//WRITE YOUR jQUERY CODE HERE
$(function(){
    $("#each_ex").click(function(){
        $(".men_ex ul li a").css("background-color","red");
        $('#list li').each(function(){
            
            var textdiv= $(this).text();
            
            $("#msg_ex").append(textdiv);
            $("#msg_ex").append("<br>");
        })
    });
});