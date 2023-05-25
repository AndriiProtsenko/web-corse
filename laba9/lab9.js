'use strict'

class Dog {
    constructor(id, title, sex, age, description, dogImage) {
        {
            this.id = id;
            this.title = title;
            this.sex = sex;
            this.age = age;
            this.description = description;
            this.dogImage = dogImage;
        }  
    }
}
function openModal(dog) {
    let modal = document.getElementById("modal");
    let dogImage = document.getElementById("dog-img");
    let dogName = document.getElementById("dog-name");
    let dogSex = document.getElementById("dog-sex");
    let dogAge = document.getElementById("dog-age");
    let dogPersonality = document.getElementById("dog-personality");

    dogImage.src = 'https://usersdogs.dmytrominochkin.cloud' + dog.dogImage;
    dogName.textContent = dog.title;
    dogSex.textContent = dog.sex;
    dogAge.textContent = dog.age;
    dogPersonality.textContent = dog.description;

    modal.style.display = "block";
}
function closeModal() {
    let modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// --------------

const getDogs = async function () {
    const res = await fetch('https://usersdogs.dmytrominochkin.cloud/dogs')
    if (!res.ok) throw new Error('Не побачити собачок :(')
    return await res.json()
}

let mainContainer = document.getElementById('main');

getDogs()
    .then(data => {
        data.forEach(function (item) {
            let dogContainer = document.createElement('div');
            dogContainer.classList.add('dog-container');
            dogContainer.style.marginTop = '1em';


            dogContainer.onclick = function () {
                openModal(item);
            };

            let imgContainer = document.createElement('div');
            imgContainer.classList.add('img');

            let img = document.createElement('img');
            img.src = 'https://usersdogs.dmytrominochkin.cloud' + item.dogImage;
            img.classList.add('small-img-size');

            imgContainer.appendChild(img);

            let shortInfoContainer = document.createElement('div');
            shortInfoContainer.classList.add('short-info');

            let title = document.createElement('div');
            title.classList.add('name');
            title.textContent = item.title;

            let sex = document.createElement('div');
            sex.classList.add('sex');
            sex.textContent = item.sex;

            shortInfoContainer.appendChild(title);
            shortInfoContainer.appendChild(sex);

            dogContainer.appendChild(imgContainer);
            dogContainer.appendChild(shortInfoContainer);

            mainContainer.appendChild(dogContainer);
        });
    })
    .catch(error => {
        console.error('Ну нема собачок(');
    });

