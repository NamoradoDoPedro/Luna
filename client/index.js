const logo = document.getElementById('logoName');
const confirmBtn = document.getElementById('confirm-btn');

confirmBtn.addEventListener('click', () => {
    confirmBtn.style.opacity = '0';
    logo.style.textShadow = 'white 0px 0px 20px';
    logo.style.color = 'white';
    logo.style.fontSize = '140px';
    setTimeout(() => {
        window.location.href = `http://127.0.0.1:5500/client/config_user_page/config_user.html`;
    }, 1500);
});
