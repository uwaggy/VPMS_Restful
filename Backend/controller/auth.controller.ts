// controller/auth.controller.ts
import { NextFunction, Request, Response } from "express";
import { createUser, useGetUserByEmail } from "../service/user.service";
import jwt, { Secret } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { createUserSchema } from "../dto/user.dto";
import { loginSchema } from "../dto/auth.dto";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const parsed = createUserSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({
        message: "Invalid registration data",
        errors: parsed.error.format(),
      });
      return;
    }

    const newUser = await createUser(parsed.data);
    const token = jwt.sign(
      { id: newUser.id, role: newUser.role },
      process.env.JWT_SECRET as Secret,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      message: "User created successfully",
      user: newUser,
      token,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const parsed = loginSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({
        message: "Invalid login credentials",
        errors: parsed.error.format(),
      });
      return;
    }

    const { email, password } = parsed.data;
    const user = await useGetUserByEmail(email);

    if (!user) {
      res.status(403).json({ message: "Invalid credentials" });
      return;
    }

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      res.status(403).json({ message: "Invalid credentials" });
      return;
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET as Secret,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      message: "Logged in successfully",
      user,
      token,
    });
  } catch (error) {
    next(error);
  }
};
