document.getElementById('cart-button').addEventListener('click', function() {
    var cart = document.getElementById('cart');
    if (cart.style.display === 'none' || cart.style.display === '') {
        cart.style.display = 'block';
    } else {
        cart.style.display = 'none';
    }
});

document.getElementById('shop').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the link from navigating
    var options = document.getElementById('options');
    if (options.classList.contains('hidden')) {
        options.classList.remove('hidden');
    } else {
        options.classList.add('hidden');
    }
});

document.getElementById('showNecklaces').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the link from navigating
    document.getElementById('productGrid-necklaces').style.display = 'grid';
    document.getElementById('productGrid-rings').style.display = 'none';
    document.getElementById('productGrid-bracelets').style.display = 'none';
    document.getElementById('productGrid-earrings').style.display = 'none';
    document.getElementById('home').style.display = 'none';
    document.getElementById('about').style.display = 'none';
});


document.getElementById('showRings').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the link from navigating
    document.getElementById('productGrid-rings').style.display = 'grid';
    document.getElementById('productGrid-bracelets').style.display = 'none';
    document.getElementById('productGrid-earrings').style.display = 'none';
    document.getElementById('productGrid-necklaces').style.display = 'none';
    document.getElementById('home').style.display = 'none';
    document.getElementById('about').style.display = 'none';
});

document.getElementById('showEarrings').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the link from navigating
    document.getElementById('productGrid-earrings').style.display = 'grid';
    document.getElementById('productGrid-bracelets').style.display = 'none';
    document.getElementById('productGrid-necklaces').style.display = 'none';
    document.getElementById('productGrid-rings').style.display = 'none';
     document.getElementById('home').style.display = 'none';
    document.getElementById('about').style.display = 'none';
});

document.getElementById('showBracelets').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the link from navigating
    document.getElementById('productGrid-bracelets').style.display = 'grid';
    document.getElementById('productGrid-earrings').style.display = 'none';
    document.getElementById('productGrid-necklaces').style.display = 'none';
    document.getElementById('productGrid-rings').style.display = 'none';
     document.getElementById('home').style.display = 'none';
    document.getElementById('about').style.display = 'none';
});


document.getElementById('home-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the link from navigating
    document.getElementById('productGrid-necklaces').style.display = 'none';
    document.getElementById('productGrid-rings').style.display = 'none';
    document.getElementById('productGrid-earrings').style.display = 'none';
    document.getElementById('productGrid-bracelets').style.display = 'none';
    document.getElementById('home').style.display = 'block';
    document.getElementById('about').style.display = 'block';
});
