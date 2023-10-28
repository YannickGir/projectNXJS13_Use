// "use client";

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { getAuthSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export default async function Home() {
    const session = await getAuthSession();
    const posts = await prisma.post.findMany({
        where:{
            parentId: null
        },
        select: {
            id: true,
            content: true,
            createdAt: true,
            user: {
                select: {
                    image: true,
                    username: true,
                    id: true
                }
            },
            likes: {
                select: {
                    userId: true
                },
                where: {
                    userId: session?.user.id ?? "error"
                }
            },
            _count: {
                select: {
                    likes: true,
                    replies: true
                }
            }
        }
    })
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
