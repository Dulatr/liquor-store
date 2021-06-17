class Inventory {
    items = [];
    value = 0.0;

    constructor(_items=[]){
        for (var i = 0; i < _items.length ; i++) {
            this.items.push(_items[i]);
            this.value += !_items[i].price ? 0.0 : _items[i].price;            
        }
    }

    addItem(_item = {}){
        if (_item.constructor == Object){
            this.items.push(_item);  
            this.value += !_item.price ? 0.0 : _item.price;        
        }
    }

    rmItem(_item){
        const location = this.items.indexOf(_item);

        if (location > -1){
            this.items.splice(location,1);         
        }
        else if (location == -1 && this.items.length > 1){
            this.items.splice(1,1);
        }

        this.value -= !_item.price ? 0.0 : _item.price;   
    }
}