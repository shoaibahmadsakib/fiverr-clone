import { Button } from '@material-ui/core'
import React from 'react'
import '../css/ProductCustom.css'

const ProductCustom = () => {
    return (
        <div className="product_customize ">
          <div className="Product_container">
              <div className="text">
                  <p className="p1">We Put all in the effect</p>
                  <p className="p2">Make an incredible logo <span>in minutes</span> </p>
                  <p className="p3">Pre-designed by top talent. Just add your touch.</p>
                  <Button className="button">Try Fiverr logo maker</Button>
              </div>
              <div className="othercontaint">
              </div>
          </div>
        </div>
    )
}

export default ProductCustom
