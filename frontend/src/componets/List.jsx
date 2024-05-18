import React from "react";


const List = ({ props }) => {
    const href = `/${props.url}`
	return (
		
        <div
            key={props.id}
            className="my-4 transition duration-300 ease-in-out transform hover:scale-105 hover:ring-4 shadow-lg shadow-blue-500/50 w-90 h-96"
            >
            <a href={href} className="w-full h-full block group">
                <div className="relative w-full h-3/4 overflow-hidden rounded-lg bg-gray-200">
                <img
                    src={props.image}
                    alt="Service Image"
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300 ease-in-out"
                />
                </div>
                <div className="mt-4 p-5 h-1/4 flex flex-col justify-between">
                <h3 className="text-sm text-gray-700">{props.type}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">R {props.price}</p>
                </div>
            </a>
        </div>
           
	);
}

export default List;