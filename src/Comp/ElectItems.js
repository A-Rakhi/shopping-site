import React from 'react';
import { Link } from 'react-router-dom';
import {StarIcon} from '@heroicons/react/solid'

function ElectItems(props) {
  const {title,image,price,rating} = props.products;
    return (
        <div>
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full h-36" src={image} alt="Mountain"/>
      <div className="px-6 py-4">
         <h2 className="font-bold text-lg mb-2 text-gray-800"><Link to={"/product/"+props.id}>{title} </Link></h2>
         <div className="flex items-center justify-between py-5">  
               <div>     
                    <p className="font-bold uppercase">Price : {price}$</p>
                </div>
              <div className="flex items-center">   
             <p className="text-lg font-medium "> {rating.rate}</p>
             <StarIcon className="text-yellow-500 h-5 w-5" />
             <p>({rating.count})</p>
              </div>
             </div>

        <button className="btn rounded-md px-4 py-2 bg-green-700 text-white hover:bg-green-900 ">Add to Cart</button>
       
      </div>
      
    </div>

        </div>
    );
}

export default ElectItems;