import AppController from '../controllers/AppController'
import StudentController from '../controllers/StudentsController'

const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/student', StudentController.getAllStudents);
  app.get('students/:major', StudentController.getStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
