
// Note: Like all Javascript password scripts, this is hopelessly insecure as the user can see
//the valid usernames/passwords and the redirect url simply with View Source.
// And the user can obtain another three tries simply by refreshing the page.
//So do not use for anything serious!

var count = 4;
var i =0
function validate() {
var un = document.myform.username.value;
var pw = document.myform.pword.value;
var valid = false;

var unArray = ["cyeo", "bghaly", "cyoo", "MCh"];  // as many as you like - no comma after final entry
var pwArray = ["1", "2", "3", "4"];  // the corresponding passwords;

for (i=0; i <unArray.length; i++) {
if ((un == unArray[i]) && (pw == pwArray[i])) {
valid = true;
break;
}
}

if (valid) {
  if(i==0)
  {
    window.location = "http://www.google.com";
  }
  if(i==1)
  {
    window.location = "http://www.yahoo.com";
  }
  if(i!=0 || i!=1)
  {
    window.loaction = "http://www.cnn.com";
  }
return false;
}

var t = " tries";
if (count == 1) {t = " try"}

if (count >= 1) {
alert ("Invalid username and/or password.");
document.myform.username.value = "";
document.myform.pword.value = "";
setTimeout("document.myform.username.focus()", 25);
setTimeout("document.myform.username.select()", 25);
count --;
}

else {
alert ("Please wait 5 minutes before trying again.");
document.myform.username.value = "Blocked!";
document.myform.pword.value = "";
document.myform.username.disabled = true;
document.myform.pword.disabled = true;
return false;
}

}
