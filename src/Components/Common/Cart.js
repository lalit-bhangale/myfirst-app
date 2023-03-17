import React from 'react'

function Cart()
{
    return(
        <React.Fragment>
         <div className='container'> 
            <img src={require('./Cart.png')} ></img>
         </div>
        </React.Fragment>
    );
}

export default Cart;