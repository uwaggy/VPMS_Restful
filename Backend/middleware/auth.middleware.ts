import jwt, { Secret } from "jsonwebtoken";
import { getUserById } from "../service/user.service";
import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { ZodSchema } from "zod";


interface JwtPayload {
  id: string;
  role: string;
}

export const checkToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(403).json({ message: "No token provided" });
    return; // just return void, do NOT return res
  }

  const token = authHeader.substring(7); // strip "Bearer "
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as Secret
    ) as JwtPayload;
    const user = await getUserById(decoded.id);
    if (!user) {
      res.status(403).json({ message: "Invalid token" });
      return;
    }
    
    // @ts-ignore
    req.user = user;
    next();
  } catch {
    res.status(403).json({ message: "Invalid or expired token" });
    return;
  }
};

export const validate =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      // Send response but don't return it
      res.status(400).json({
        message: "Invalid data",
        errors: result.error.format(),
      });
      return; // just return void here, don't return res
    }

    req.body = result.data;
    next();
  };

export const checkAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  await checkToken(req, res, async () => {
    // @ts-ignore
    if (req.user.role !== "ADMIN") {
      res.status(403).json({ message: "Unauthorized" });
      return;
    }
    next();
  });
};
