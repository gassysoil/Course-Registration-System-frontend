import axios from '../axios'
//../axios --> 从当前目录的上一层的 axios 来
//可以直接写path，不用谢 url，因为后端 url 已经通过 axios 倒入了

export const CourseService = {
   getAllCourses: function(){
      return axios.get('/api/courses');
   },
   selectCourse: function(courseName){
      courseName = encodeURI(courseName);//如果课程名字有特殊符号，需要encodeURI 避免报错
      return axios.post(`/api/student/course/${courseName}`);
   },
   getStudentCourses: function() {
      return axios.get('api/student/courses');
   },
   deleteCourse: function(courseName) {
      courseName = encodeURI(courseName);
      return axios.delete(`/api/student/course/${courseName}`);
   }
}