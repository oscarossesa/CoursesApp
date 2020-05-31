import React, { useEffect, useState } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import * as courseActions from '../../redux/actions/courseActions'
import * as authorActions from '../../redux/actions/authorActions'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import CourseList from './CourseList'
import { Redirect } from 'react-router-dom'
import Spinner from '../common/Spinner'
import { toast } from 'react-toastify'
import { createSelector } from 'reselect'

const CoursesPage = () => {
  const [redirectToAddCoursePage, setRedirectToAddCoursePage] = useState(false)

  const dispatch = useDispatch()

  const loading = useSelector((state) => state.apiCallsInProgress > 0)
  const authors = useSelector((state) => state.authors)
  const courses = useSelector((state) =>
    authors.length === 0
      ? []
      : state.courses.map((course) => {
          return {
            ...course,
            authorName: authors.find((a) => a.id === course.authorId).name,
          }
          console.log('bb', bb)
        })
  )

  useEffect(() => {
    if (courses.length === 0) {
      dispatch(courseActions.loadCourses()).catch((error) => {
        alert('Loading courses failed' + error)
      })
    }

    if (authors.length === 0) {
      dispatch(authorActions.loadAuthors()).catch((error) => {
        alert('Loading authors failed' + error)
      })
    }
  }, [])

  const handleDeleteCourse = async (course) => {
    toast.success('Course deleted')
    try {
      await dispatch(courseActions.deleteCourse(course))
    } catch (error) {
      toast.error('Delete failed. ' + error.message, { autoClose: false })
    }
  }

  return (
    <>
      {redirectToAddCoursePage && <Redirect to="/course" />}
      <h2>Courses</h2>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <button
            style={{ marginBottom: 20 }}
            className="btn btn-primary add-course"
            onClick={() => setRedirectToAddCoursePage(true)}
          >
            Add Course
          </button>

          <CourseList onDeleteClick={handleDeleteCourse} courses={courses} />
        </>
      )}
    </>
  )
}

CoursesPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default CoursesPage
