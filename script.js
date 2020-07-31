
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("logo").style.fontSize = "50px";
  } else {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "70px";
  }
}


//mobile menu
function mobMenu() {
  document.getElementById("mobMenu").classList.toggle("change");
  document.getElementById("navbar-right").classList.toggle("hide");
}


//import html
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}


function form() {
  var fname = document.forms["form"]["fname"].value;
  var lname = document.forms["form"]["lname"].value;
  var email = document.forms["form"]["email"].value;
  var phone = document.forms["form"]["phone"].value;
  var source = document.forms["form"]["source"].value;
  var message = document.forms["form"]["message"].value.replace(/(?:\r\n|\r|\n)/g, '<br>');

  body = 'fname:' + fname + ';lname:' + lname + ';email:' + email + ';phone:' + phone + ';source:' + source + ';message:<br><br>' + message;
  console.log(body);

  Email.send({
    SecureToken: 'cc320b65-3af2-40ab-bb3c-1ad31b5d2dc3',
    To: 'mail.tejtdesign@gmail.com',
    From: email,
    Subject: '[webform]',
    Body: body
  }).then(
    message => console.log(message)
  );

  const form = document.getElementById('form');
  form.reset();
  alert("Thank you.")
  return false;
}