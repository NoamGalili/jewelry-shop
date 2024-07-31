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

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            var jewelryItem = this.closest('.jewelry-item');
            var title = jewelryItem.querySelector('h2').innerText;
            var price = jewelryItem.querySelector('.price').innerText.replace('Price: $', '');

            addToCart(title, price);
            showCart();
        });
    });

    function addToCart(title, price) {
        var cartItems = document.getElementById('cart-items');
        var cartTotal = document.getElementById('cart-total');
        var cartCount = document.getElementById('cart-count');

        // Create a new list item for the cart
        var li = document.createElement('li');
        li.innerHTML = `<span>${title}</span><span>${price}</span><button class="remove-item">Remove</button>`;

        // Add remove functionality to the new item
        li.querySelector('.remove-item').addEventListener('click', function() {
            li.remove();
            updateTotal();
            updateCartCount();
        });

        cartItems.appendChild(li);
        updateTotal();
        updateCartCount();
    }

    function updateTotal() {
        var cartItems = document.getElementById('cart-items').getElementsByTagName('li');
        var total = 0;

        for (var i = 0; i < cartItems.length; i++) {
            var price = cartItems[i].getElementsByTagName('span')[1].innerText;
            total += parseFloat(price);
        }

        document.getElementById('cart-total').innerText = total.toFixed(2);
    }

    function updateCartCount() {
        var cartItems = document.getElementById('cart-items').getElementsByTagName('li').length;
        var cartCount = document.getElementById('cart-count');
        cartCount.innerText = cartItems;
    }

    function showCart() {
        var cart = document.getElementById('cart');
        cart.style.display = 'block';
    }

    function toggleCartVisibility() {
        var cart = document.getElementById('cart');
        if (cart.style.display === 'none' || cart.style.display === '') {
            cart.style.display = 'block';
        } else {
            cart.style.display = 'none';
        }
    }
});

async function search(){
    const search = document.getElementById('searchInput').value;
    const res = await fetch(`http://localhost:80/api/search/${search}`);
    const results = await res.json();
    console.log(results);
}

document.getElementById('searchInput').onkeyup = search;
