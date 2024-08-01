document.addEventListener('DOMContentLoaded', function () {
    var searchBar = document.getElementById('searchBar');
    var cart = document.getElementById('cart');
    var searchIcon = document.getElementById('searchIcon');
    var cartButton = document.getElementById('cart-button');
    var searchInput = document.getElementById('searchInput');

    searchBar.classList.add('hidden');  // Hide the search bar initially

    searchIcon.addEventListener('click', function (event) {
        event.stopPropagation();
        searchBar.classList.toggle('hidden');
        cart.style.display = 'none';  // Hide the cart if it was open

        if (!searchBar.classList.contains('hidden')) {
            document.addEventListener('click', hideSearchBarOnClickOutside);
        } else {
            document.removeEventListener('click', hideSearchBarOnClickOutside);
        }
    });

    cartButton.addEventListener('click', function (event) {
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

    document.getElementById('shop').addEventListener('click', function (event) {
        event.preventDefault(); // Prevents the link from navigating
        var options = document.getElementById('options');
        if (options.classList.contains('hidden')) {
            options.classList.remove('hidden');
        } else {
            options.classList.add('hidden');
        }
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            var jewelryItem = this.closest('.jewelry-item');
            var itemId = jewelryItem.dataset.itemId;
            var title = jewelryItem.querySelector('h2').innerText;
            var price = jewelryItem.querySelector('.price').innerText.replace('Price: ₪', '');
            var imageSrc = jewelryItem.querySelector('img').src;

            addToCart(itemId, title, price, imageSrc);
            showCart();
        });
    });

    function addToCart(itemId, title, price, imageSrc) {
        var cartItems = document.getElementById('cart-items');
        var cartTotal = document.getElementById('cart-total');
        var cartCount = document.getElementById('cart-count');

        // Create a new list item for the cart
        var li = document.createElement('li');
        li.innerHTML = `<img src="${imageSrc}" alt="${title}"><span>${title}</span><span>${price}</span><button class="remove-item">Remove</button>`;
        li.dataset.itemId = itemId;

        // Add remove functionality to the new item
        li.querySelector('.remove-item').addEventListener('click', function () {
            li.remove();
            updateTotal();
            updateCartCount();
            saveCartToLocalStorage();
        });

        cartItems.appendChild(li);
        updateTotal();
        updateCartCount();
        saveCartToLocalStorage();
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

    function saveCartToLocalStorage() {
        var cartItems = [];
        document.querySelectorAll('#cart-items li').forEach(li => {
            var itemId = li.dataset.itemId;
            var title = li.querySelector('span').innerText;
            var price = li.querySelectorAll('span')[1].innerText;
            var imageSrc = li.querySelector('img').src;
            cartItems.push({ itemId, title, price, imageSrc });
        });
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }

    function loadCartFromLocalStorage() {
        var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.forEach(item => {
            addToCart(item.itemId, item.title, item.price, item.imageSrc);
        });
    }

    // New: Search functionality
    searchInput.addEventListener('input', function () {
        var filter = searchInput.value.toLowerCase();
        var jewelryItems = document.querySelectorAll('.jewelry-item');

        jewelryItems.forEach(item => {
            var title = item.querySelector('h2').innerText.toLowerCase();
            if (title.includes(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });

    loadCartFromLocalStorage(); // Load cart items from local storage on page load
});
