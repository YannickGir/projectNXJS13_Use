import { ReplyModal } from '@/app/@modal/(.)posts/[postId]/reply/ReplyModal';
import { createReply } from '@/app/posts/[postId]/reply/write-reply.action';
import { getUser } from '@/src/query/user.query';


export default async function Page({params}:{params: {postId: string}}) {
    const user = await getUser();

  return (
    <ReplyModal 
    
    user={user} 
    createReply={async (values)=>{
    'use server'

    const reply = await createReply(params.postId, values);
    return reply;
}}/>
  );
}
