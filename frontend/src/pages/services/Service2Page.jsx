import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Service2Page = () => {
    const [formData, setFormData] = useState({
        phoneNumber: '',
        firstName: '',
        lastName: ''
      });
     
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:8081/api/bookings', formData);
          console.log('Response:', response.data);
          navigate('/services');
          alert('Booking Request Sent. We will contact you in order to finalize your appointment date!');
        } catch (error) {
          alert('Booking failed');
          console.error('Error:', error);
        }
      };
    return (
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">Skin Tag Removal</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What is a Skin Tag Removal</h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                Skin tag removal is a medical procedure aimed at removing non-cancerous growths known as skin tags.
                While skin tags are generally harmless, they can sometimes cause discomfort or cosmetic concerns
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="https://www.avone.sg/wordpress/wp-content/uploads/2022/09/mole-and-skin-tag-removal-how-it-works-and-the-healing-process.webp"
              alt="image"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                    At Astrophile Nova, we understand the impact that skin tags can have on your confidence and self-esteem. 
                    Let me share with you why opting for a skin tag removal with us is the best choice for achieving the clear, smooth skin you deserve:
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">Enhanced Comfort</strong> Skin tags can be bothersome, especially when they rub against clothing or jewelry. 
                      Our gentle and effective skin tag removal procedures ensure that you'll experience relief from discomfort and irritation, allowing you to move freely and comfortably.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">Boosted Confidence</strong> Say goodbye to feeling self-conscious about unsightly skin tags. 
                      Our skilled dermatologists utilize advanced techniques to remove skin tags safely and effectively, giving you the confidence to showcase your skin proudly without any blemishes or distractions.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">Quick and Convenient</strong> Our skin tag removal procedures are quick, minimally invasive, and virtually painless. 
                      With minimal downtime required, you can schedule your appointment during your lunch break and return to your daily activities with newfound confidence and peace of mind.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">Detoxification</strong> Our IV drips are formulated with detoxifying agents which support the body's natural detoxification processes. 
                      By aiding in the elimination of toxins and metabolic waste products, our drips may promote clearer, healthier-looking skin
                    </span>
                  </li>
                </ul>
                <p className="mt-8">
                Ready to say goodbye to skin tags and hello to radiant, flawless skin? 
                Schedule your skin tag removal appointment with us today and take the first step towards a brighter, more confident you at Astrophile Nova!
                </p>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <label htmlFor="firstName" className="sr-only">First Name</label>
                <input
                        name="firstName"
                        type="text"
                        required
                        className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <label htmlFor="lastName" className="sr-only">Last Name</label>
                     <input
                        name="lastName"
                        type="text"
                        required
                        className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    <label htmlFor="phoneNumber" className="sr-only">Phone Number</label>
                    <input
                        name="phoneNumber"
                        type="text"
                        required
                        className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Phone Number"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <button type="submit" className="group relative flex w-full justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Book Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Service2Page
