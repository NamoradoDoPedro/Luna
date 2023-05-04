const confirmBtn = document.getElementById('confirm-btn');
const backBtn = document.getElementById('back-btn');
const form = document.getElementsByClassName('container');

confirmBtn.addEventListener('click', () => {
    const ageInfo = document.getElementById('age').value;
    const nameInfo = document.getElementById('name').value;
    const emailInfo = document.getElementById('email').value;
    const sexInfo = document.getElementById('sex').value;

    if (nameInfo != '' || emailInfo != '' || ageInfo != '' || sexInfo != '') {
        let data = {
            name: nameInfo,
            email: emailInfo,
            birthDate: new Date(ageInfo).toISOString(),
            sex: sexInfo,
        };
        console.log(data);
        fetch('http://localhost:8080/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    alert(data.error);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    } else {
        return;
    }
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
