window.onload = () => {
  
  var sign,
      par;

  sign = document.getElementById('scratch_cat');
   
  sign.style.color = 'red';

  sign.addEventListener('mouseover', function() {
    sign.style.color == 'red' 
      ? sign.style.color = 'blue' 
      : sign.style.color = 'red';
    });
    
    // First way to change elements of class
    // par = document.querySelectorAll('.paragraph');
    
    // Second way to change elements of class
    par = document.getElementsByClassName('paragraph');
    for (var i = 0; i < par.length; i++) {
      par[i];
    }

    par[0].style.color = 'yellow';
    par[1].style.color = 'green';
    par[2].style.color = 'purple';
    par[3].style.color = 'white';

}
