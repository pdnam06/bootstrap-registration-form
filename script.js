const form = document.querySelector('#registration-form');
const password = document.querySelector('#password');
const confirmation = document.querySelector('#confirm-password');
const success = document.querySelector('#success-message');
function validatePasswordMatch() {
    confirmation.setCustomValidity(confirmation.value && confirmation.value !== password.value
        ? 'Mật khẩu xác nhận chưa khớp.' : '');
}
form.addEventListener('input', () => {
    success.hidden = true;
    validatePasswordMatch();
});
form.addEventListener('change', () => { success.hidden = true; });
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validatePasswordMatch();
    if (!form.reportValidity()) return;
    success.hidden = false;
});
