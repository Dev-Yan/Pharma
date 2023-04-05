import { Types } from "mongoose";

export interface IProductDTO {
    name: string;
    description: string;
    imagePath?: string;
    price: number;
    category: string | Types.ObjectId;
}
