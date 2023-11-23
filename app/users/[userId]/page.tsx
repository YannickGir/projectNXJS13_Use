import { Profile } from '@/app/users/[userId]/Profile';
import { followUser } from '@/app/users/[userId]/follow.action';
import { Button } from '@/components/ui/button';
import { getAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/prisma';
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

    return (
    <div>
        <Profile user={user}/>
            <form>
                <Button formAction={async () => {
                    'use server'
                    if(!session?.user.id) {
                        return 
                    }
                    followUser(params.userId)}}>
                    {isFollowing ? "Unfollow" : "Follow"}
                </Button>
            </form>
    </div>
  )
}
