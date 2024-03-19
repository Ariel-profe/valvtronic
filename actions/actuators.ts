import prisma from '@/libs/prisma-db';
import { IProductParams } from "@/interfaces/product";

export const getActuators = async(params: IProductParams) => {
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

        const products = await prisma.actuator.findMany({
            where: {
                ...query,
               
            }
        });

        if(!products) return null;

        return products;

    } catch (error:any) {
        throw new Error(error);
    }
};


export const getActuatorBySlug = async(slug: string) => {

    try {
        const product = await prisma.actuator.findFirst({
            where: {slug}
        });

        if(!product){
            return null;
        }

        return product;
    } catch (error:any) {
        throw new Error(error)
    }
};