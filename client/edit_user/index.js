const backBtn = document.getElementById('back-btn');
const button = document.getElementById('confirm-btn');
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

button.addEventListener('click', () => {
    const nameInfo = document.getElementById('name').value;
    const emailInfo = document.getElementById('email').value;
    const ageInfo = document.getElementById('age').value;
    const sexInfo = document.getElementById('sex').value;

    fetch(`http://localhost:8080/api/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: nameInfo,
            email: emailInfo,
            birthDate: new Date(ageInfo).toISOString(),
            sex: sexInfo,
        }),
    })
        .then((res) => console.log(res.json()))
        .catch((error) => console.log(error));
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
