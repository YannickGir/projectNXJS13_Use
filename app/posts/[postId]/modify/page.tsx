import { editPost } from '@/app/posts/[postId]/modify/modify.post.action';
import { WritePostForm } from '@/app/write/WritePostForm';
import { getPost } from '@/src/query/post.query';
import { getUser, getUserEdit } from '@/src/query/user.query'
import { notFound } from 'next/navigation';
import React from 'react'

export default async function PostModify({params} : {params:{postId:string}}) {
    const user = await getUser();
    const modifiedPost = await getPost(params.postId, user.id)
    if (!modifiedPost) return notFound();
    
  return (
    <div className='h-full container flex items-center'>
        <div className='bg-card border rounded-md border-border p-4 flex-1'>
        <WritePostForm user={user} onSubmit={async (values) =>{
            'use server';
            return editPost(modifiedPost.id, values )
        }}/>    
        </div>
    </div>
  )
}
