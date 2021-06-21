// root product display
class Product_Tile extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return React.createElement(
            "div",
            { className:"product-tile" },
            React.createElement('img',{ src:this.props.item.imgURI }),
            React.createElement('h1',{className:"item-name"},this.props.item.name),
            React.createElement('p',{className:"description"},this.props.item.description),
            React.createElement('h4',{className:"price"},this.props.item.price),
            React.createElement('h5',{className:"quantity"},this.props.item.count)
        );
    }
}