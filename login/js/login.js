
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

var unArray = ["root", "bghaly", "cyoo", "MCh", "test"];  // as many as you like - no comma after final entry
var pwArray = ["cyeo", "1783COAL", "7907", "1054", "1234"];  // the corresponding passwords;

for (i=0; i <unArray.length; i++) {
if ((un == unArray[i]) && (pw == pwArray[i])) {
valid = true;
break;
}
}

if (valid) {
  if(i==0)
  {
    window.location = "schoolSites/Troy.html";
  }
  if(i==1)
  {
    window.location = "schoolSites/SunnyHills.html";
  }
  if(i==4)
  {
    window.location = "schoolSites/loginSuccess.html";
  }
  if(i!=0 || i!=1 || i!=4)
  {
    window.loaction = "schoolSites/Sonora.html";
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
