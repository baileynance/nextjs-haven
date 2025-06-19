"use client"

import { useState } from 'react';
import SubmitButton from "@/app/ui/products/submit-button"

type Props = {
    isOpen: boolean;
    onCloseAction: () => void;
  };
  
  export default function ReviewDialog({ isOpen, onCloseAction }: Props ) {
    const [rating, setRating] = useState(5);
    const [review, setReview] = useState('');

    if (!isOpen) return null;
  
    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white w-full max-w-md rounded-lg p-6 shadow-lg relative">
          <h2 className="text-lg font-bold mb-4">Leave a Review</h2>
  
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full rounded border border-gray-300 px-3 py-2"
            >
              {[5, 4, 3, 2, 1].map((star) => (
                <option key={star} value={star}>
                  {star} Star{star > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>
  
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows={4}
              className="w-full rounded border border-gray-300 px-3 py-2 resize-none"
            />
          </div>
  
          <div className="flex justify-end gap-3">
            <button
              onClick={onCloseAction}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <SubmitButton review={review} rating={rating} />
          </div>
        </div>
      </div>
    );
  }