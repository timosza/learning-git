window.onload = () => {
    
    var sign = document.getElementById('scratch_cat');
    
    sign.style.color = 'red';

    sign.addEventListener('mouseover', function() {
        sign.style.color == 'red' ? sign.style.color = 'blue' : sign.style.color = 'red';
    });
    
}
