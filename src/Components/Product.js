import React from 'react'

function Product()
{
    return(
        <React.Fragment>
         <div className='container'> 
         <img src={require('./images/toys.png')} class="img-thumbnail" alt="Camera"></img>
         </div>
        </React.Fragment>
    );
}

export default Product;