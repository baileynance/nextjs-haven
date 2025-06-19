export async function handleSubmit(rating: number, review: string) {
  try {
    const res = await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rating, review }),
    });

    if (!res.ok) throw new Error('Failed to submit review');
  } catch (error) {
    console.error(error);
  }
}
