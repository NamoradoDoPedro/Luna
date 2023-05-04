const table = document.getElementById('customers');
const backBtn = document.getElementById('back-btn');

fetch('http://localhost:8080/api/users')
    .then((response) => response.json())
    .then((users) => {
        users.forEach((user) => {
            const data = new Date();
            const ano = data.getFullYear().toString().substring(0, 4);
            const tr = document.createElement('tr');

            const idInput = document.createElement(`td`);
            const nameInput = document.createElement('td');
            const emailInput = document.createElement('td');
            const ageInput = document.createElement('td');
            const sexInput = document.createElement('td');
            const editInput = document.createElement('td');
            const delInput = document.createElement('td');

            const editBtn = document.createElement('button');
            const delBtn = document.createElement('button');

            editBtn.innerText = 'Editar';
            delBtn.innerText = 'Deletar';
            editBtn.classList.add('edit-btn');
            delBtn.classList.add('del-btn');

            table.appendChild(tr);
            editInput.appendChild(editBtn);
            delInput.appendChild(delBtn);

            editBtn.id = user.id;
            delBtn.id = user.id;

            tr.appendChild(idInput);
            tr.appendChild(nameInput);
            tr.appendChild(emailInput);
            tr.appendChild(ageInput);
            tr.appendChild(sexInput);
            tr.appendChild(editInput);
            tr.appendChild(delInput);

            idInput.innerText = user.id;
            nameInput.innerText = user.name;
            emailInput.innerText = user.email;
            ageInput.innerText =
                Number(ano) - Number(user.birthDate.substring(0, 4)) - 1;
            sexInput.innerText = user.sex;
            editBtn.addEventListener('click', () => {
                window.location.href = `../edit_user/edit_user.html?id=${user.id}`;
            });
            delBtn.addEventListener('click', () => {
                const result = confirm(`Deseja excluir mesmo o ${user.name}`);
                if (result) {
                    fetch(`http://localhost:8080/api/users/${user.id}`, {
                        headers: { 'Content-Type': 'application/json' },
                        method: 'DELETE',
                    }).then((res) => console.log(res.json()));
                }
            });
        });
    })
    .catch((error) => {
        console.error(error);
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
