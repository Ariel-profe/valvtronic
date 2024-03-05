import prisma from '@/libs/prisma-db';
import { IProductParams } from "@/interfaces/product";

export const getProducts = async(params: IProductParams) => {
    try {
        const {category, searchTerm} = params;

        let searchString = searchTerm;

        if(!searchTerm){
            searchString = ''
        }

        let query:any = {};

        if(category){
            query.category = category;
        }

        const products = await prisma.valve.findMany({
            where: {
                ...query,
                OR: [
                    {
                        name: {
                            contains: searchString,
                            mode: 'insensitive'
                        },
                        description: {
                            contains: searchString,
                            mode: 'insensitive'
                        },
                        
                    }
                ]
            },
            include: {
                reviews: {
                    include: {
                        user: true
                    },
                    orderBy: {
                        createdAt: 'desc'
                    }
                }
            }
        });

        if(!products) return null;

        return products;

    } catch (error:any) {
        throw new Error(error);
    }
};

export const getProductBySlug = async(slug: string) => {

    try {
        const product = await prisma.valve.findFirst({
            where: {slug},
            include: {
                reviews: {
                    include: {
                        user: true
                    },
                    orderBy: {
                        createdAt: 'desc'
                    }
                }
            }
        });

        if(!product) return null;

        return product;
        
    } catch (error:any) {
        throw new Error(error);
    }
};