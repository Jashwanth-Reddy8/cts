var n = document.getElementById("txt");
    $("#btnId").click(function(){
        var res = "welcome "+ n.value + "!";
        var ele = "\""+res+"\"";
        document.getElementById('address').innerHTML = ele;
});