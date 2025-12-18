const name = document.querySelector('.card__input__name');
const point = document.querySelector('.card__input__point');
const ul = document.querySelector('.card__list');
const button = document.querySelector('.card__button__add');

button.addEventListener("click", () => {
        if(name.value == "" || point.value==""){
            alert("Mày quên chưa điền thông tin kìa")
            return
        }
        const new_li = document.createElement("li")
        new_li.textContent=`${name.value} - ${point.value}`;
        ul.appendChild(new_li)
        if (point.value >= 5 ){
            new_li.style.color = "green";
        }
        else{
            new_li.style.color = "red";
        }
        if (point.value == 36 || point.value == 18){
            new_li.style.color = "red";
        }
        console.log(ul);
        new_li.addEventListener("click",()=>{
            ul.removeChild(new_li)
        })
      });


