import  React, { useState , useEffect } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'

const images = [
    'https://static.showit.co/800/9sqwlu4uTMWPBR74b50uqg/136980/image4_1.jpg',
    'https://th.bing.com/th/id/R.bafeb7c8a2a60a0959d062be792f283e?rik=F1dn7LhLY0LFBw&pid=ImgRaw&r=0',
    'https://www.osmosqueteiros.com.br/system/banners/6403/original/banner_ofertas_2_-_2023-03-03T143832.663.jpg?1677865136'
];

const AboutPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);
    return(
            <div>
                <div className="hero w-full min-h-[40vh] bg-cover bg-center flex items-center justify-end text-antiquewhite" style={{backgroundImage: "linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url('https://k-beautyfactory.com/wp-content/uploads/2022/11/algae_peel_training_640_square-min.jpg')"}}>
                    
                </div>

                <div className="benefit-text text-center max-w-2xl mx-auto py-5">
                    <h2 className="text-2xl font-semibold mb-2">About Us</h2>
                    <p className="mb-4">
                        Healthy aging and looking young on the outside begins on the inside! For even the most delicate skin, we supply you organic beauty products and natural and organic skin care solutions that actually show results.
                        Our company's goal is to offer an honest approach to beauty, and we take great pride in that. We employ safe and efficient skin care chemicals that enhance your skin's natural biology to deliver long-lasting, clinically proven benefits.
                    </p>
                    
                    <h2 className="text-2xl font-semibold mb-2">What Can It Do For You?</h2>
                    <div className="benefit-text mb-4">
                        Increased cell renewal<br/>
                        Intense exfoliation<br/>
                        Reduction and elimination of hyper pigmentation and spots.<br/>
                        Tightens pores and reduces acne<br/>
                        Boosts skin radiance, unifies and matifies the complexion.<br/>
                        Reduces dark circles under the eyes.<br/>
                        Improves sun damaged skin by reducing wrinkles and improves the appearance of sagging skin.<br/>
                        Improves blood circulation.<br/>
                        Increased cell renewal<br/>
                        Smooths the skin.<br/>
                    </div>
                </div>

                <div className="slideshow relative w-full h-[400px] overflow-hidden">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`slide absolute top-0 left-0 w-full h-[80%] bg-cover bg-center opacity-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : ''}`}
                            style={{ backgroundImage: `url(${image})` }}
                        ></div>
                    ))}
                </div>
                <footer className="bg-white shadow-md py-6">
                    <div className="container mx-auto px-6 text-center text-gray-600">
                        &copy; 2024 Astrophile Nova. All rights reserved.
                    </div>
                </footer>
            </div>
    );
};
export default AboutPage;