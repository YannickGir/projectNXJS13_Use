// "use client";

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { getAuthSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { Post } from '@/src/features/post/Post';
import { getLatestPosts } from '@/src/query/post.query';

export default async function Home() {
    const session = await getAuthSession();
    const posts = await getLatestPosts(session?.user.id);

    await new Promise ((r) => setTimeout(r, 3000))
  return (
    <div className='divide-y divide-muted'>
        {/* <p>{JSON.stringify(session, null, 2)}</p> */}
            {posts.map((p)=> (
                <Post post={p} key={p.id}/>
                

            ))}
    </div>
  )
}
