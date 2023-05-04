const backBtn = document.getElementById('back-btn');
const id = 18;
const button = document.getElementById('button-del');

button.addEventListener('click', () => {
    fetch(`http://localhost:8080/api/users/${id}`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'DELETE',
    }).then((res) => console.log(res.json()));
});

backBtn.addEventListener('click', () => {
    setTimeout(() => {
        history.pushState(
            null,
            null,
            '/client/config_user_page/config_user.html'
        );
        location.reload();
    }, 500);
});
