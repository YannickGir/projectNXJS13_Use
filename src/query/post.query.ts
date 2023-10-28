import { prisma } from "@/lib/prisma";
import { getAuthSession } from '@/lib/auth';
import { Prisma } from "@prisma/client";

const session = await getAuthSession();
export const getLatestPosts = (userId?: string) => prisma.post.findMany({
    where:{
        parentId: null
    },
    take:20,
    orderBy: {
        createdAt: 'desc'
    },
    select: {
        id: true,
        content: true,
        createdAt: true,
        user: {
            select: {
                image: true,
                username: true,
                id: true,
            },
        },
        likes: {
            select: {
                userId: true
            },
            where: {
                userId: session?.user.id ?? "error"
            }
        },
        _count: {
            select: {
                likes: true,
                replies: true
            }
        }
    }
});

export type PostHome = Prisma.PromiseReturnType<typeof getLatestPosts>[number]