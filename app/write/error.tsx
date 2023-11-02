'use client'
 
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertTriangle } from 'lucide-react'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <Alert className='mt-4'>
        <AlertTriangle className='mr-2'/>
            <AlertTitle className='ml-4'> Not Logged</AlertTitle>
            <AlertDescription className='ml-4'> You must be logged to access to the posts page</AlertDescription>
       
    </Alert>
  )
}