
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { formatDate } from '@/lib/date';
import { DropDownMenuLogout } from '@/src/features/layout/auth/DropDownMenuLogout';
import { DropDownMenuDelete } from '@/src/features/layout/post/DropDownMenuDelete';
import { PostHome } from '@/src/query/post.query';
import clsx from 'clsx';
import { MoreHorizontal, PenSquare, User2 } from 'lucide-react';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react'

type PostLayoutProps = PropsWithChildren <{
    user: PostHome['user'];
    createdAt?: Date;
    className?: string;
    postId?:string;
}>;

export const PostLayout = ({children, className, user, createdAt, postId}:PostLayoutProps) => {
       
  return (
    <div className={clsx('flex w-full flex-row items-start p-4',className)}>
        <Avatar size='default'>
            {user.image ? <AvatarImage src={user.image} alt={user.username}/> : null}
            <AvatarFallback>
                {user.username.slice(8, 2).toUpperCase()}
            </AvatarFallback>
        </Avatar>
        <div className='ml-4 flex w-full flex-col gap-2'>
            <Link href={`/users/${user.id}`}> <div className='flex flex-row items-center gap-2'>
        <p className='text-sm text-card-foreground mr-auto'>
            {user.username}
        </p>
        {createdAt ? (
            <p className='text-sm text-muted-foreground'>
                {formatDate(createdAt)}
            </p>
        ) : null}
       
            
            <DropdownMenu>
        <DropdownMenuTrigger asChild> 
        <Button size="sm" variant="outline">
           <MoreHorizontal size={20}/> 
        </Button>
</DropdownMenuTrigger>

<DropdownMenuContent>
    <DropdownMenuItem asChild>
        <Link href="/profile">
            <PenSquare className='mr-2 h-4 w-4' size={16}/>
        Edit
        </Link>
    </DropdownMenuItem>
       <DropDownMenuDelete/> 
</DropdownMenuContent>
    </DropdownMenu>
 
        
        </div> 
        </Link>
        {children}
        </div>
    </div>
  )
}
