import React, { useState, useEffect } from 'react';
//import axios from 'axios'
import ElectItems from './ElectItems';

function ElectrotList() {
    const [allData, setAllData]= useState([]); 
    const [visible, setVisible]= useState(4);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res => res.json())
        .then((json) => setAllData(json))
        .catch(err=>console.log(err));
        }, [])
    
        const loadMore =()=>{
          setVisible(visible + 4)
        }
    
    return (
      <div className="py-12 ">
        <h1 className="text-5xl font-bold">Electronics</h1>
        <hr style={{borderTop: '3px solid gray'} }/>
        <div className="pt-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {
                 allData.slice(0,visible).map((item) =>
                 (
                    <ElectItems
                     key ={item.id}
                     id={item.id}
                     products= {item} 
                    />
                 ))
               }
            </div>
               <br/>

            <div>
            {
                 visible < allData.length && (
                   <button onClick={loadMore} className="px-10 py-3 rounded-md tracking-wider bg-blue-600 uppercase text-white hover:bg-blue-800 font-semibold">see more</button>
                 )
               }
            </div>
              
        </div>
    );
}

export default ElectrotList;