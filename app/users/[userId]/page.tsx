import { Profile } from '@/app/users/[userId]/Profile';
import { getAuthSession } from '@/lib/auth'
import { getUserProfile } from '@/src/query/user.query';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function UserPage({params}:{params:{userId:string}}) {
  const session = await getAuthSession();
  const user = await getUserProfile(params.userId )
  if (!user) {
    notFound()
  }
    return (
    <div><Profile user={user}/></div>
  )
}
