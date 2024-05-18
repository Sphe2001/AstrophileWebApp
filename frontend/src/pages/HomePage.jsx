
import  React from 'react'
import image1 from '../componets/images/image1.jpg'
import image2 from '../componets/images/image2.jpg'
import image3 from '../componets/images/image3.jpg'
import image4 from '../componets/images/image4.jpg'

const HomePage = () => {
    
    return(
        <div className="bg-gray-100">
  
        <main className="container mx-auto px-6 py-12 mt-1">
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Beauty Clinic</h1>
          </section>
  
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://cdn.shoplightspeed.com/shops/653637/files/40986500/1652x1652x2/algae-peel-off-mask-lavender-lemon-balm-and-acai.jpg" alt="Service 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-lg font-bold text-gray-800">Algae Peel</h2>
                <p className="text-gray-600 mt-2">An algae peel is a skincare treatment that utilizes the properties of algae extracts to exfoliate and rejuvenate the skin.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://skinblissclinics.com/wp-content/uploads/2023/02/the-key-benefits-of-skin-tag-removal.jpg" alt="Service 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-lg font-bold text-gray-800">Skin Tag Removal</h2>
                <p className="text-gray-600 mt-2">Skin tag removal is a medical procedure aimed at removing non-cancerous growths known as skin tags.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://healingwaterslife.com/wp-content/uploads/2023/09/iv-drip-therapy-for-friends-800x533.jpg" alt="Service 3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-lg font-bold text-gray-800">IV Drip</h2>
                <p className="text-gray-600 mt-2">An IV drip is a treatment that involves administering fluids, medications, or nutrients directly into a the bloodstream through a thin tube. </p>
              </div>
            </div>
          </section>
  
          <section className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-600 mb-4">"Absolutely amazing service! I felt so relaxed and pampered."</p>
                <h3 className="text-lg font-bold text-gray-800">Zanele Mabunda</h3>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-600 mb-4">"The best beauty clinic I have ever visited. Highly recommend!"</p>
                <h3 className="text-lg font-bold text-gray-800">Dineo Sebolai</h3>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-600 mb-4">"Professional and friendly staff. I love coming here!"</p>
                <h3 className="text-lg font-bold text-gray-800">Emma Brown</h3>
              </div>
            </div>
          </section>
  
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img src={image1} alt="Gallery 1" className="w-full h-32 object-cover rounded-lg shadow-md" />
              <img src={image2} alt="Gallery 2" className="w-full h-32 object-cover rounded-lg shadow-md" />
              <img src={image3} alt="Gallery 3" className="w-full h-32 object-cover rounded-lg shadow-md" />
              <img src={image4} alt="Gallery 4" className="w-full h-32 object-cover rounded-lg shadow-md" />
            </div>
          </section>
        </main>
  
        <footer className="bg-white shadow-md py-6">
          <div className="container mx-auto px-6 text-center text-gray-600">
            &copy; 2024 Astrophile Nova. All rights reserved.
          </div>
        </footer>
      </div>
  
    );
};

export default HomePage;