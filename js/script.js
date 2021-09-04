const userList = [];
const url = 'https://randomuser.me/api?';
const userArr = []
function getData(n){
    let newUrl = url + 'results='+n;
    fetch(newUrl).then(response => response.json()).then(
        data => {
            let {results} = data;

            createListItems(results)
        }
    )
}

function createListItems(userList){
    for(let i =0; i<userList.length;i++){
        let user = userList[i];
        console.log(user);
        let li  = document.createElement('li');
        li.classList.add('user');
        li.innerHTML = `
        <img src="${user.picture.large}"/>
        <div class="data">
        <h4> ${user.name.first} ${user.name.last}</h4>
        </br>
        <p> ${user.location.city}, ${user.location.country}</p>
        </div>
        `
        userArr.push(li);
        document.getElementById('user-list').append(li)
    }
}

function liveSearch(){
    let input = document.getElementById('filter')
    input.addEventListener('input', ev => {
        let filter = input.value.toLowerCase()
        for (let i =0;i<userArr.length;i++){
            if(userArr[i].innerText.toLowerCase().includes(filter)){
                userArr[i].classList.remove('hidden')
            }else {
                userArr[i].classList.add('hidden');
            }
        }
    })
}

getData(30);
liveSearch();