// Lấy tất cả các nút "Thêm vào giỏ hàng"
var addToCartButtons = document.querySelectorAll('.add-to-cart-button');

// Gắn sự kiện click cho từng nút
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Lấy thông tin sản phẩm
    var productTitle = this.parentNode.querySelector('.product-title').textContent;
    var productPrice = this.parentNode.querySelector('.product-price').textContent;
    productPrice = productPrice.replace('Giá: ', '');
    
    // Tạo mục giỏ hàng mới
    var cartItem = document.createElement('li');
    cartItem.textContent = productTitle + ' - ' + productPrice;
    
    // Thêm mục giỏ hàng vào danh sách
    var cartItemsList = document.querySelector('.cart-items');
    cartItemsList.appendChild(cartItem);
    
    // Cập nhật tổng tiền
    var cartTotal = document.querySelector('.cart-total');
    var currentTotal = parseFloat(cartTotal.textContent.replace('Tổng tiền:', ''));
    var newTotal = currentTotal + parseFloat(productPrice);
    cartTotal.textContent = 'Tổng tiền:' + newTotal.toFixed(2) +'0.000 VND';
  });
});
