export async function handleSubmit() {
    try {
        // Call your API endpoint (adjust URL as needed)
        const res = await fetch('/api/reviews', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ rating, comment, productId }),
        });
    
        if (!res.ok) {
          throw new Error('Failed to submit review');
        }
}