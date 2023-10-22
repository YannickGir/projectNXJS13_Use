
'use client'

import { Button } from '@/components/ui/button'
import { LogIn } from 'lucide-react'
import React from 'react'
import {signIn} from 'next-auth/react'

export const LogginButton = () => {
  return (
    <Button onClick={()=>{
        signIn();
    }}>
        <LogIn className='mr-2 h-4 m-4'/>
        Login
    </Button>
  )
}
