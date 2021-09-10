import { Button } from '@material-ui/core'
import React from 'react'
import '../css/ProductCustom.css'

const ProductCustom = () => {
    return (
        <div className="product_customize ">
          <div className="Product_container">
              <div className="heading">
                  <h1>We Put all in the effect</h1>
              </div>
              <div className="othercontaint">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio harum vitae in, corporiseos maxime nam.</p>
                  <Button variant="primary">click here</Button>
              </div>
          </div>
        </div>
    )
}

export default ProductCustom
