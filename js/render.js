export const rendarCard = function(item){
    const container = document.createElement('div');
    container.className = 'container__card';


    const buttonLike = document.createElement('div');
    buttonLike.className = 'container__card__favorites'
    const imgFavorites = document.createElement('i')
    imgFavorites.className = 'far fa-heart';
    // imgFavorites.src = `<i class="far fa-heart"></i>`;
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
    checkInstock.className = 'far fa-check-circle';
    const textP = document.createElement('p')
    textP.innerText = `${item.orderInfo.inStock} left in stock`;//????????????????????????????????????
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
    button.disabled =  item.orderInfo.inStock < 1;
    buttonContainer.appendChild (button);
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

export const rendarCards = function(arr=items){
    let container = document.querySelector('.container')
    container.innerHTML = '';
    for(let i = 0; i<arr.length; i++){
        try {
            container.appendChild(rendarCard(arr[i]))
        } catch(e){
            console.log(arr[i])
        }
    }
   
}