import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import ProductList from "./ProductList";


function NavSidebar() {const [category, setCategory] = useState([]);

    useEffect(() => {
      fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((data) => setCategory(data));
    }, []);
  
    return (
      <div className=" container mx-auto">
        <div className="w-48">
          <div className=" bg-gray-100  p-5">
            <h3 className="uppercase font-bold underline">Categories</h3>
             <div className='py-3'>      
              <ul>
              <Link to='/electrotlist'><li className="capitalize text-lg">{category[0]}</li> </Link>
              <li>
                <div className="">
                  <div className="dropdown inline-block relative">
                    <div className="inline-flex items-center">
                      <span className="capitalize text-lg">{category[1]}</span>
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 10 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                      </svg>
                    </div>
                    <ul className=" ">
                      <li className="text-gray-900 hover:underline  capitalize text-lg">
                        <Link
                          className="text-gray-900"
                          href="#"
                        >
                          One
                        </Link>
                      </li>
                      <li className="text-gray-900 capitalize text-lg">
                        <Link
                          className="text-gray-900"
                          href="#"
                        >
                          Two
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            </div>

            {category.map((c) => (
              <li>{c}</li>
            ))}
          </div>
  
          
        </div>
      </div>
    );
  }
  
export default NavSidebar;