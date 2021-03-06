import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { courses } from "../../dummyData/courses";

const CourseSlider = () => {
  const [courseCount, setCourseCount] = useState(0);
  let showCourses = 3;
  let courseCopy = [...courses];

  const courseList = courseCopy.map((el) => (
    <div key={el.position} className="course-slider__course">
      <img className="course-slider__course--img" src={el.img} alt={el.name} />
      <div className="course-slider__course--bottom">
        <div className="course-slider__course--bottom--title">{el.title}</div>
        <div className="course-slider__course--bottom--author">
          by: {el.author}
        </div>
        <div className="course-slider__course--bottom--price">{el.price}</div>
        <input
          className="course-slider__course--bottom--button"
          type="submit"
          value="add to cart"
        />
      </div>
    </div>
  ));

  let activeList = [];
  showCourses === 3
    ? (activeList = [
        courseList[courseCount],
        courseList[courseCount + 1],
        courseList[courseCount + 2],
      ])
    : (activeList = [courseList[courseCount], courseList[courseCount + 1]]);

  return (
    <div className="course-slider">
      <div className="course-slider__title">Top Courses</div>
      <div className="course-slider__underline" />
      <div className="course-slider__container">
        <div className="course-slider__course--back">
          <FaArrowLeft />
        </div>
        <div className="course-slider__courses">{activeList} </div>
        <div className="course-slider__course--forward">
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default CourseSlider;
