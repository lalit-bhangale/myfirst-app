import React from 'react'

function Footer()
{
    return(
        <React.Fragment>
          <footer id="footerbg" className='p-4'>
            {/* <section className='d-flex justify-content-center'>
                <div className= 'me-5 d-none d-lg-block'>
                    <span>TEST© 2023 Community Brands Intermediate, LLC. All rights reserved</span>
                </div>

            </section> */}
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <h5> About Us</h5>
                        <p>Community Brands is the leading provider of cloud-based software to associations, nonprofits, and K-12 schools. With 2,000 employees serving over 100,000 clients in 30 countries, we help organizations grow stronger and achieve their missions.</p>
                    </div>
                    <div className='col-sm-2'>
                    <h5> Navigation</h5>
                    <p><a herf='#'>Home</a></p>
                    <p><a herf='#'>About</a></p>
                    <p><a herf='#'>Contact Us</a></p>
                    </div>
                </div>
            </div>
          </footer>
        </React.Fragment>
    );
}

export default Footer;