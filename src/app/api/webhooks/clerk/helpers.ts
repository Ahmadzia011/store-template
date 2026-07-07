import { User } from "@/src/constants/clerk.webhook.constants";
import { prisma } from "@/src/lib/prisma";

export const addUser = async (user: User) => {
  const userCreated = await prisma.user.create({
    data: {
      id: user.id,
      name: user.first_name + " " + user.last_name,
      email: user.email_address,
    },
  });
  console.log("User added", userCreated);
};

export const updateUser = async (user: User) => {
  await prisma.user.update({
    where: { id: user.id },
    data: {
      id: user.id,
      name: user.first_name + " " + user.last_name,
      email: user.email_address,
    },
  });
  console.log('user updated')
};

export const deleteUser = async (id : User['id']) => {
  
  await prisma.user.delete({
    where : {
      id,
    }
  })
  console.log('User: ', id, ' deleted')

};
