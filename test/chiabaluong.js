document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // KHAI BÁO BIẾN
    // ==========================================
    const inputName = document.getElementById('fullName');
    const inputPhone = document.getElementById('phone');
    const inputEmail = document.getElementById('email');
    
    const errorName = document.getElementById('nameError');
    const errorPhone = document.getElementById('phoneError');
    const errorEmail = document.getElementById('emailError');
    
    const btnConfirm = document.getElementById('btnConfirmStep1');
    const step2Section = document.getElementById('step2');

    const paymentMethods = document.querySelectorAll('.payment-method');
    const btnNextStep2 = document.getElementById('btnNextStep2');
    
    let selectedPaymentMethod = null; // Biến lưu phương thức thanh toán

    const nameRegex = /^[a-zA-ZÀ-ỹ\s]+$/; 
    const phoneRegex = /^\d{10}$/; 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    // ==========================================
    // LOGIC BƯỚC 1: VALIDATE THÔNG TIN
    // ==========================================
    const validateForm = () => {
        const nameVal = inputName.value.trim();
        const phoneVal = inputPhone.value.trim();
        const emailVal = inputEmail.value.trim();

        let isNameValid = nameRegex.test(nameVal);
        let isPhoneValid = phoneRegex.test(phoneVal);
        let isEmailValid = emailRegex.test(emailVal);

        nameVal === '' || isNameValid ? errorName.classList.add('hidden') : errorName.classList.remove('hidden');
        phoneVal === '' || isPhoneValid ? errorPhone.classList.add('hidden') : errorPhone.classList.remove('hidden');
        emailVal === '' || isEmailValid ? errorEmail.classList.add('hidden') : errorEmail.classList.remove('hidden');

        if (isNameValid && isPhoneValid && isEmailValid) {
            btnConfirm.classList.remove('hidden');
        } else {
            btnConfirm.classList.add('hidden');
        }
    };

    inputName.addEventListener('input', validateForm);
    inputPhone.addEventListener('input', validateForm);
    inputEmail.addEventListener('input', validateForm);

    btnConfirm.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Mở khóa Bước 2
        step2Section.classList.remove('opacity-50', 'pointer-events-none');
        step2Section.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        btnConfirm.innerHTML = 'Đã xác nhận <span class="material-symbols-outlined text-sm align-middle ml-1">check_circle</span>';
        btnConfirm.classList.replace('bg-orange-500', 'bg-teal-600');
        btnConfirm.classList.replace('hover:bg-orange-600', 'hover:bg-teal-700');
        btnConfirm.classList.replace('shadow-orange-500/30', 'shadow-teal-500/30');
        btnConfirm.classList.add('pointer-events-none');
    });

    // ==========================================
    // LOGIC BƯỚC 2: CHỌN PHƯƠNG THỨC & TIẾP THEO
    // ==========================================
    paymentMethods.forEach(method => {
        method.addEventListener('click', () => {
            // 1. Xóa class active ở tất cả các ô
            paymentMethods.forEach(m => {
                m.classList.remove('border-teal-500', 'bg-teal-50', 'ring-2', 'ring-teal-500/20', 'active');
                m.classList.add('border-slate-200');
            });

            // 2. Thêm class active cho ô vừa click
            method.classList.remove('border-slate-200');
            method.classList.add('border-teal-500', 'bg-teal-50', 'ring-2', 'ring-teal-500/20', 'active');

            // 3. Lưu giá trị đã chọn
            selectedPaymentMethod = method.id;

            // 4. Hiển thị nút "Tiếp theo"
            btnNextStep2.classList.remove('hidden');
        });
    });

    // Xử lý khi click nút "Tiếp theo"
    btnNextStep2.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (selectedPaymentMethod) {
            alert(`Bạn đã chọn phương thức: ${selectedPaymentMethod}.\nHệ thống sẽ chuyển sang giao diện thanh toán tương ứng...`);
            
        }
    });
});