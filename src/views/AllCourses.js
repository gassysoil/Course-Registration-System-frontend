import React from 'react'
import CourseTable from '../components/CourseTable'
import { CourseService } from '../service/CourseService'

export default class AllCourses extends React.Component{
   state = {
      courses: []
   }

   componentDidMount(){
      CourseService.getAllCourses().then(response => {
         this.setState({
            courses: response.data
         })
      }).catch(error => {
         console.log(error)
      });
   }

   render(){
      return(
         <div>
            <CourseTable courses={this.state.courses}
                         buttonLabel = "Enroll"
                         buttonColor = "primary"
                         handleButtonClick = {this.enrollCourse}
            />
         </div>
      )
   }

   enrollCourse(courseName) {
      CourseService.selectCourse(courseName).then(response => {
         alert(`${courseName} enrolled succesffully!`);
         window.location.reload();
      }).catch(error => {
         console.error(error);
         alert(`${courseName} enrolled failed!`);
      })
   }
}