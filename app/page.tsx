// "use client";

import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Avatar } from '@radix-ui/react-avatar'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Form } from 'react-hook-form'
import { getAuthSession } from '@/lib/auth';

export default async function Home() {
    const session = await getAuthSession();
  return (
    <div className=''>
        <p>
            {JSON.stringify(session, null ,2)}
        </p>
    <Button>click me !</Button>
    <Input/>
    </div>
  )
}
