import React, {Component} from "react";
import classes from './product.module.css'

class Product extends Component{

    constructor(props) {
        super(props);
        this.state = {
          productImage: this.ProductData.colorOptions[0].imageUrl,
          activeButton:0
        };
      }
    

    ProductData ={
        title: 'FitBit 19 - The Smartest Watch',
        description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
        colorOptions: [
            {
                styleName: 'Black Strap',
                imageUrl: 'https://imgur.com/iOeUBV7.png'
            },
            {
                styleName: 'Red Strap',
                imageUrl: 'https://imgur.com/PTgQlim.png'
            },
            {
                styleName: 'Blue Strap',
                imageUrl: 'https://imgur.com/Mplj1YR.png'
            },
            {
                styleName: 'Purple Strap',
                imageUrl: 'https://imgur.com/xSIK4M8.png'
            },
        ],
        featureList: [
            "Time", "Heart Rate"
        ]
    }
    
    class=classes.btn
   

    ChangeImage(e,pos){
        console.log("be")
        this.setState(prevState => ({
            productImage: this.ProductData.colorOptions[pos].imageUrl,
            activeButton: pos
          }));
        console.log(this.state.activeButton)
    }

   

    

    render(){
        // console.log(this.state.activeButton)
        const colors=this.ProductData.colorOptions.map((item,pos)=>{
            return(
                <button className={pos===this.state.activeButton?classes.btnactive:classes.btn}   onClick={(event)=>{this.ChangeImage(event,pos)}}>
                    <img className={classes.img} src={item.imageUrl} alt={item.styleName}></img>
                </button>
            );
        })

        console.log("rendered")
        return(
        <div className={classes.container}>
            <div className={classes.box}>
                <img src={this.state.productImage} className={classes.productImage} >

                </img>
            </div>
            <div className={classes.box}>
                <h1>{this.ProductData.title}</h1>
                <p>{this.ProductData.description}</p>
                <div>Select Color</div>
                <div>
                    <span>
                       {colors}
                    </span>
                </div>

            </div>
        </div>
    );
        }
}
export default Product