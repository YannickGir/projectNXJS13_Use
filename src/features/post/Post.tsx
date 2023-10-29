import { PostHome } from '@/src/query/post.query'
import React from 'react'
import {PostLayout} from './PostLayout';
import Link from 'next/link';
import { Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

type PostProps = {
    post : PostHome,

}

export const Post = ({post}:PostProps) => {
console.log(post._count);

  return (
    <PostLayout user={post.user} postId={post.id} createdAt={post.createdAt} >
        <Link href={`/posts/${post.id}`} className='text-sm text-foreground'>
            {post.content}
        </Link>
        <div className='flex gap-2 items-center'>
            <Button size="icon" variant="ghost">
        <Heart/>
        </Button>
        <Button size="icon" variant="ghost">
        <MessageCircle/>
        </Button>
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
