import { env } from "@/lib/env";
import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";


export const authOptions : AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
      GithubProvider({
        clientId: env.GITHUB_ID,
        clientSecret: env.GITHUB_SECRET,
      }),
      
    ],
  }
 