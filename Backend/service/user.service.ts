import { CreateUserDto, UpdateUserDto } from "../dto/user.dto";
import prismaClient from "../prisma/prisma-client";
import bcrypt from "bcrypt";
import { Prisma, Role } from "../generated/prisma"; // Import Prisma and Role
import { UpdateUserDto as UserUpdateDataType } from "../dto/user.dto"; // Alias UpdateUserDto to avoid conflict if Prisma has a similar name

export const createUser = async (userData: CreateUserDto) => {
  const hashedPassword = bcrypt.hashSync(userData.password, 10); // Removed 'as string' as Zod ensures it
  return prismaClient.user.create({
    data: {
      fullName: userData.fullName,
      email: userData.email,  
      role: userData.role, // Type is already Role from Zod schema
      phone: userData.phone,
      password: hashedPassword, 
    },
  });
};

export const updateUser = async (id: string, updateData: UserUpdateDataType) => {
  try {
    const user = await prismaClient.user.findUnique({
      where: { id },
    });

    if (!user) {
      // Consider throwing an error or returning a specific response
      return null; // Or throw new Error('User not found');
    }

    const dataToUpdate: Prisma.UserUpdateInput = {};

    // Selectively add fields to ensure type compatibility and handle transformations
    if (updateData.fullName !== undefined) {
      dataToUpdate.fullName = updateData.fullName;
    }
    if (updateData.email !== undefined) {
      dataToUpdate.email = updateData.email;
    }
    if (updateData.phone !== undefined) {
      dataToUpdate.phone = updateData.phone;
    }
    if (updateData.role !== undefined) {
      dataToUpdate.role = updateData.role;
    }
    if (updateData.password !== undefined && updateData.password !== null && updateData.password !== '') {
      dataToUpdate.password = bcrypt.hashSync(updateData.password, 10);
    }

    const updatedUser = await prismaClient.user.update({
      where: { id },
      data: dataToUpdate,
    });

    return updatedUser; // Return the updated user object
  } catch (error) {
    throw error; // Re-throw the error to be handled by the controller
  }
};

export const deleteUser = async (id: string) => {
  try {
    const user = await prismaClient.user.findUnique({
      where: {
        id,
      },
    });
    if (user) {
      await prismaClient.user.delete({
        where: {
          id: id,
        },
      });
      return;
    } else {
      return;
    }
  } catch (error) {
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const allUsers = await prismaClient.user.findMany();
    return allUsers;
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (id: string | undefined) => {
  try {
    const user = await prismaClient.user.findUnique({
      where: {
        id: id,
      },
    });
    return user;
  } catch (error) {
    throw error;
  }
};

export const useGetUserByEmail = async (email: string) => {
  try {
    const user = await prismaClient.user.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  } catch (error) {
    throw error;
  }
};
