import React from 'react'

export default function Product(props) {
    const mystyle = {
        
        backgroundImage: 
        "url(" + props.myData.image + ")",
    }
  return (

   
    <>
        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="product__item">
                                <div class="product__item__pic set-bg" style={mystyle}  data-setbg="img/product/product-2.jpg">
                                    <ul class="product__hover">
                                        <li><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                                        <li><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a>
                                        </li>
                                        <li><a href="#"><img src="img/icon/search.png" alt=""/></a></li>
                                    </ul>
                                </div>
                                <div class="product__item__text">
                                    <h6>{props.myData.category}</h6>
                                    <a href="#" class="add-cart">+ Add To Cart</a>
                                    <div class="rating">
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                    </div>
                                    <h5>{props.myData.price}</h5>
                                    <div class="product__color__select">
                                        <label for="pc-4">
                                            <input type="radio" id="pc-4"/>
                                        </label>
                                        <label class="active black" for="pc-5">
                                            <input type="radio" id="pc-5"/>
                                        </label>
                                        <label class="grey" for="pc-6">
                                            <input type="radio" id="pc-6"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

    </>
  )
}
