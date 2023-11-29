'use client'

import { ModifyPostForm } from "@/app/modify/ModifyPostForm";
import { WritePostForm, WritePostFormValues } from "@/app/write/WritePostForm";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { User } from "@prisma/client";
import { useRouter, usePathname } from "next/navigation";

export const ModifyModal = ({
    user, 
    editPost,
    path
    }:{
        user: User; 
        editPost:(postId:string, values:WritePostFormValues) => Promise<string>;
        path:string
    }) => {
    const router = useRouter();
    const pathname = usePathname();
  return (
    <Dialog open={pathname?.includes('modify')} onOpenChange={()=>{router.back()}}> 
        <DialogContent>
            <ModifyPostForm user={user} onSubmit={editPost}/>
        </DialogContent>
    </Dialog>
  )
}
