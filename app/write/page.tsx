import { createPost } from '@/app/write/write-post.action';
import { WritePostForm } from '@/app/write/WritePostForm'
import { getUser } from '@/src/query/user.query'

export default async function Write() {
    const user = await getUser();
  return (
    
        <WritePostForm 
        user={user} 
        onSubmit={createPost} />

  )
}
