import { WritePostForm } from '@/app/write/WritePostForm'
import { getUser } from '@/src/query/user.query'

export default async function Write() {
    const user = await getUser();
  return (
    
        <WritePostForm 
        user={user} 
        onSubmit={async ()=> {
            'use server'  //utilisation d'une server action
        }} />

  )
}
