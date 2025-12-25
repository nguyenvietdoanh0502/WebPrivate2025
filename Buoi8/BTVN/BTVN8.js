import data from './cards.json' with { type: 'json' };

const grid = document.querySelector('.card_grid');
function renderData(data){
    grid.innerHTML=''
    for(let i = 0;i<data.length;i++){
        
        const cuisineContent = data[i].cuisine.length > 25 ? data[i].cuisine.slice(0,25) +'...':data[i].cuisine;
        const costContent = "₹"+data[i].priceForTwo + " for two"
        const locationContent = data[i].location.length > 25 ? data[i].location.slice(0,25)+'...':data[i].location
        const nameContent = data[i].name.length>25 ? data[i].name.slice(0,25)+"...":data[i].name
        const ratingContent = data[i].rating==null ? "-":data[i].rating
        const content =`
        <div class="card_item">
                <div class = "card_img">
                    <img src="${data[i].image}" alt="">
                    
                    
                </div>
                
                <div class="card_info1">
                    <h1 class="name">${nameContent}</h1>
                    <div class="rating">
                        <span>${ratingContent}</span>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
                <div class="card_info2">
                    <h2 class="cuisine">${cuisineContent}</h2>
                    <h2 class = "cost">${costContent}</h2>
                </div>
                <div class="address">
                    <h2 class = "location">${locationContent}</h2>
                    <h2 class = "distance">${data[i].distance}</h2>
                </div>
            </div>
        `
        const newCard = document.createElement('div')
        newCard.innerHTML=content
        const cardElement = newCard.querySelector('.card_item')
        const ratingColor= cardElement.querySelector('.rating')
        const ratingStar = ratingColor.querySelector('i')
        if(ratingContent=="-"){
            ratingColor.style.backgroundColor = 'grey';
        }
        if(ratingContent=="New"){
            ratingColor.style.backgroundColor='#90ff9483'
            ratingColor.style.color='#258a28'
            ratingColor.style.fontWeight='300'
            ratingStar.style.color='#258a28'
            ratingColor.style.border='solid 1px #258a28'
        }
        const imgContent = cardElement.querySelector('.card_img');
        if(data[i].isPromoted==true){
            const newPromoted = document.createElement('h5')
            newPromoted.textContent = 'Promoted'
            newPromoted.setAttribute("class","promoted")
            imgContent.appendChild(newPromoted)
        }
        if(data[i].discount!=null){
            const newDiscount = document.createElement('div')
            newDiscount.innerHTML=`<div class="discount">
                        <i class="fa-solid fa-percent"></i>
                        <h3>Flat ${data[i].discount}% OFF</h3>
                    </div>`
            imgContent.appendChild(newDiscount)

        }
        grid.appendChild(cardElement)
        
    }
}
renderData(data)
const input = document.querySelector('input')
    input.addEventListener('input',()=>{
        const value = input.value.toLowerCase();
        console.log(value)
        const newData = data.filter(data=>{
            return data.name.toLowerCase().includes(value);
        })
        renderData(newData)
    })