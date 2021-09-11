import React from 'react'
import facebook from  "../Assets/brandlogos/facebook.png";
import google from "../Assets/brandlogos/google.png";
import netflix from "../Assets/brandlogos/netflix.png";
import paypal from "../Assets/brandlogos/paypal.png";
import pandg from "../Assets/brandlogos/pandg.png";
import "../css/BrandValue.css"


const BrandValue = () => {
    return (
        <div className="Brand_value">
            <div className="BrandContainer">
                <ul>
                    <li className="text">Trusted By:</li>
                    <li className="facebook">
                        <img src={facebook} alt="" />
                    </li>
                    <li className="Google">
                        <img src={google} alt="" />
                    </li>
                    <li className="netflix">
                        <img src={netflix} alt="" />
                    </li>
                    <li className="pandg">
                        <img src={pandg} alt="" />
                    </li>
                    <li className="paypal">
                        <img src={paypal} alt="" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BrandValue
