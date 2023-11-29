
'use client'

import { Button } from '@/components/ui/button'
import { Loader, LogOut } from 'lucide-react'
import { useTransition } from 'react'
import {signOut} from 'next-auth/react'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'

export const DropDownMenuDelete = () => {
  const [isPending, startTransition] = useTransition();
  
// ---------------------A MODIFIER POUR AJOUTER LA FONCTION DELETE D'UN POST------ ENSUITE FAIRE PAREIL POUR FONCTION MODIFIER POST 

  return (  
    <DropdownMenuItem 
        onClick={()=>{
        startTransition(() => signOut());
    }}>
        {isPending ? (
            <Loader className = "mr-2 h-4 w-4"/>
            ):(
                <LogOut className = "mr-2 h-4 w-4"/>
            
        )}
        LogOut
    </DropdownMenuItem>
  )
}
