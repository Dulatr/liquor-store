// keep a single instance of an inventory with the DAO
// should never be accessing the inventory directly, just through methods
class DAO {
    constructor(_items = []) {
        this.inventory = new Inventory(_items);
    }

    getValue() {
        return this.inventory.value;
    }

    addItem(_item) {

        if (this.inventory.items.some((x) => x.name == _item.name)) {
            var obj = this.inventory.items.find((x)=>x.name == _item.name);
            obj.count++;
            this.inventory.value += obj.price;
            return;
        }

        this.inventory.items.push(_item);  
        this.inventory.value += !_item.price ? 0.0 : _item.price;        
    }

    rmItem(_item){
        const location = this.inventory.items.indexOf(_item);
        
        if (location > -1){
            this.inventory.items.splice(location,1);         
        }
        else if (location == -1 && this.inventory.items.length > 1){
            this.inventory.items.splice(1,1);
        }

        this.inventory.value -= !_item.price ? 0.0 : _item.price;   
    }

    itemSold(_item) {
        if (!this.inventory.items.some((x) => x.name == _item.name)) {
            console.log('item not found');
            return;
        }
        else {
            var obj = this.inventory.items.find((x) => x.name == _item.name);
            obj.count > 0 ? obj.count-- : obj.count = 0;
            obj.count > 0 ? this.inventory.value -= obj.price : this.value -= 0.0;
        }
    }
}