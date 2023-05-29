// Lấy tất cả các nút "Thêm vào giỏ hàng"
var addToCartButtons = document.querySelectorAll('.add-to-cart-button');

// Gắn sự kiện click cho từng nút
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Lấy thông tin sản phẩm
    var productTitle = this.dataset.title;
    var productPrice = this.dataset.price;

    // Tạo thông báo thanh toán
    var notification = document.getElementById('cart-notification');
    notification.textContent = 'Bạn đã thêm sản phẩm "' + productTitle + '" vào giỏ hàng. Tổng tiền: ' + productPrice + ' đồng.';

    // Các bước tiếp theo: xử lý thanh toán thực tế, chẳng hạn gửi yêu cầu đến máy chủ hoặc chuyển hướng đến trang thanh toán

    // Xóa thông báo sau 3 giây
    setTimeout(function() {
      notification.textContent = '';
    }, 3000);
  });
});
