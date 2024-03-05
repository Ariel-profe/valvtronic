
export interface IProduct {
    id: number;
    name: string;
    slug: string;
    brand: string;
    category: string;
    description: string,
    images: IProductImage[];
    tags: string[];
    status: boolean;
    is_featured: boolean;
    created_at: Date;

    design_standard: string;
    diameter: string;
    pressure_classes: string;
    connections: string;
    drives: string[];
    body:string;
    disc_axis: string;
    seat: string;
};

export interface IProductParams {
    id?: string | null;
    category?: string | null;
    searchTerm?: string | null;
};

export interface IProductImage {
    color: string;
    colorCode: string;
    image: string;
};