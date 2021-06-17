// defined product type
class Product {

    price;
    imgURI;
    id;

    constructor(name,description="",price=0.0,id=0,imgURI=""){
        this.name = name;
        this.description = description;
        this.price = price;
        this.id = id;
        this.imgURI = imgURI;
    }

}