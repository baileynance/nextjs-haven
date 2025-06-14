export type ProductTableType = {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
}

export type UserTableType = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
} 

export type ReviewTableType = {
    id: number;
    rating: number;
    review: string;
}