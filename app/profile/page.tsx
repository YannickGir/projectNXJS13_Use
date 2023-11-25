import { Profile } from '@/app/users/[userId]/Profile';
import { followUser } from '@/app/users/[userId]/follow.action';
import { buttonVariants } from '@/components/ui/button';
import { getAuthSession } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { getUserProfile } from '@/src/query/user.query';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function ProfilePage({}) {
    const session = await getAuthSession();
    if (!session?.user.id) {
        notFound()
      }
    const user = await getUserProfile(session?.user.id )
    if (!user) {
        notFound()
      }
        return (
             
        <div>
            <Profile user={user}/>
            <form className='mt-4'>
                <Link className={buttonVariants({
                    variant:'outline'
                })} href={"/profile/edit"}>
                    Edit Profile
                </Link>
            </form> 
        </div>
      )
}
