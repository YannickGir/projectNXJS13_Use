'use client'

import { Button } from '@/components/ui/button';
import React from 'react'

export const LikeButton = ({
    postId,
    isLiked
}: {
    postId:string;
    isLiked: boolean
}) => {

  return (
    <Button 
    className={clsx('rounded-md hover:bg-accent flex gap-1 items-center', 
    {'text-red-500': isLiked})}>
        {isPending ?} 
    </Button> 
  )
}
