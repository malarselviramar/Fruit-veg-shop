import React from "react";
import { Link } from 'react-router-dom';


export function ProductBtn(){
    return(
        <div>
            <Link to='./products'>
                <button type="button" className="btn btn-lg" style={{backgroundColor :"maroon", color:'white', borderRadius :'10px'}}>
                    Explore Product</button>

            </Link>
        </div>
    )
}