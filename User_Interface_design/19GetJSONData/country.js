//WRITE YOUR jQUERY CODE HERE
$("#btn-id").click(function() {
    //get data    
    $.getJSON("https://reqres.in/api/users?page=2", function(json) {
      //Empty div if clicked agian
      $("#data-id").html('')
      //loop through it
      json.data.forEach(function(jd) {
        //append data in div 
        $("#data-id").append(jd.id + "--" + jd.email + '<br>');
      })
    });
  });