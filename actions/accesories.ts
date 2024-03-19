import prisma from '@/libs/prisma-db';
import { IProductParams } from "@/interfaces/product";

export const getAccesories = async(params: IProductParams) => {
    try {
        const {categoria, searchTerm} = params;

        let searchString = searchTerm;

        if(!searchTerm){
            searchString = ''
        }

        let query:any = {};

        if(categoria){
            query.category = categoria;
        }

        const products = await prisma.accesory.findMany({
            where: {
                ...query,
                OR: [
                    {
                        serie: {
                            contains: searchString,
                            mode: 'insensitive'
                        },
                        description: {
                            contains: searchString,
                            mode: 'insensitive'
                        },
                    }
                ]
            }
        });

        if(!products) return null;

        return products;

    } catch (error:any) {
        throw new Error(error);
    }
};

export const getAccesoryBySlug = async(slug: string) => {

    try {
        const product = await prisma.accesory.findFirst({
            where: {
                slug
            }
        });

        if(!product){
            return null;
        }

        return product;
    } catch (error:any) {
        throw new Error(error)
    }
};