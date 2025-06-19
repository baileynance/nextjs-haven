import postgres from 'postgres';
import {
    ProductTableType,
    ReviewTableType,
    UserTableType
} from "@/app/lib/definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchProductList() {
    try {
      const data = await sql<ProductTableType[]>`
        SELECT products.id, products.name, products.description, products.image, products.price
        FROM products`;

      return data;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch product list');
    }
}

export async function fetchReviews() {
    try {
      const data = await sql<ReviewTableType[]>`
        SELECT reviews.id, reviews.rating, reviews.review
        FROM reviews`;

      return data;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch review');
    }
}

export async function getUserInfo() {
  try {
    const data = await sql<UserTableType[]>`
      SELECT users.id, users.first_name, users.last_name, users.email, users.password
      FROM users`;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch review');
  }
}