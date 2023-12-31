'use server'

import { WritePostFormValues } from "@/app/write/WritePostForm"
import { prisma } from "@/lib/prisma"
import { getUser } from "@/src/query/user.query"
import { revalidatePath } from "next/cache"

export const createPost = async (values: WritePostFormValues) => {
//  console.log ("here is the server !")
 const user = await getUser();

 const post = await prisma.post.create({
    data: {
        content: values.content,
        userId:user.id,
    }
 })
 revalidatePath(`/write/${user.id}`)
 return post.content;
}
