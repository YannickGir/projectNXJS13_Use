"use client"

import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage, UseZodForm } from "@/components/ui/form";
import { ContentTextArea } from "@/src/features/post/ContentTextArea";
import { PostLayout } from "@/src/features/post/PostLayout";
import {User} from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {z} from "zod";

const Schema = z.object({
    content: z.string().min(1).max(500)
})

export type WritePostFormValues = z.infer<typeof Schema>;

type WritePostFormProps = {
    user: User;
    onSubmit: (values: WritePostFormValues) => Promise<string>;  // retourne l'id
}

export const ModifyPostForm = ({ user, onSubmit }: WritePostFormProps) => {
    const form = UseZodForm({
      schema: Schema,
    });
    const router = useRouter();
    const [message, setMessage] = useState<string | null>(null);
  
    const handleSubmit = async (values: WritePostFormValues) => {
      try {
        const postId = await onSubmit(values);
        setMessage(`Post ${postId} submitted successfully!`);
        // Réinitialiser le formulaire si nécessaire
        form.reset();
      } catch (error) {
        setMessage("Une erreur s'est produite lors de la soumission du post.");
        console.error("Erreur lors de la soumission du post :", error);
      }
    };

  return <PostLayout user={user}>
    <Form 
        form={form} 
        onSubmit={async (values)=> {
        const postId = await onSubmit(values); // récupère la Promise<string>
        // alert("submited to client side ! " + postId)
        router.push(`/posts/${postId}`)
        window.location.href = '/';
        router.refresh();  // afin de rafraichir tout de suite la page dès qu'il y a un post d'envoyé
    }}>
        <FormField 
        control={form.control} 
        name="content" 
        render={({field})=> (
            <FormItem>
                <ContentTextArea {...field}/>
                <FormMessage/>
            </FormItem>
        ) }
        />

        <div className="flex w-full justify-end">
            <Button size="sm">
                Post
            </Button>
        </div>
    </Form>
    
  </PostLayout>
}
