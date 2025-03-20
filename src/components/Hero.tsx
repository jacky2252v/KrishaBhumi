import React from 'react'

const Hero = () => {
    return (
        <div>
            <div className="flex justify-center items-center snap-x">
                <div className="snap-center">
                    <img src="/img/imgOne.jpg" alt="Image 1" />
                </div>
                <div className="snap-center">
                    <img src="/img/imgTwo.jpg" alt="Image 2" />
                </div>
                <div className="snap-center">
                    <img src="/img/imgThree.jpg" alt="Image 3" />
                </div>
                <div className="snap-center">
                    <img src="/img/imgFour.jpg" alt="Image 3" />
                </div>
            </div>
        </div>
    )
}

export default Hero
