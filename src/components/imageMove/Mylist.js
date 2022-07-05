// import React from 'react';

import { useEffect, useState } from "react";

const Mylist = ({data, addItem})=>{

    const [hover, setHover] = useState(false)
   
    const addNewItem = () => {
        addItem(data);
    }

    return(
        <div className='col-lg-2 text-center' onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <img src={data.img}/>
            <p>{data.title}</p>
            <button onClick={addNewItem} style={{ visibility: hover ? "visible": "hidden" }} >Add Button</button>
            {/* <button onClick={addNewItem} className={hover ? "btn-visible": "btn-hidden"}>Add Button</button> */}
        </div>
    );
}

export default Mylist;