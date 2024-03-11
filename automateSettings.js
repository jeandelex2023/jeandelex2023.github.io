 // HOME PAGE SETTINGS
document.getElementById('showMenu').addEventListener('click', function() {
  var sideDiv = document.getElementById('sideDiv');
  if (sideDiv.style.right === '-660px') {
    sideDiv.style.right = '0'; // Display div 0px from the right
  }
 else {
    sideDiv.style.right = '-660px'; // Hide div off to the right

  }
});
 // ABOUT PAGE SETTINGS
document.getElementById('showMenuAbout').addEventListener('click', function() {
var sideDiv2 = document.getElementById('sideDiv2');
if (sideDiv2.style.right === '-660px'){
  sideDiv2.style.right = '0'; 
}
else{
  sideDiv2.style.right = '-660px';
}
});

 // CV PAGE SETTINGS
 document.getElementById('showMenuMyCV').addEventListener('click', function() {
  var sideDiv3 = document.getElementById('sideDiv3');
  if (sideDiv3.style.right === '-660px'){
    sideDiv3.style.right = '0'; 
  }
  else{
    sideDiv3.style.right = '-660px';
  }
  });