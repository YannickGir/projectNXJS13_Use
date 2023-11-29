import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const updatePost = async (postId: string, newContent: string) => {
    try {
      const updatedPost = await prisma.post.update({
        where: {
          id: postId,
        },
        data: {
          content: newContent,
        },
      });
      return updatedPost;
    } catch (error) {
      // Gérer les erreurs, par exemple, journaliser l'erreur ou la renvoyer
      console.error("Erreur lors de la mise à jour du post :", error);
      throw error;
    }
  };

export const postSelectQuery = (userId?: string) => ({
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
            userId: true,
        },
        where: {
            userId: userId ?? "error"
        },
    },
    _count: {
        select: {
            likes: true,
            replies: true,
        },
    },
}satisfies Prisma.PostSelect)

export const getLatestPosts = (userId?: string) => prisma.post.findMany({
    where:{
        parentId: null
    },
    take:25,
    orderBy: {
        createdAt: 'desc'
    },
        select: postSelectQuery(userId)
});

export const getPostView = (id: string, userId?: string) => prisma.post.findUnique({
    where: {
        id
    },
    select:{
        ... postSelectQuery(userId),
        replies: {
        select: postSelectQuery(userId),
    },
    parent: {
        select:postSelectQuery(userId),
    }
    },
    
} );

export const getPost = (id: string, userId?: string) =>  {
 return prisma.post.findUnique({
    where: {
        id
    },
    select:{
        ... postSelectQuery(userId),
    },
    
} );}


export type PostHome = Prisma.PromiseReturnType<typeof getLatestPosts>[number]