import { rendarCard, rendarCards } from './render.js';
export class FindService {
    #search = '';
    #os = [];
    #colors = [];
    #memory = [];
    #price = [];
    constructor() { }

    /////search
    get search() {
        return this.#search.toLowerCase();
    }
    set search(value) {
        this.#search = value;
        const items = this.getFilterItem();
        rendarCards(items)

    }
    //////////price
    get price() {
        return this.#price;
    }
    set price(price){
        this.#price = price;
        const items = this.getFilterItem();
        rendarCards(items)
    }
    
    /////colors
    get colors() {
        return this.#colors;
    }
    set colors(color) {
        if (this.#colors.includes(color)) {
            this.#colors = this.#colors.filter(c => color != c)
        } else {
            this.#colors.push(color)
        }

        const items = this.getFilterItem();
        rendarCards(items)
    }

    /////os

    get os() {
        return this.#os;
    }

    set os(os) {
        if (this.#os.includes(os)) {
            this.#os = this.#os.filter(c => os != c)
        } else {
            this.#os.push(os)
        }
        const items = this.getFilterItem();
        rendarCards(items)

    }
    ///////////////memroy
    get memory() {
        return this.#memory;
    }

    set memory(memory) {
        if (this.#memory.includes(memory)) {
            this.#memory = this.#memory.filter(m => memory != m)
        } else {
            this.#memory.push(memory)
        }

        const items = this.getFilterItem();
        rendarCards(items)
    }



    /////////////
    getFilterItem() {
        return items.filter(item => {
            const isSearch = item.name.toLowerCase().includes(this.search);
            if (!isSearch) return false;

            const isPrice = !this.price.length || (item.price >= this.price[0] &&  item.price<= this.price[1])
            if(!isPrice) return false;

            let isColor = true;
            this.colors.forEach(color => {
                if (!(item.color.includes(color))) {
                    isColor = false
                }
            })
            if (!isColor) return false;

            ////////////os
            let isOs = !this.os.length || this.os.includes(item.os);
            if (!isOs) return false

            ////////////memory

            let isMemory = !this.memory.length || this.#memory.includes(item.storage);
            if (!isMemory) return false



            return true;
        })


    }
    ///////////////////
    cancelOptions(){
        this.#os = [];
        this.#colors = [];
        this.#search = '';
        this.#memory = [];
        this.#price = [];
        const items = this.getFilterItem();
        rendarCards(items)
    }








}

const fService = new FindService()