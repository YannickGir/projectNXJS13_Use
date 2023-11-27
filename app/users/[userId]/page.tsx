import { Profile } from '@/app/users/[userId]/Profile';
import { followUser } from '@/app/users/[userId]/follow.action';
import { Button } from '@/components/ui/button';
import { getAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma';
import { Post } from '@/src/features/post/Post';
import { getUserProfile } from '@/src/query/user.query';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function UserPage({params}:{params:{userId:string}}) {
  const session = await getAuthSession();
  const user = await getUserProfile(params.userId )
  if (!user) {
    notFound()
  }
  const isFollowing = session?.user.id ? await prisma.follow.findFirst({
    where: {
        followerId: user.id,
        followingId: user.id
    },
}) : null
const isCurrentUser = params.userId === session?.user.id;
    let FollowButton
if (!isCurrentUser) {
    FollowButton = (
    <Button variant={'outline'} formAction={async () => {
        'use server';
        // event.preventDefault()
        if(!session?.user.id ) {
            return;
        }
        await followUser(params.userId)}}>
        {isFollowing ? "Unfollow" : "Follow"}
    </Button>
    )}
    return (
         
    <div>
        <Profile user={user}>
      
            <form className='mt-4'>
                {FollowButton}
            </form>
            </Profile>

            <div className='divide-y divide-accent'>
                {user.posts.map((post)=> (
                    <Post key={post.id} post={post}/>
                ))}
            </div>
    </div>
  )
}


