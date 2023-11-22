import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { postSelectQuery } from "@/src/query/post.query";
import { Prisma } from "@prisma/client";

const userQuery = {
    id:true,
    name:true,
    username:true,
    image: true,
    bio: true,
    createdAt: true,
    link: true,
} satisfies Prisma.UserSelect;

export const getUser = async () => {
  try {
    const session = await getAuthSession();

    if (!session?.user.id) {
      throw new Error("User not found");
    }

    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id: session.user.id,
      },
    });

    return user; 
  } catch (error) {
    console.error("Une erreur s'est produite :", error);
    throw error; 
  }
};

export const getUserProfile = async (userId:string) => {
    return prisma.user.findUnique({where:{id:userId},
    select:{
        ...userQuery,
        _count: {
            select: {
                followeds: true,
                likes: true,
            },
        },
        posts: {
            select: postSelectQuery(userId),
            take: 10,
            orderBy: {createdAt:'desc'}, 
        },
        followeds: {
            select: {
                follower: {
                    select: {
                        id:true,
                        image:true,
                        username:true,
                    }
                }
            },
            take: 3,
            orderBy: {
                createdAt: "desc",
            } 
        }
    },
 } 
 )
}