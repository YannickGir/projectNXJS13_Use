import React from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertTriangle} from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Alert className='mt-4'>
    <AlertTriangle className='mr-2'/>
        <AlertTitle className='ml-4'> Not Found</AlertTitle>
        <AlertDescription className='ml-4'> Any post found, you need to post beford reaching this page</AlertDescription>
   <Link href='/' className={buttonVariants({variant:'link'})}> Go To Home ! </Link>
    </Alert>
  )
}
