import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Service1Page = () => {
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
                <p className="text-base font-semibold leading-7 text-indigo-600">IV Drip</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What is IV Drip</h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">
                    An IV drip is a treatment that involves administering fluids, medications, or nutrients directly into a the bloodstream through a thin tube. 
                    This method allows for rapid delivery of substances into the bloodstream, bypassing the digestive system and allowing for more immediate effect.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="https://assets-global.website-files.com/619739b130344eef6175f587/630dde033834fe38d1f0110a_Myers-Cocktail-IV-Therapy-p-500.jpg"
              alt="image"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                    At Astrophile Nova, we're dedicated to helping you feel your best, inside and out. 
                    Let me walk you through why getting an IV drip with us is an experience you won't want to miss:
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">Hydration</strong> Proper hydration is essential for maintaining healthy skin. 
                      Our IV drips contains fluids and electrolytes that can help hydrate the body from within, 
                      contributing to improved skin hydration, elasticity, and overall appearance.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">Improved Circulation</strong> Our IV drips promote hydration and contain vasodilators that help improve blood circulation. 
                      Enhanced circulation can deliver oxygen and nutrients more efficiently to the skin cells, promoting a healthy complexion and a natural glow.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <span>
                      <strong className="font-semibold text-gray-900">Stress Reduction</strong> Our IV drips contain calming agents to help reduce stress levels and promote relaxation. 
                      Chronic stress can contribute to skin issues such as acne flare-ups, sensitivity, and dullness, so managing stress can indirectly benefit skin health.
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
                    Ready to experience the transformative power of IV drip therapy? 
                    Book your <b>appointment</b> with us today and discover a new level of vitality and wellness at Astrophile Nova!
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
                        value={formData.phoneNumber}
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
export default Service1Page
