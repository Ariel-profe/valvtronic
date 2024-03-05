import {NextResponse} from 'next/server';

import prisma from '@/libs/prisma-db';

import { slugify } from '@/utils/slugify';
import { Valve } from '@prisma/client';
// import { getUser } from '@/actions/user';

export async function POST(req: Request){

    // const user = await getUser();

    // if(!user) return NextResponse.error();

    // if(user.role !== 'ADMIN'){
    //     return NextResponse.error()
    // };

    const body = await req.json();

    const {name, slug, description, price, brand, category, inStock, images} = body;

    const existingProductInDB = await prisma.valve.findFirst({where: {slug}});

    if(existingProductInDB){
        return NextResponse.json({ error: 'Product already exists in DB' }, { status: 400 })
    };

    const product = await prisma.valve.create({
        data: {
           ...body
        }
    });

    return NextResponse.json(product);
};

export async function PUT(req: Request){

    // const user = await getUser();
    
    // if(!user) return NextResponse.error();

    // if(user.role !== 'ADMIN'){
    //     return NextResponse.error()
    // };

    const {id, slug, description, category, images, isVisible}:Valve = await req.json();        

    const product = await prisma.valve.update({
        where: {id},
        data: {
            ...req.json()
        }
    });

    return NextResponse.json(product);
};
