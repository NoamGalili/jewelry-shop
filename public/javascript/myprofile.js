document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('cart-button').addEventListener('click', function() {
        toggleCartVisibility();
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
    
    
    document.getElementById('home-link').addEventListener('click', function(event) {
        event.preventDefault(); // Prevents the link from navigating
        document.getElementById('home').style.display = 'block';
        document.getElementById('about').style.display = 'block';
    });
    
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            var product = this.closest('.product');
            var title = product.querySelector('.product-title').innerText;
            var price = product.querySelector('.product-price').innerText;
            
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
            var price = cartItems[i].getElementsByTagName('span')[1].innerText.replace('₪', '');
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
    
    
    document.addEventListener('DOMContentLoaded', function() {
        const searchIcon = document.getElementById('searchIcon');
        const searchBar = document.getElementById('searchBar');
        const searchButton = document.getElementById('searchButton');
        const searchInput = document.getElementById('searchInput');
    
        searchIcon.addEventListener('click', function() {
            searchBar.classList.toggle('visible');
            searchInput.focus(); // Focus the input when search bar is shown
        });
    
        searchButton.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = `/search?query=${encodeURIComponent(query)}`;
            }
        });
    
        // Optional: allow pressing Enter to trigger the search
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                searchButton.click();
            }
        });
    });
    