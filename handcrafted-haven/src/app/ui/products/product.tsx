"use client";

import { useState } from 'react';
import ReviewDialog from '@/app/ui/products/review-dialog';

type ProductProps = {
    product: {
      id: number;
      name: string;
      image: string;
      price: number;
      description: string;
    };
  };

export default function Product({ product }: ProductProps) {

    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow flex flex-col md:flex-row gap-6">
                <img
                src={product.image}
                alt={product.name}
                className="w-full md:w-1/2 h-auto object-cover rounded"
                />
                <div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <p className="text-xl text-gray-800 mb-4">{product.price}</p>
                <p className="text-gray-700">{product.description}</p>
                <button className="mt-6 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500" 
                    onClick={() => setOpen(true)}
                >
                    Review
                </button>
                <ReviewDialog isOpen={open} onCloseAction={() => setOpen(false)} />
                </div>
            </div>
        </div>
    )
} 