

import { EditProfileModal } from '@/app/@modal/(.)profile/edit/EditProfileModal';
import { ProfileForm } from '@/app/profile/edit/ProfileForm';
import { editProfile } from '@/app/profile/edit/edit-profile.action';
import { getUserEdit } from '@/src/query/user.query'
import { notFound } from 'next/navigation';
import React from 'react'

export default async function page() {
    const user = await getUserEdit();
    
  return (
    <EditProfileModal user={user} editProfile={editProfile}/>
  )
}