import React from "react";


const List = ({ props }) => {
    const href = `/${props.url}`
	return (
		
        <div key={props.id} className="my-4 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
    <a href={href} className="w-full block group">
        <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-8 xl:aspect-h-7">
            <img
                src={props.image}
                alt="Service Image"
                className="object-cover object-center h-full w-full group-hover:opacity-75 transition-opacity duration-300 ease-in-out"
                
            />
        </div>
        <div className="mt-4 p-5">
            <h3 className="text-sm text-gray-700">{props.type}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">R {props.price}</p>
        </div>
    </a>
</div>
           
	);
}

export default List;