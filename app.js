const appContainer = document.getElementById("App");

class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let soda = new Product("Coca-Cola","A tasty beverage for polar bears");
        soda.imgURI = "assets/img/coca-cola.jpg";
        
        return React.createElement(
            Product_Tile,
            { item:soda }
        );
    }
}

ReactDOM.render(
    React.createElement(App),
    appContainer
);