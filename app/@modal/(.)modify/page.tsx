

import { ModifyModal } from '@/app/@modal/(.)modify/ModifyModal';
import { editPost } from '@/app/posts/[postId]/modify/modify.post.action';
import { createPost } from '@/app/write/write-post.action';
import { getUser } from '@/src/query/user.query';
import React from 'react'

export default async function Page() {
    const user = await getUser();
  return (
    <ModifyModal path="write" user={user} editPost={editPost}/>
  )
}
