
export interface IValve {
    id: string; 
    slug: string;
    description: string;
    images: string[];
    status: boolean;
    
    category: string;
    serie: string;
    sizeRange: string;
    temperatureRange: string;
    operatingPressure: string;
    shutterMaterial: string;
    closureClassification: string;
    bodyType: string;
    connectionRules: string;
    certifications: string;
    applications: string;
    bodyMaterials: string;
    stemMaterials: string;
    seatMaterials: string;
    standardDesign: string;
    standardTests: string;
    createdAt: string;
};

export interface IProduct {
    title: string;
    description: string;
    images: string;
    category: string;
    slug: string;
}


export interface IValveParams {
    id?: string | null;
    category?: string | null;
    searchTerm?: string | null;
};

// export interface IProductImage {
//     color: string;
//     colorCode: string;
//     image: string;
// };