import { rendarCards } from './render.js'

rendarCards(items)

const rendarFilter = function(item){
    const filterContainer = document.querySelector('.filter');
    filterContainer.innerHTML = `
    <div class="accordion">
    <div class="accordion__head">
        <p>Price</p>
        <i class="fas fa-chevron-right"></i>
    </div>
    <div class="accordion__items">
        <div class="accordion__price"></div>
        <div class="accordion__priceValue">
            <span>From: 100 $</span>
            <span>To: 1000 $</span>
        </div>
    </div>
</div>
 <div class="accordion__head">
                    <p>Memory</p>
                    <i class="fas fa-chevron-right"></i>
                </div>
                <div class="accordion__items">
                    <label>
                        <input type="checkbox">
                        32 GB
                    </label>
                    <label>
                        <input type="checkbox">
                        64 GB
                    </label>
                    <label>
                        <input type="checkbox">
                        128 GB
                    </label>
                    <label>
                        <input type="checkbox">
                        256 GB
                    </label>
                    <label>
                        <input type="checkbox">
                        512 GB
                    </label>
                    <label>
                        <input type="checkbox">
                        1 TB
                    </label>
                </div>

    `

    // const accordion = document.createElement('div')
    // accordion.className = 'accordion';
    // filterContainer.appendChild(accordion)

    // const accordion__head = document.createElement('div')
    // accordion__head.className = 'accordion__head';
    // const name = document.createElement('p');
    // accordion__head.appendChild(name)
    // const arrow = document.createElement('i');
    // arrow.className = 'fas fa-chevron-right';
    // accordion__head.appendChild(arrow)

    // accordion.appendChild(accordion__head)

    $(".accordion__price").slider({
        id: 'sliderRange',
        range:true,
        min: 200,
        max: 3000,
        tooltip_split: true,
        selection:'before',
        formatter: val => Array.isArray(val) ? val[0] +'$ : ' + val[1] + '$' : val + '$'
    }).on('change', (e) => {
        const price = document.querySelector('.accordion__priceValue');
        const [priceFrom, priceTo] = e.value.newValue;
        price.innerHTML = `
            <span>From: ${priceFrom} $</span>
            <span>To: ${priceTo} $</span>
        `
    }).on('slideStop', e => {
        console.log(e)
    });
   
}
rendarFilter()


/* <div class="accordion__head">
<p>Price</p>
<i class="fas fa-chevron-right"></i>
</div>

<div class="accordion__items">
<div class="accordion__price"></div>
<div class="accordion__priceValue">
    <span>From: 100 $</span>
    <span>To: 1000 $</span>
</div>
</div> */