class Inventory {
    items = [];
    value = 0.0;

    constructor(_items=[]){
        for (var i = 0; i < _items.length ; i++) {
            this.items.push(_items[i]);
            this.value += !_items[i].price ? 0.0 : _items[i].price;  
        }
    }
}