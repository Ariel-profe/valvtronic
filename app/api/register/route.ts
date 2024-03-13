import {NextResponse} from 'next/server';
import bcrypt from 'bcryptjs';

import prisma from '@/libs/prisma-db';

export async function POST(req: Request){

    const body = await req.json();

    const {name, email, password} = body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const userDb = await prisma.user.findUnique({
        where: {email}
    });

    if(userDb){
        return NextResponse.json({error: 'Este usuario ya está registrado'},{status: 401});
    };

    const user = await prisma.user.create({
        data: {
            name, email, hashedPassword
        }
    });

    return NextResponse.json(user);
};