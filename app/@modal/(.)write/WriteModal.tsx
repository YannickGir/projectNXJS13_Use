'use client'

import { WritePostForm, WritePostFormValues } from "@/app/write/WritePostForm";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { User } from "@prisma/client";
import { useRouter, usePathname } from "next/navigation";

export const WriteModal = ({
    user, 
    createPost,
    path
    }:{
        user: User; 
        createPost:(values:WritePostFormValues) => Promise<string>;
        path:string
    }) => {
    const router = useRouter();
    const pathname = usePathname();
  return (
    <Dialog open={pathname?.includes('write')} onOpenChange={()=>{router.back()}}> 
        <DialogContent>
            <WritePostForm user={user} onSubmit={createPost}/>
        </DialogContent>
    </Dialog>
  )
}
