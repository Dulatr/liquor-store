const appContainer = document.getElementById("App");

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {product_list:testdata};
        this.DAO = new DAO(testdata);

        this.addItem = this.addItem.bind(this);
    }

    addItem(_item){
        this.DAO.addItem(_item);
        this.setState({
            product_list:this.DAO.getItems()
        });
    }

    render() {
        let soda = new Product("Coca-Cola","A tasty beverage for polar bears");
        soda.imgURI = "assets/img/coca-cola.jpg";
        
        return React.createElement(
            'div',
            null,
            React.createElement('button',{onClick:()=>this.addItem(cola)},"add soda"),
            React.createElement(Product_Tile, { item:this.state.product_list[0]}),
            React.createElement('button',{onClick:()=>this.addItem(cleaner)},"add cleaner"),
            React.createElement(Product_Tile, { item:this.state.product_list[1]}),
            React.createElement('button',{onClick:()=>this.addItem(towels)},"add towels"),
            React.createElement(Product_Tile, { item:this.state.product_list[2]}),            
        );
    }
}

ReactDOM.render(
    React.createElement(App),
    appContainer
);