import { createReply } from '@/app/posts/[postId]/reply/write-reply.action';
import { WritePostForm } from '@/app/write/WritePostForm';
import { Post } from '@/src/features/post/Post';
import { getPost } from '@/src/query/post.query';
import { getUser } from '@/src/query/user.query'
import { notFound } from 'next/navigation';
import React from 'react'

export default async function PostReply({params} : {params:{postId:string}}) {
  const user = await getUser();
  const post = await getPost(params.postId, user.id)
if (!post) return notFound();

    return (
    <div>
        <Post post={post}/>
        <WritePostForm
        user={user}
        onSubmit={async (values) =>{
            'use server';
            return createReply(post.id, values )
        }}/>    
    </div>
  )
}
