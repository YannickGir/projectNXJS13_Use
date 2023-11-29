import { editPost } from '@/app/posts/[postId]/modify/modify.post.action';
import { ProfileForm } from '@/app/profile/edit/ProfileForm';
import { getUserEdit } from '@/src/query/user.query'
import { notFound } from 'next/navigation';
import React from 'react'

export default async function page() {
    const user = await getUserEdit();
    
  return (
    <div className='h-full container flex items-center'>
        <div className='bg-card border rounded-md border-border p-4 flex-1'>
<ProfileForm user={user} onSubmit={editPost}/>
        </div>
    </div>
  )
}