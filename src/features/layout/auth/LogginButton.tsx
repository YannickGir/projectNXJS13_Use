
'use client'

import { Button } from '@/components/ui/button'
import { Loader, LogIn } from 'lucide-react'
import { useTransition } from 'react'
import {signIn} from 'next-auth/react'

export const LogginButton = () => {
  const [isPending, startTransition] = useTransition();
  
  return (  
    <Button 
        onClick={()=>{
        startTransition(() => signIn());
    }}>
        {isPending ? (
            <Loader className = "mr-2 h-4 w-4"/>
            ):(
                <LogIn className = "mr-2 h-4 w-4"/>
            
        )}
        {/* {isPending ? "loading" : "Login"} */}
        Login
    </Button>
  )
}
