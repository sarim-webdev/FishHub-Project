import React from 'react'

const HowItWorks = () => {
  return (
    <div>
        <h1 className='howitwork-title'>How It Works – Fresh from Our Waters to Your Kitchen</h1>
         <div className="howitwork-cards-container">
        <div className='howitwork-card-one'>
            <h1>Source with Care</h1>
            <p>We partner directly with trusted, local fishing communities and sustainable fisheries along India’s coastline. 
            Every catch is selected based on seasonality, size, and quality—ensuring only the finest fish make it to your plate.</p>
        </div>
        <div className='howitwork-card-two'>
            <h1>Inspect & Prepare</h1>
            <p>Within hours of the catch, each fish undergoes a stringent 3-point quality check:
            Freshness Verification – Clear eyes, firm flesh, ocean-fresh smell
            Hygiene Processing – Thoroughly cleaned, gutted, and descaled in our FSSAI-approved facility
            Custom Cutting – Hand-cut and portioned as per your preference (whole, fillets, or steaks)</p>
        </div>
        <div className='howitwork-card-three'>
            <h1>Pack with Precision</h1>
            <p>Your order is then carefully sealed using:
            Food-grade vacuum packing to lock in freshness
            Reusable ice gel packs to maintain optimal temperature
            Insulated, eco-friendly boxes designed to stay cold for hours</p>
        </div>
        <div className='howitwork-card-four'>
            <h1>Deliver with Speed</h1>
            <p>Our dedicated logistics team ensures swift, contactless delivery:
            Express Delivery – Within 90 minutes in metro cities
            Live Tracking – Real-time updates from dispatch to doorstep
            Temperature-Controlled – From our hub to your home</p>
        </div>
        </div>
    </div>

  )
}

export default HowItWorks