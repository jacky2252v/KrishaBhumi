import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between items-center m-3 mx-6 mr-12'>
                <div>
                    <img src="/img/logolight.png" alt="" height={100} width={100} />
                </div>
                <div>
                    <button>Get to know us</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
