import React from 'react'

const AboutPage = () => {
  return (
    <div className=''>
          <div className='container max-w-screen-xl mx-auto xl:px-10 bg-gradient-to-r mb-[100px] pb-10 from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>

              <div className="py-32 flex flex-col  justify-center items-center gap-8 ">
                  {/* texts left side */}
                  <div className="text-center space-y-7">
                      <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug text-[#252525]'>About <span className='text-gsecond'>Us</span></h2>
                     
                  </div>
              </div>


              
          <div className= "container  mx-auto xl:px-24  flex flex-wrap ">
              {/* // image right side */}

                 <p className=''>
                  Welcome to Foodie, where we redefine the dining experience with a passion for flavor and a commitment to health. Nestled in the heart of london, Foodie is more than just a restaurant; its a culinary sanctuary where every dish tells a story of wholesome goodness and culinary innovation.

                  At Foodie, we believe that eating well should never mean sacrificing taste. Our menu is a celebration of fresh, locally-sourced ingredients combined with culinary expertise to create dishes that not only tantalize the taste buds but also nourish the body and soul. From vibrant salads bursting with seasonal produce to hearty grain bowls packed with protein and fiber, every bite at Foodie is a step towards a healthier, happier you.

                  Our journey began with a simple yet profound idea: to prove that healthy food can be as indulgent and satisfying as it is nourishing. Drawing inspiration from global culinary traditions and the abundance of nature, our chefs craft each dish with care and creativity, ensuring that every ingredient shines in its purest form. Whether youre a dedicated vegan, a passionate carnivore, or somewhere in between, theres something for everyone at Foodie.

                  But our commitment to health extends beyond the plate. We believe in fostering a sense of community and connection, where every guest feels welcomed and valued. Our warm and inviting atmosphere invites you to linger over a meal with friends and family, to share stories and laughter, and to savor the simple joys of good food and good company.

                  At Foodie, we also take pride in our sustainable practices, striving to minimize our environmental footprint while maximizing flavor and nutrition. From composting food waste to sourcing ingredients from local farmers and artisans, we are dedicated to supporting our community and our planet.

                  Whether youre stopping by for a quick lunch, a leisurely dinner, or just a cup of coffee and conversation, we invite you to join us on a culinary adventure where every dish tells a story and every meal is an opportunity to nourish body, mind, and spirit. Welcome to Foodie – where healthy eating never tasted so good.
                 </p>

                 
              </div>
          </div>
    </div>
  )
}

export default AboutPage