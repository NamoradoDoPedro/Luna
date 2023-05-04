const viewBtn = document.getElementById('view-btn');
const createBtn = document.getElementById('create-btn');
const backBtn = document.getElementById('back-btn');

viewBtn.addEventListener('click', () => {
    setTimeout(() => {
        history.pushState(null, null, '/client/view_user/view_user.html');
        location.reload();
    }, 500);
});
createBtn.addEventListener('click', () => {
    setTimeout(() => {
        history.pushState(null, null, '/client/create_user/create_user.html');
        location.reload();
    }, 500);
});
backBtn.addEventListener('click', () => {
    setTimeout(() => {
        history.pushState(null, null, '/client/home_page/index.html');
        location.reload();
    }, 500);
});
