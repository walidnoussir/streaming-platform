import { body, validationResult } from "express-validator";
import { BadRequestError } from "./errorHandler.js";

export const withValidationErrors = (validateValues) => {
  return [
    ...validateValues,
    (req, res, next) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateRegister = withValidationErrors([
  body("username").notEmpty().withMessage("username is required"),

  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format"),

  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters"),
]);

export const validateLogin = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format"),

  body("password").notEmpty().withMessage("password is required"),
]);

export const validateVideo = withValidationErrors([
  body("url").notEmpty().withMessage("url is required"),
  body("videoOwner").notEmpty().withMessage("videoOwner is required"),
  body("videoPicture").notEmpty().withMessage("videoPicture is required"),
  body("duration").notEmpty().withMessage("duration is required"),
]);

export const validateComment = withValidationErrors([
  body("text").notEmpty().withMessage("text comment is required"),
  body("videoId").notEmpty().withMessage("videoId is required"),
]);
