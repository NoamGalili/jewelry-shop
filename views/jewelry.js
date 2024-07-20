document.getElementById('cart-button').addEventListener('click', function() {
    var cart = document.getElementById('cart');
    if (cart.style.display === 'none' || cart.style.display === '') {
        cart.style.display = 'block';
    } else {
        cart.style.display = 'none';
    }
  
});

document.getElementById('shop').addEventListener('click', function(event) {
    event.preventDefault(); // מונע מהלינק לבצע ניווט
    var options = document.getElementById('options');
    if (options.classList.contains('hidden')) {
        options.classList.remove('hidden');
    } else {
        options.classList.add('hidden');
    }
});

