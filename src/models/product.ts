export default interface Product
{
    name: string;
    id?: string;
    description: string;
    image: string | ArrayBuffer| null;
    section:string;
}