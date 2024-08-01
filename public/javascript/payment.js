document.addEventListener('DOMContentLoaded', function() {
    var searchBar = document.getElementById('searchBar');
    var cart = document.getElementById('cart');
    var searchIcon = document.getElementById('searchIcon');
    var cartButton = document.getElementById('cart-button');

    searchBar.classList.add('hidden');  // Hide the search bar initially

    searchIcon.addEventListener('click', function(event) {
        event.stopPropagation();
        searchBar.classList.toggle('hidden');
        cart.style.display = 'none';  // Hide the cart if it was open

        if (!searchBar.classList.contains('hidden')) {
            document.addEventListener('click', hideSearchBarOnClickOutside);
        } else {
            document.removeEventListener('click', hideSearchBarOnClickOutside);
        }
    });

    cartButton.addEventListener('click', function(event) {
        event.stopPropagation();
        searchBar.classList.add('hidden');  // Hide the search bar if it was open
        toggleCartVisibility();

        if (cart.style.display === 'block') {
            document.addEventListener('click', hideCartOnClickOutside);
        } else {
            document.removeEventListener('click', hideCartOnClickOutside);
        }
    });

    function hideSearchBarOnClickOutside(event) {
        if (!searchBar.contains(event.target) && event.target !== searchIcon) {
            searchBar.classList.add('hidden');
            document.removeEventListener('click', hideSearchBarOnClickOutside);
        }
    }

    function hideCartOnClickOutside(event) {
        if (!cart.contains(event.target) && event.target !== cartButton) {
            cart.style.display = 'none';
            document.removeEventListener('click', hideCartOnClickOutside);
        }
    }

    document.getElementById('shop').addEventListener('click', function(event) {
        event.preventDefault(); // Prevents the link from navigating
        var options = document.getElementById('options');
        if (options.classList.contains('hidden')) {
            options.classList.remove('hidden');
        } else {
            options.classList.add('hidden');
        }
    });

    function loadCartFromLocalStorage() {
        var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        var cartList = document.getElementById('cart-items');
        var total = 0;

        cartItems.forEach(item => {
            var li = document.createElement('li');
            li.innerHTML = `<img src="${item.imageSrc}" alt="${item.title}"><span>${item.title}</span><span>${item.price}</span>`;
            cartList.appendChild(li);
            total += parseFloat(item.price);
        });

        document.getElementById('cart-total').innerText = total.toFixed(2);
        document.querySelector('.order-summary p:nth-of-type(1)').innerText = `Subtotal: ₪${total.toFixed(2)}`;
        document.querySelector('.order-summary p:nth-of-type(3)').innerText = `Estimated Total: ₪${total.toFixed(2)}`;
    }

    loadCartFromLocalStorage(); // Load cart items from local storage on page load
});
