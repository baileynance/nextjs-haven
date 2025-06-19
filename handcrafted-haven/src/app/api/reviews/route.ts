// app/api/reviews/route.ts
import { NextResponse } from 'next/server';
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function POST(req: Request) {
  const { rating, review, productId } = await req.json();

  try {
    await sql`
      INSERT INTO reviews (product_id, rating, review)
      VALUES (DEFAULT, ${rating}, ${review});
    `;
    return NextResponse.json({ message: 'Review submitted' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to submit review' }, { status: 500 });
  }
}
