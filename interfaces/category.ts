
export interface ICategory {
    id: number;
    name: string;
    href: string;
    subcategories?: ISubCategory[]
};

export interface ISubCategory {
    id: number;
    name: string;
    href: string;
}