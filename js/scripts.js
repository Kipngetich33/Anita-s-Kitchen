function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
jQuery(document).ready(function() {  
  jQuery("#subscribe-btn").click(function() {

  	var email= $("#email").val();
    alert(email+" "+"has been successfully added to our list of subscribers.Thank you!");
  });
});