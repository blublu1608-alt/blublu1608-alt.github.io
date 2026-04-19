document.addEventListener('DOMContentLoaded', () => {
    // 1. Khai báo các elements
    const inputName = document.getElementById('fullName');
    const inputPhone = document.getElementById('phone');
    const inputEmail = document.getElementById('email');
    
    const errorName = document.getElementById('nameError');
    const errorPhone = document.getElementById('phoneError');
    const errorEmail = document.getElementById('emailError');
    
    const btnConfirm = document.getElementById('btnConfirmStep1');
    const step2Section = document.getElementById('step2');

    // 2. Khai báo Regex để validate
    const nameRegex = /^[a-zA-ZÀ-ỹ\s]+$/; 
    const phoneRegex = /^\d{10}$/; 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    // 3. Hàm kiểm tra Form
    const validateForm = () => {
        const nameVal = inputName.value.trim();
        const phoneVal = inputPhone.value.trim();
        const emailVal = inputEmail.value.trim();

        let isNameValid = nameRegex.test(nameVal);
        let isPhoneValid = phoneRegex.test(phoneVal);
        let isEmailValid = emailRegex.test(emailVal);

        // Hiển thị/Ẩn thông báo lỗi
        nameVal === '' || isNameValid ? errorName.classList.add('hidden') : errorName.classList.remove('hidden');
        phoneVal === '' || isPhoneValid ? errorPhone.classList.add('hidden') : errorPhone.classList.remove('hidden');
        emailVal === '' || isEmailValid ? errorEmail.classList.add('hidden') : errorEmail.classList.remove('hidden');

        // Hiện nút xác nhận nếu dữ liệu hợp lệ
        if (isNameValid && isPhoneValid && isEmailValid) {
            btnConfirm.classList.remove('hidden');
        } else {
            btnConfirm.classList.add('hidden');
        }
    };

    // 4. Lắng nghe sự kiện người dùng nhập liệu
    inputName.addEventListener('input', validateForm);
    inputPhone.addEventListener('input', validateForm);
    inputEmail.addEventListener('input', validateForm);

    // 5. Logic xử lý khi click "Xác nhận"
    btnConfirm.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Mở khóa Bước 2
        step2Section.classList.remove('opacity-50', 'pointer-events-none');
        step2Section.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Cập nhật trạng thái nút bấm
        btnConfirm.innerHTML = 'Đã xác nhận <span class="material-symbols-outlined text-sm align-middle ml-1">check_circle</span>';
        btnConfirm.classList.replace('bg-orange-500', 'bg-teal-600');
        btnConfirm.classList.replace('hover:bg-orange-600', 'hover:bg-teal-700');
        btnConfirm.classList.replace('shadow-orange-500/30', 'shadow-teal-500/30');
        btnConfirm.classList.add('pointer-events-none');
    });
});