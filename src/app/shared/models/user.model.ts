export interface User {
    id: number;
    email: string;
    name: string;
    age: number;
    sexe: 'M' | 'F';
    profilePictureUrl: string;
}