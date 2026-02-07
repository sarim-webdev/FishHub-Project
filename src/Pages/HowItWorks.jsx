import React from 'react'

const HowItWorks = () => {
    return (
        <div>
            <h1 className='howitwork-title'>How It Works – Fresh from Our Waters to Your Kitchen</h1>
            <div className="howitwork-cards-container">
                <div className='howitwork-card'>
                    <h1>Carefully Sourced</h1>
                    <p>
                        We work closely with trusted local fishermen and certified fisheries to source the freshest catch.
                        Every fish is selected based on quality, size, and season—so you always get premium, responsibly sourced seafood.
                    </p>
                </div>

                <div className='howitwork-card'>
                    <h1>Expertly Cleaned & Cut</h1>
                    <p>
                        Each catch goes through strict quality checks for freshness and hygiene.
                        Our experts clean, debone, and cut the fish exactly the way you prefer—whole, fillet, or steaks—ready to cook.
                    </p>
                </div>

                <div className='howitwork-card'>
                    <h1>Freshness Sealed</h1>
                    <p>
                        Your order is vacuum-packed using food-grade materials and packed with ice gel packs.
                        This locking process preserves natural taste, texture, and freshness from source to doorstep.
                    </p>
                </div>

                <div className='howitwork-card'>
                    <h1>Fast & Safe Delivery</h1>
                    <p>
                        We deliver your order quickly using temperature-controlled packaging.
                        Enjoy real-time tracking and doorstep delivery, ensuring your seafood arrives fresh and on time.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default HowItWorks