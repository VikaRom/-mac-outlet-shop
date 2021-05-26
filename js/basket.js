import {rendarBacket} from './render.js';

 class Basket{
    constructor(){
        this.goodsList =[];
        this.totalPrice = 0;
        this.totalAmount = 0;
    }

    reduceAmountFromItem(item){
        const index = this.goodsList.findIndex(el => el.id === item.id);
        if(this.pizzaList[index].amount == 1){
            return;
        }
        if(this.pizzaList[index].amount > 1 && this.pizzaList[index].amount <= 4){
            this.goodsList.splice(index,1)
        }
        this.createTotal()
    }



    removeFromBacket(item){
        const index = this.goodsList.findIndex(el => el.id === item.id);
        if(index === -1){
            return;
        }
        this.goodsList.splice(index,1)
        this.createTotal()
       
    }


    addToBacket(item){
        const itemFromList = this.goodsList.find(el => el.id === item.id);

       if(itemFromList){
        itemFromList.amount < 4 && itemFromList.amount++;
       }else{
           const newItem = {
                img: item.imgUrl,
                id: item.id,
                name: item.name,
                price: item.price,
                amount: 1
           }
           this.goodsList.push(newItem)
       }
       this.createTotal()

       rendarBacket(this)
    }

    createTotal(){
        this.totalAmount = 0;
        this.totalPrice = 0;
        for(let i = 0; i < this.goodsList.length; i++ ){
            this.totalAmount += this.goodsList[i].amount;
            this.totalPrice += this.goodsList[i].price * this.goodsList[i].amount;
        }
    }
}

export const basket = new Basket()