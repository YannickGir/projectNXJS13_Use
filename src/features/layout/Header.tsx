import { Button } from '@/components/ui/button'
import { getAuthSession } from '@/lib/auth'
import { LoginButton } from '@/src/features/layout/auth/LoginButton'
import { UserProfile } from '@/src/features/layout/auth/UserProfile'
import { ThemeToogle } from '@/src/theme/ThemeToogle'
import React from 'react'

export const Header = async () => {
    const session = await getAuthSession();
  return (
    <header className='border-b border-b-accent fixed top-0 bg-background w-full'>
        <div className='container flex items-center py-2 max-w-lg m-auto gap-1'> 
            <h2 className='text-2xl font-bold mr-auto'>TweetLike</h2>
            {session?.user ? (
                <>  
                    <UserProfile/> 
                </>
              
            ) : (
                <LoginButton/>
            )}
                
                <ThemeToogle/>
        </div>
    </header>
  )
}
