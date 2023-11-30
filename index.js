
document.addEventListener('DOMContentLoaded', function () {
    const categorySelect = document.getElementById('categorySelect');
    const productList = document.getElementById('product-list');
  
    categorySelect.addEventListener('change', function () {
      fetchProducts(categorySelect.value);
    });
  
    function fetchProducts(category) {
      let apiUrl = 'https://fakestoreapi.com/products';
      if (category) {
        apiUrl += `/category/${category}`;
      }
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(products => {
          renderProducts(products);
        })
        .catch(error => console.error('Error fetching products:', error));
    }
  
    function renderProducts(products) {
      productList.innerHTML = '';
  
      products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'card mb-4';
  
        const cardImage = document.createElement('img');
        cardImage.className = 'card-img-top';
        cardImage.src = product.image;
        cardImage.alt = product.title;
  
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
  
        const productName = document.createElement('h5');
        productName.className = 'card-title';
        productName.textContent = product.title;
  
        const productDescription = document.createElement('p');
        productDescription.className = 'card-text';
        productDescription.textContent = product.description;
  
        const productPrice = document.createElement('p');
        productPrice.className = 'card-text';
        productPrice.innerHTML = `<strong>Price:</strong> $${product.price}`;
  
        const addToCartButton = document.createElement('button');
        addToCartButton.className = 'btn btn-success';
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.addEventListener('click', function() {
          alert(`Added ${product.title} to the cart!`);
        });
  
        cardBody.appendChild(productName);
        cardBody.appendChild(productDescription);
        cardBody.appendChild(productPrice);
        cardBody.appendChild(addToCartButton);
  
        productCard.appendChild(cardImage);
        productCard.appendChild(cardBody);
  
        productList.appendChild(productCard);
      });
    }
  
   
    fetchProducts('');
  });
  