import React from "react";

const About = () => {
  return (
  <section className=" bg-gradient-to-br flex items-center justify-center p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
      
        <div className= "h-96 w-full md:w-1/2 bg-black rounded-xl">
          <img
            src="/image/Pink_Cute_Simple_Flower_Shop_Circle_Logo__1_-removebg-preview (1).png"
            alt="Our Team"
            className="rounded-lg shadow-lg object-contain w-full h-full max-h-[500px]"
          />
        </div>

  
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-black mb-4">About Saydalia</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Saydalia is more than just an online pharmacy – we’re your health partner. 💊  
            We deliver trusted medications and wellness products to your doorstep quickly and safely.
          </p>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Our team of licensed professionals ensures you always get the best care. Whether it’s pain relief, vitamins, or skincare, we’ve got you covered.
          </p>
          <p className="mt-4 font-semibold text-black">Your health is our priority.</p>
        </div>
      </div>
    </section>
  );
  
};

export default About;
