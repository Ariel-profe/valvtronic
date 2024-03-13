import prisma from '@/libs/prisma-db';
import { IValveParams } from "@/interfaces/product";

export const getValves = async(params: IValveParams) => {
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

        const valves = await prisma.valve.findMany({
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

        if(!valves) return null;

        return valves;

    } catch (error:any) {
        throw new Error(error);
    }
};

export const getValveBySlug = async(slug: string) => {

    try {
        const valve = await prisma.valve.findFirst({
            where: {slug}
        });

        if(!valve) return null;

        return valve;
        
    } catch (error:any) {
        throw new Error(error);
    }
};