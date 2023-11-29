'use server'

import { WritePostFormValues } from "@/app/reply/ReplyPostForm";
import { prisma } from "@/lib/prisma";
import { getUser } from "@/src/query/user.query";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

export const editPost = async (postId:string, values: WritePostFormValues) => {
    const user = await getUser();
    if(!user) {
        return notFound();
    }
    const post = await prisma.post.update({
        where: {
            id: postId,
          },
          data: {
            content: values.content,
          },
    })

    await new Promise((resolve) => setTimeout(resolve, 1000));
    revalidatePath(`/modify/${user.id}`)
    // revalidatePath(`/posts/${postId}`)
    return postId;
}
