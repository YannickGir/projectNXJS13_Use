import { Button } from '@/components/ui/button'
import { LogginButton } from '@/src/features/layout/auth/LogginButton'
import { ThemeToogle } from '@/src/theme/ThemeToogle'
import React from 'react'

export const Header = async () => {
  return (
    <header className='border-b border-b-accent fixed top-0 bg-background w-full'>
        <div className='container flex items-center py-2 max-w-lg m-auto gap-1'> 
            <h2 className='text-2xl font-bold mr-auto'>TweetLike</h2>
                <LogginButton/>
                <ThemeToogle/>
        </div>
    </header>
  )
}
