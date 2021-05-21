import { rendarCards } from './render.js';
import { slider } from './slider.js'



rendarCards(items)

class Filter {
    constructor() {
        this.filterData = [
            {
                name: 'Price',
                options: this.initialPrice
            },
            {
                name: 'Color',
                options: this.initialColor
                // options: ['Red', 'Black', 'Green', 'white']
            },
            {
                name: 'Memory',
                options: this.initialMemory
                //options: ['32', '64', '128', '512']
            },
            {
                name: 'OS',
                options: this.initialOS
                //options: ['IOS', 'MAC OS', 'TV OS', 'Watch OS']
            },
        ]

        this.rendarFilters(this.filterData)

        //console.log(this.initialPrice)
    }

    get initialPrice() {                                                                   /// getter for prise
        const sortedArr = [...items].sort((el1, el2) => el1.price - el2.price)
        return [sortedArr[0].price, sortedArr[sortedArr.length - 1].price]
    }

    get initialColor() {                                                                    /// getter for color
        const newArr = [];
        [...items]
            .map(el => el.color)
            .forEach(colors => {
                const filterdColors = colors.filter(color => !newArr.includes(color))
                newArr.push(...filterdColors)
            })
        return newArr
    }

    get initialOS() {                                                                       /// getter for os
        const newArr = [];
        const sortedArr = [...items].map(el => el.os);
        sortedArr.forEach(os => {
            let isColorInclude = newArr.includes(os);
            if (isColorInclude) {
                return;
            }
            newArr.push(os);
        })
        //console.log(newArr);
        return newArr;
    }

    get initialMemory() {                                                                   /// getter for memory
        const newArr = [];
        const sortedArr = [...items].map(el => el.storage);
        sortedArr.forEach(storage => {
            let isStorageInclude = newArr.includes(storage);
            if (isStorageInclude) {
                return;
            }
            newArr.push(storage);
        })
        //console.log(newArr);
        return newArr;
    }


    rendarFilter(item) {
        const container = document.createElement('div');
        container.className = 'accordion';

        const head = document.createElement('div')
        head.className = 'accordion__head';
        head.innerHTML = `
        <p>${item.name}</p>
        <i class="fas fa-chevron-right"></i>
    `;
        head.onclick = function () {
            head.classList.toggle('accordion__head--active')
            const isActive = accordion_items.classList.toggle('accordion__items--active')
            head.querySelector('i').className = isActive ? 'fas fa-chevron-down' : 'fas fa-chevron-right'
        }
        container.appendChild(head);

        const accordion_items = document.createElement('div');
        accordion_items.className = 'accordion__items';

        if (item.name === 'Price') {
            accordion_items.innerHTML = ` 
            <div class="accordion__price"></div>
            <div class="accordion__priceValue">
                <span>From:${item.options[0]}$</span>
                <span>To:${item.options[1]}$</span>
            </div>
        `
        } else {
            item.options.forEach(option => {
                const label = document.createElement('label');
                label.innerText = option;

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                label.prepend(checkbox);

                accordion_items.appendChild(label);
            })
        }


        container.appendChild(accordion_items);
        return container;
    }

    rendarFilters(arr) {
        const filterContainer = document.querySelector('.filter');
        filterContainer.innerHTML = '';
        arr.forEach(el => {
            const filter = this.rendarFilter(el);
            filterContainer.appendChild(filter);
        })

        $(".accordion__price").slider({
            id: 'sliderRange',
            range: true,
            min: this.filterData[0].options[0],
            max: this.filterData[0].options[1],
            tooltip_split: true,
            selection: 'before',
            formatter: val => Array.isArray(val) ? val[0] + '$ : ' + val[1] + '$' : val + '$'
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

}
const filter = new Filter()

$('.single-item').slick({
    autoplay: true,
    infinite: true,
    arrows: true,
});



const search = function () {
    let search = document.querySelector('.search')
    search.addEventListener('input', event => {
        const result = items.filter(pizza => pizza.name.toLowerCase().includes(event.target.value.toLowerCase()))

        rendarCards(result)
    })
}
search()




const searchFilter = document.querySelector('.ButtonForFolterFirst')
searchFilter.onclick = function (event) {

    event.stopPropagation();
    const filter = document.querySelector('.filter')
    filter.classList.toggle('filter--active')
}
