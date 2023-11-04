// "use client";

import { createPost } from '@/app/write/write-post.action';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { getAuthSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { Post } from '@/src/features/post/Post';
import { getLatestPosts } from '@/src/query/post.query';
import { getUser } from '@/src/query/user.query';

export default async function Posts() {
    const user = await getUser();
  return (
    <div className='divide-y divide-muted'>
        
        test
            
    </div>
  )
}
