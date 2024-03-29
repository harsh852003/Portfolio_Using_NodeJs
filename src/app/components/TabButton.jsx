import React from 'react'

const TabButton = ({active,selectTab,children}) =>{
    const buttonClasses = active
     ? " text-orange-700 border-b border-orange-300 " 
     : "text-orange-400";
    return (
        <div>
            <button onClick={selectTab}>
               <p className= {` mr-3  font-semibold hover:text-orange-700 ${buttonClasses}`}>
               {children}
               </p>
            </button>
            
        </div>
    )
}

export default TabButton