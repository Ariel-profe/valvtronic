"use client";

import { useState } from "react";

export const SearchBar = () => {

    const [isOpen, setIsOpen] = useState(false);

return (
    <div className="flex items-center">
        <div className="flex space-x-1">
            <input type="text" 
            className={isOpen ? `block w-full px-2 text-primary-blue border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40` : 'hidden'}
            placeholder="Buscar..."
            />
            <button className="p-1 border border-primary-blue text-primary-blue rounded-full " onClick={() => setIsOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
        </div>
    </div>
);
}