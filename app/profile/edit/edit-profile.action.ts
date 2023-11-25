'use server'

import { ProfileFormType } from "@/app/profile/edit/ProfileForm";
import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getUser } from "@/src/query/user.query";

export const editProfile = async (values:ProfileFormType) => {
    const session = await getAuthSession();
    if(!session) {
        throw new Error ('You must be connected to edit your profile')
    }
    await prisma.user.update({
        where: {
            id: session.user.id,
        },
        data: values,
    })

    return "/profile"
    
}
