import { PostHome } from '@/src/query/post.query'
import React from 'react'
import {PostLayout} from './PostLayout';
import Link from 'next/link';
import { Heart, MessageCircle } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { LikeButton } from '@/src/features/post/LikeButton';

type PostProps = {
    post : PostHome,

}

export const Post = ({post}:PostProps) => {
// console.log(post._count);

  return (
    <PostLayout user={post.user} postId={post.id} createdAt={post.createdAt} >
        <Link href={`/posts/${post.id}`} className='text-sm text-foreground'>
            {post.content}
        </Link>
        <div className='flex gap-2 items-center'>
            <LikeButton postId={post.id} isLiked={post.likes.length > 0}/>
        <Link href={`/posts/${post.id}/reply`} className={buttonVariants({size:"icon", variant:"ghost"})} >
            <MessageCircle size={20}/>
        </Link>
        </div>
        <div className='text-muted-foreground text-sm'>
            <Link href={`/posts/${post.id}`}> 
                {post._count.likes} likes
            </Link>
            {" | "}
            <Link href={`/posts/${post.id}`}> 
                {post._count.replies} comments
            </Link>
        </div>
    </PostLayout>
  )
}
