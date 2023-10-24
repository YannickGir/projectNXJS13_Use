import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { getAuthSession } from '@/lib/auth'

import React from 'react'

export const UserProfile = async() => {
    const session = await getAuthSession();
  return (
    <DropdownMenu>
        <DropdownMenuTrigger> 
        <Button size="sm" variant="outline">
            {session?.user.name ?? ""}

        </Button>
</DropdownMenuTrigger>

<DropdownMenuContent>
    <DropdownMenuItem>
        Profile
    </DropdownMenuItem>
</DropdownMenuContent>
    </DropdownMenu>
    
  )
}
