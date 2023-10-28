// "use client";

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { getAuthSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { getLatestPosts } from '@/src/query/post.query';

export default async function Home() {
    const session = await getAuthSession();
    const posts = await getLatestPosts();
  return (
    <div className=''>
            {posts.map((p)=> (
                <>
                    <h1 key={p.id}> {p.user.username} </h1>
                    <img key={p.id} src={p.user.image} width='30px'/> 
                </>
                

            ))}
    </div>
  )
}
