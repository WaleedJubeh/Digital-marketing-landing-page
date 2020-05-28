window.addEventListener("scroll", function() {
    var main = document.getElementById("main");
    var services = document.getElementById("services");
    var contact = document.getElementById("contact");
    if (window.scrollY < (main.offsetTop + main.offsetHeight)) {
       document.getElementById("home-rad").checked = true;
    }else
    if (window.scrollY < (services.offsetTop + services.offsetHeight)) {
        document.getElementById("service-rad").checked = true;
     }else
     if (window.scrollY < (contact.offsetTop + contact.offsetHeight)) {
        document.getElementById("contact-rad").checked = true;
     }
  });
  