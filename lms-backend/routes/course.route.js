import { Router } from "express";
import {
  addLectureToCourseById,
  createCourse,
  deleteLectureFromCourse,
  getAllCourses,
  getLecturesId,
  updateCourseById,
} from "../controllers/course.controller.js";
import {
  authorizeRoles,
  authorizeSubscribers,
  isLoggedIn,
} from "../middlewares/auth.middlewares.js";
import upload from "../middlewares/multer.middleewares.js";

const router = Router();

router
  .route("/")
  .get(getAllCourses)
  .post(
    isLoggedIn,
    authorizeRoles("ADMIN"),
    upload.single("thumbnail"),
    createCourse
  )
  .delete(isLoggedIn, authorizeRoles("ADMIN"), deleteLectureFromCourse);

router
  .route("/:id")
  .get(isLoggedIn, authorizeSubscribers, getLecturesId)
  .post(
    isLoggedIn,
    authorizeRoles("ADMIN"),
    upload.single("lecture"),
    addLectureToCourseById
  )
  .put(isLoggedIn, authorizeRoles("ADMIN"), updateCourseById);

export default router;
