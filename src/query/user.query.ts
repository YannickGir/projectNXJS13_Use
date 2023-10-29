import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const getUser = async () => {
  try {
    const session = await getAuthSession();

    if (!session?.user.id) {
      throw new Error("User not found");
    }

    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id: session.user.id,
      },
    });

    return user; 
  } catch (error) {
    console.error("Une erreur s'est produite :", error);
    throw error; 
  }
};
