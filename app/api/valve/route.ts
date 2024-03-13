import {NextResponse} from 'next/server';

import prisma from '@/libs/prisma-db';

import { slugify } from '@/utils/slugify';
import { Valve } from '@prisma/client';
import { getUser } from '@/actions/user';

export async function POST(req: Request){

    const user = await getUser();

    if(!user || user.role !== 'ADMIN') {return NextResponse.error();}

    const body = await req.json();

    const {slug, description, images, category, serie, sizeRange, temperatureRange, operatingPressure, shutterMaterial, closureClassification, bodyType, connectionRules, certifications, applications, bodyMaterials, stemMaterials, seatMaterials, standardDesign, standardTests } = body;

    const existingProductInDB = await prisma.valve.findFirst({where: {slug}});

    if(existingProductInDB){
        return NextResponse.json({ error: 'Este producto ya existe en la base de datos' }, { status: 400 })
    };

    const product = await prisma.valve.create({
        data: {
           slug, description, images, category, serie, sizeRange, temperatureRange, operatingPressure, shutterMaterial, closureClassification, bodyType, connectionRules, certifications, applications, bodyMaterials, stemMaterials, seatMaterials, standardDesign, standardTests
        }
    });

    return NextResponse.json(product);
};

export async function PUT(req: Request){

    const user = await getUser();
    
    if(!user) return NextResponse.error();

    if(user.role !== 'ADMIN'){
        return NextResponse.error()
    };

    const {id, slug, description, category, images, status}:Valve = await req.json();        

    const valve = await prisma.valve.update({
        where: {id},
        data: {
            ...req.json()
        }
    });

    return NextResponse.json(valve);
};
