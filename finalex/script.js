document.addEventListener('DOMContentLoaded', () => {
    // 1. Xử lý Ẩn/Hiện Menu
    const mainNav = document.getElementById('mainNav');
    const toggleMenuBtn = document.getElementById('toggleMenuBtn');

    toggleMenuBtn.addEventListener('click', () => {
        // Sử dụng toán tử ba ngôi để chuyển đổi trạng thái display
        mainNav.style.display = (mainNav.style.display === 'none') ? 'block' : 'none';
    });

    // 2. Xử lý Đổi màu chữ của bảng
    const componentTable = document.getElementById('componentTable');
    const changeColorBtn = document.getElementById('changeColorBtn');

    changeColorBtn.addEventListener('click', () => {
        // Toggle class .red-text trong CSS cho thẻ table
        componentTable.classList.toggle('red-text');
    });

    // 3. Xử lý Sắp xếp bảng theo giá (tăng dần)
    const sortPriceBtn = document.getElementById('sortPriceBtn');

    sortPriceBtn.addEventListener('click', () => {
        const tbody = componentTable.querySelector('tbody');
        const rows = Array.from(tbody.querySelectorAll('tr'));

        // Thực hiện sắp xếp dựa trên data-price
        rows.sort((rowA, rowB) => {
            const priceA = parseInt(rowA.querySelector('.price').getAttribute('data-price'));
            const priceB = parseInt(rowB.querySelector('.price').getAttribute('data-price'));
            return priceA - priceB;
        });

        // Xóa nội dung cũ và chèn lại các hàng đã sắp xếp
        tbody.innerHTML = '';
        rows.forEach(row => tbody.appendChild(row));
    });

    // 4. Xác thực Form Liên hệ (kiểm tra bỏ trống)
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    contactForm.addEventListener('submit', (e) => {
        // Kiểm tra xem có trường nào bị bỏ trống không
        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
            alert('Vui lòng điền đầy đủ thông tin!');
            e.preventDefault(); // Ngăn gửi form
        } else {
            alert('Gửi thành công!');
        }
    });
});