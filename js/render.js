import { basket } from './basket.js';

export const rendarCard = function (item) {
    const container = document.createElement('div');
    container.className = 'container__card';
    container.onclick = function(){
        const modal = document.querySelector('.modal');
        const modalWindow = document.querySelector('.modal__window');
        modalWindow.onclick = function (event) {
            event.stopPropagation();
        }
        modalWindow.innerHTML = `
        <div class="modal__window__first">
                <img src="img/${item.imgUrl}" alt="">
            </div>
            <div class="modal__window__second">
                <h2>${item.name}</h2>

                <div class="container__card__stats">
                <div class="container__card__stats__info">
                <div class="container__card__stats__info__favorts">
                    <i class="fas fa-heart"></i>
                </div> 
    
                <div class="container__card__stats__info__left">
                    <p>${item.orderInfo.reviews}% Positive reviews</p>
                    <div class="container__card__stats__info__right__bottom">
                        <p>Above avarage</p>
                    </div>
                </div>
    
                <div class="container__card__stats__info__right">
                    <p>${item.orderInfo.inStock}</p>
                    <div class="container__card__stats__info__right__bottom">
                        <p>orders</p>
                    </div>
                </div>
            </div>
                </div>
                <ul>
                    <li>Color: ${item.color} </li>
                    <li>Operating System: ${item.os} </li>
                    <li>Chip: ${item.chip.name} </li>
                    <li>Height:${item.size.height} sm </li>
                    <li>Width: ${item.size.width} sm  </li>
                    <li>Depth:${item.size.depth}  sm</li>
                    <li>Weight:${item.size.weight} kg</li>
                </ul>

            </div>

            <div class="modal__window__therst">
                <div class="cont">
                <h2>$ ${item.price}</h2>
                <p>Stock ${item.orderInfo.inStock} pcs.</p>
                `
                if(item.orderInfo.inStock > 0){
                    const temp = document.querySelector('.modal__window__therst')
                    const button = document.createElement('button')
                    button.className = 'buttonInModal';
                    button.innerText = 'Add to cart';
                    button.onclick = function(event){
                        event.stopPropagation();
                        basket.addToBacket(item)
                    }
                    temp.appendChild(button)

                }
                //<button class="buttonInModal">Add to cart</button>
        
        ////////////
        modal.classList.add('active')
        modal.onclick = function () {
            modal.classList.remove('active')
            }


    }






    const buttonLike = document.createElement('div');
    buttonLike.className = 'container__card__favorites'
    const imgFavorites = document.createElement('i')
    imgFavorites.className = `${item.isFavorite ? 'fas' : 'far'} fa-heart`;
    buttonLike.onclick = function (event) {
        event.stopPropagation();
        item.isFavorite = !item.isFavorite;
        imgFavorites.className = `${item.isFavorite ? 'fas' : 'far'} fa-heart`;
    }
    ////////////////////////////////
    buttonLike.appendChild(imgFavorites);
    container.appendChild(buttonLike)

    //
    const imgContainer = document.createElement('div')
    imgContainer.className = 'container__card__image';
    const img = document.createElement('img');
    img.src = `img/${item.imgUrl}`;
    imgContainer.appendChild(img)
    container.appendChild(imgContainer);
    //
    const nameContainer = document.createElement('div')
    nameContainer.className = 'container__card__name';
    const textH3 = document.createElement('h3');
    textH3.innerText = `${item.name}`;
    nameContainer.appendChild(textH3)
    container.appendChild(nameContainer)
    //
    const instockContainer = document.createElement('div')
    instockContainer.className = 'container__card__instock';
    const checkInstock = document.createElement('i')
    if (item.orderInfo.inStock === 0) {
        checkInstock.className = 'far fa-times-circle';
    } else {
        checkInstock.className = 'far fa-check-circle';
    }
    const textP = document.createElement('p')
    textP.innerText = `${item.orderInfo.inStock} left in stock`;///////////////
    instockContainer.appendChild(checkInstock)
    instockContainer.appendChild(textP)
    container.appendChild(instockContainer)

    //
    const priceContainer = document.createElement('div')
    priceContainer.className = 'container__card__price';
    const textAboutPrice = document.createElement('p')
    textAboutPrice.innerText = `Price: ${item.price} $`;
    priceContainer.appendChild(textAboutPrice)
    container.appendChild(priceContainer)

    //Add to cart button
    const buttonContainer = document.createElement('div')
    buttonContainer.className = 'container__card__button';
    const button = document.createElement('button');
    button.innerText = 'Add to card';
    button.className = item.orderInfo.inStock > 0 ? '' : 'disabled';
    button.disabled = item.orderInfo.inStock < 1;
    button.onclick = function(event){
        event.stopPropagation();
        basket.addToBacket(item)
    }
    buttonContainer.appendChild(button);
    container.appendChild(buttonContainer);
    //
    const containerStats = document.createElement('div')
    containerStats.className = 'container__card__stats';

    containerStats.innerHTML = `
        <div class="container__card__stats__info">
            <div class="container__card__stats__info__favorts">
                <i class="fas fa-heart"></i>
            </div> 

            <div class="container__card__stats__info__left">
                <p>${item.orderInfo.reviews}% Positive reviews</p>
                <div class="container__card__stats__info__right__bottom">
                    <p>Above avarage</p>
                </div>
            </div>

            <div class="container__card__stats__info__right">
                <p>${item.orderInfo.inStock}</p>
                <div class="container__card__stats__info__right__bottom">
                    <p>orders</p>
                </div>
            </div>
        </div>
    `

    container.appendChild(containerStats)

    return container;
}

export const rendarCards = function (arr = items) {
    let container = document.querySelector('.container')
    container.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        try {
            container.appendChild(rendarCard(arr[i]))
        } catch (e) {
            console.log(arr[i])
        }
    }
}

                                                                            //render basket
export const renderBasketContent = basket => {
        const circleWithPrice = document.querySelector('.headerInfo__backetContainer__positionAmount')
        circleWithPrice.innerText = basket.totalAmount || 0;
        const modal = document.querySelector('.modalBacket');
        modal.onclick = event => event.stopPropagation();
        if(basket.totalAmount === 0){
            modal.innerText = 'cart is empty'
            modal.innerHTML = `
            <div class="textForEmptyCart">
                <h4>cart is empty</h4>
            </div>`
        }else{

        
    
        modal.innerHTML = `
        <div class="modalBacket__info">
            <h3>Shopping Cart</h3>
            <p>Checkout is almost done!</p>
            <div class="modalBacket__good-container"></div>
            
            <div class="modalBacket__footer">
                <div class="modalBacket__footer__total">
                    <p>total amount:  ${basket.totalAmount}ptc.</p>
                </div>
                <div class="modalBacket__footer__total">
                    <p>total price: ${basket.totalPrice}$</p>
                </div>
             </div>

        </div>
        `
        
        for(let i = 0; i < basket.goodsList.length; i++ ){
            const item = basket.goodsList[i];

            const goodsContainer = document.createElement('div')
            goodsContainer.className = 'modalBacket__good'

            const imgContainer = document.createElement('div')
            imgContainer.className = 'modalBacket__good__img';
            const img = document.createElement('img')
            img.src = `img/${item.img}`;
            imgContainer.appendChild(img);

            goodsContainer.appendChild(imgContainer)
            //
            
            const infoContainer = document.createElement('div')
            infoContainer.className = 'modalBacket__good__info';
            // goodsContainer.appendChild(infoContainer)

            const p = document.createElement('p')
            p.innerHTML = `${item.name}`
            infoContainer.appendChild(p);
            goodsContainer.appendChild(infoContainer)

            const priceContainer = document.createElement('div')
            priceContainer.className = 'modalBacket__good__info__price';
            // infoContainer.appendChild(priceContainer)

            const pPrice = document.createElement('p')
            pPrice.innerHTML = `${item.price} $`
            priceContainer.appendChild(pPrice);
            infoContainer.appendChild(priceContainer)
            //
            const amountContainer = document.createElement('div')
            amountContainer.className = 'modalBacket__good__amount';
            infoContainer.appendChild(amountContainer);

            const buttonAmount = document.createElement('button')
            buttonAmount.className = 'amount';
            buttonAmount.onclick =() =>{
                basket.reduceAmountFromItem(item);
            }
            const imgInButton = document.createElement('img')
            imgInButton.src = `img/icons/_.png`;
            buttonAmount.appendChild(imgInButton);
            amountContainer.appendChild(buttonAmount)

            const amount = document.createElement('p')
            amount.innerHTML = `${item.amount}`;
            amountContainer.appendChild(amount)

            const buttonAmount2 = document.createElement('button')
            buttonAmount2.className = 'amount';
            buttonAmount2.onclick = () =>{
                basket.addToBacket(item);

            }
            const imgInButton2 = document.createElement('img')
            imgInButton2.src = `img/icons/+.png`;
            buttonAmount2.appendChild(imgInButton2);

            // amountContainer.appendChild(buttonAmount)
            amountContainer.appendChild(buttonAmount2);
            goodsContainer.appendChild(amountContainer)
            //
            const containerDel = document.createElement('div')
            containerDel.className = 'modalBacket__good__delete';

            const buttonDel = document.createElement('button');
            buttonDel.onclick = function(){
                basket.removeFromBacket(item)
            }
            ////////////////////////
            const imgDel = document.createElement('img');
            imgDel.src = `img/icons/del.png`;
            buttonDel.appendChild(imgDel);
            containerDel.appendChild(buttonDel)
            goodsContainer.appendChild(containerDel)



            modal.querySelector('.modalBacket__good-container').appendChild(goodsContainer)

            ///////////////////////////////////////                  storage
            // // localStorage.basket = item;
            // localStorage.removeItem('basket');
        }
        const buttonFotter = document.createElement('div');
        buttonFotter.className = 'modalBacket__button';

        const buttonOrder = document.createElement('button');
        buttonOrder.innerText = 'buy';
        buttonFotter.appendChild(buttonOrder);
        modal.appendChild(buttonFotter)
        document.querySelector('.headerInfo__backetContainer').appendChild(modal)
    }
        
    
}


export const rendarBacket = function(basketData){
    const backet = document.querySelector('.headerInfo__backetContainer')
    backet.onclick = event =>{
        event.stopPropagation();
    
        const modal = document.querySelector('.modalBacket');
        modal.onclick = event => event.stopPropagation();
        
        
        const isActive = modal.classList.toggle('modalBacket--active');
        if (!isActive) return;
    
        renderBasketContent(basketData)
    }
}    
    rendarBacket(basket)
    
    

