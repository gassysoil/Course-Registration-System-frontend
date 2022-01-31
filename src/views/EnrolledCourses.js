import React, {useEffect, useState} from 'react'
import {CourseService} from "../service/CourseService";
import CourseTable from "../components/CourseTable";

export default function EnrolledCourses() {
   const [courses, setCourses] = useState([]);
   useEffect(() => {
      CourseService.getStudentCourses().then(response => {
         setCourses(response.data);
      }).catch(error => {
         console.log(error);
      })
   }, [])

   return (
       <div>
          <CourseTable courses={courses}
                       buttonLabel = "Drop"
                       buttonColor = "error"
                       handleButtonClick = {dropCourse}
          />
       </div>
   );

   function dropCourse(courseName) {
      CourseService.deleteCourse(courseName).then(response => {
         alert(`${courseName} dropped successfully!`);
         window.location.reload();
      }).catch(error => {
         console.error(error);
         alert(`${courseName} dropped failed!`);
      })
   }
}



//// class-based
// import React from 'react'
// import {CourseService} from "../service/CourseService";
// import CourseTable from "../components/CourseTable";
//
// export default class EnrolledCourses extends React.Component{
//    state = {
//       courses: []
//    }
//
//    componentDidMount(){
//       CourseService.getStudentCourses().then(response => {
//          this.setState({
//             courses: response.data
//          })
//       }).catch(error => {
//          console.log(error)
//       });
//    }
//
//    render(){
//       return(
//           <div>
//              <CourseTable courses={this.state.courses}
//                           buttonLabel = "Drop"
//                           buttonColor = "error"
//                           handleButtonClick = {this.dropCourse}
//              />
//           </div>
//       )
//    }
//
//    dropCourse(courseName) {
//       CourseService.deleteCourse(courseName).then(response => {
//          alert(`${courseName} dropped succesffully!`);
//          window.location.reload();
//       }).catch(error => {
//          console.error(error);
//          alert(`${courseName} dropped failed!`);
//       })
//    }
// }