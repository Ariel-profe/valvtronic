
import {getServerSession} from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

import prisma from '@/libs/prisma-db';

export const getSession = async() => {
    return await getServerSession(authOptions);
};

export const getUser = async() => {
    try {
        const session = await getSession();

        if(!session?.user?.email){
            return null
        };

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session?.user?.email
            }
        });

        if(!currentUser){
            return null
        }

        return {
            ...currentUser,
            emailVerified: currentUser.emailVerified?.toISOString() || null,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString()
        }
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getUsers = async() => {

    try {
        const users = await prisma.user.findMany();

        if(!users){
            return null;
        }

        return users;

    } catch (error:any) {
        throw new Error(error);
    }
};