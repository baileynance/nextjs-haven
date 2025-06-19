'use client';

type SubmitButtonProps = {
  review: string;
  rating: number;
  onSuccess?: () => void;
};

export default function SubmitButton({ review, rating, onSuccess }: SubmitButtonProps) {
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/reviews/route", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating, review }),
      });

      if (!res.ok) throw new Error('Failed to submit review');

      onSuccess?.();
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Something went wrong');
    }
  };

  return (
    <div className="flex justify-end gap-3">
      <button
        onClick={handleClick}
        className="text-sm text-blue-600"
        type="button"
      >
        Submit
      </button>
    </div>
  );
}
