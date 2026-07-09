"use server";

import { CREDITS_FOR_BASIC, CREDITS_FOR_SERVICE } from "@/src/constants/credits.constants";
import { prisma } from "@/src/lib/prisma";
import { revalidatePath } from "next/cache";


// ============ GET USER CREDITS ===============

export async function getCredits(userId: string): Promise<number> {
  try {
    const credits = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        credits: true,
      },
    });
    console.log("this is the credits", credits?.credits);
    console.log("this is the user", userId);
    return credits?.credits!;
  } catch (e) {
    throw new Error("Error while fetching the credits..");
  }
}


// ============ CHECK USER CREDITS ===============

export async function hasCredits(userId: string): Promise<Boolean> {
  const userCredits = await getCredits(userId);

  console.log("this is the credits in second func", userCredits);

  if (userCredits >= CREDITS_FOR_SERVICE) {
    return true;
  } else {
    return false;
  }
}


// ============ DEDUCT USER CREDITS ===============

export async function deductCredits(userId: string) {
  if (userId) {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        credits: {
          decrement: 1,
        },
      },
    });

    revalidatePath("");
  }
}


// ============ ADD USER CREDITS ===============

export async function addCredits(userId: string) {
  const creditsBought = await prisma.plan.findFirst({
    where: {
      name: "Basic Plan",
    },
  });

  const updatedUser = prisma.user.update({
    where: { id: userId },
    data: {
      credits: {
        increment: 5,
      },
    },
  });
}
