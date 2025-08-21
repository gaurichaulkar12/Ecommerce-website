import React, { useContext } from 'react'
import "./productDisplay.css"
import star_icon from "../../assets/star_icon.png"
import star_dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';
const productDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='productDisplay'>
      <div className="productDisplay-left">
        <div className="productDisplay-img-list">
          <img src={product.image} alt="" height="150px" />
          <img src={product.image} alt="" height="150px" />
          <img src={product.image} alt="" height="150px" />
        </div>
        <div className='productDisplay-img'>
          <img className='productDisplay-main-img' src={product.image} alt="" height="300px" />
        </div>
      </div>
      <div className="productDisplay-right">
<h1>{product.name}</h1>
<div className="productDisplay-right-star">
  <img src={star_icon} alt="" height="20px" />
  <img src={star_icon} alt="" height="20px" />
  <img src={star_icon} alt="" height="20px" />
  <img src={star_icon} alt="" height="20px" />
  <img src={star_dull_icon} alt="" height="20px" />
  <p>(130)</p>
</div>
<div className="productDisplay-right-prices">
  <div className="productDisplay-right-price-old">
${product.old_price}
  </div>
  <div className="productDisplay-right-price-new">
    ${product.new_price}
  </div>
  </div>
  <div className="productDisplay-right-description">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, eaque. Amet reiciendis minus modi eum soluta hic autem, rem corrupti quibusdam? Quam omnis saepe et expedita ratione, quasi unde repudiandae.
  </div>
  <div className='productDisplay-right-size'>
    <h1>Select Size</h1>
    <div className="productDisplay-right-sizes">
      <div>S</div>
      <div>M</div>
      <div>L</div>
      <div>XL</div>
      <div>XXL</div>
    </div>
  </div>
  <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
  <div className="productDisplay-right-category">
    <span>Category:<span>Women ,T-Shirt , Crop Top</span></span>
  </div>
  <div className="productDisplay-right-category">
    <span>Tags:<span>Modern ,Latest , Trend Shorts</span></span>
  </div>
</div>
      </div>
    
  )
}

export default productDisplay