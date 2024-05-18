import React, { useState, useEffect } from 'react'
import List from '../componets/List';


const ServicesPage = () => {
    const [services, setServices] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:8081/api/services');
        if (!res.ok) {
          throw new Error('Failed to fetch services');
        }
        const data = await res.json();
        setServices(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
    return(
        <div className="font-sans bg-gray-100 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid gap-8 lg:grid-cols-3">
                    {services.map(ser => (
                        <div key={ser.id} className="card-container">
                            <List props={ser} />
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default ServicesPage;