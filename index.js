const togglePassword = document.getElementById('password');
const togglePasswordShow = document.getElementById('togglePasswordShow');
const togglePasswordHide = document.getElementById('togglePasswordHide');


togglePasswordShow.addEventListener('click', function () {
    togglePassword.type = "text";
    togglePasswordShow.style.display = 'none';
    togglePasswordHide.style.display = 'inline';
});

togglePasswordHide.addEventListener('click', function () {
    togglePassword.type = "password";
    togglePasswordShow.style.display = 'inline';
    togglePasswordHide.style.display = 'none';
});


