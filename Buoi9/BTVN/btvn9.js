import data from './product.json' with { type: 'json' };
let data2 = [];
const grid = document.querySelector(".product")
const shop = document.querySelector(".shop__items")
const so = document.querySelector(".so")
const total = document.querySelector(".allTotal")

let x = 0
let y = 0
function renderDataLeft(data){
    grid.innerHTML='';
    const htmlContent = data.map(item=>{
        const formattedPrice = item.price.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND'
        });
        return `
            <div class="product__item">
                    <img src="${item.img}" alt="">
                    <h4>${item.category}</h4>
                    <h2>${item.name}</h2>
                    <h3>${formattedPrice}</h3>
                    <button>Thêm vào giỏ</button>
                </div>
        `
    }).join('')
    grid.innerHTML=htmlContent;
    const buttonAdd = grid.querySelectorAll('button')
    buttonAdd.forEach((button, index)=>{
        button.addEventListener("click",()=>{
            const item = data[index];
            if(!data2.includes(item)){
                data2.push(item)
                item['quantity']=1;
                
            }
            else{
                item.quantity+=1
            }
            y+=item.price
            x+=1
            renderDataRight(data2)
        })
    })
    
}
renderDataLeft(data)
function renderDataRight(data2){
    shop.innerHTML=``
    
    const htmlContent2 = data2.map(item=>{
        const formattedPrice = item.price.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND'
        });
        return `
            <div class="shop__right-item">
                    <img src="${item.img}" alt="">
                    <div class="info">
                        <h2>${item.name}</h2>
                        <h3>${formattedPrice}</h3>
                        <div class="quantity">
                            <div class="plus">
                                <button class="tru">-</button>
                                <h4>${item.quantity}</h4>
                                <button class="cong">+</button>
                            </div>
                            <button class="remove">Xóa</button>
                        </div>

                    </div>
                </div> 
        `
    }).join('')
    so.textContent = x

    const allTotal = y.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND'
        });
    total.textContent = allTotal
    if(data2.length!=0){
        shop.innerHTML = htmlContent2;
    }
    else{
        shop.innerHTML = `<div class="noItem">
                    <i class="fa-solid fa-basket-shopping"></i>
                    <h2>Chưa có sản phẩm nào</h2>
                </div>`
    }
    const buttonTrus = shop.querySelectorAll(".tru")
    const buttonCongs = shop.querySelectorAll(".cong")
    buttonTrus.forEach((button,index)=>{
        button.addEventListener("click",()=>{
            const item = data2[index];
            if(item.quantity>1){
                item.quantity-=1;
                x-=1
                y-=item.price
            }
            renderDataRight(data2)
        })
    })
    buttonCongs.forEach((button,index)=>{
        button.addEventListener("click",()=>{
            const item = data2[index];
            item.quantity+=1
            x+=1
            y+=item.price
            renderDataRight(data2)
        })
    })
    const buttonXoas = shop.querySelectorAll(".remove");
    buttonXoas.forEach((button,index)=>{
        button.addEventListener("click",()=>{
            const item = data2[index]
            const result = confirm("Xóa sản phẩm này?");
            if(result==true){
                y-=item.quantity*item.price
                x-=item.quantity
                data2.splice(index,1)
                
            }
            renderDataRight(data2)
        })
    })
}
const pay = document.querySelector(".pay")
pay.addEventListener("click",()=>{
    if(y!=0){
        alert(`Thanh toán thành công ${total.textContent}`)
        data2.splice(0,data2.length)
        y = 0
        x=0
        renderDataRight(data2);
    }
    else{
        alert('Không có gì để thanh toán')
    }
})

