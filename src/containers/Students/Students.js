import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../components/layout/Avatar/Avatar';
import { useFirestoreConnect, useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import Loading from '../../components/layout/Loading/Loading';

const students = () => {
  const firestore = useFirestore();
  const students = useSelector(state => state.firestore.ordered.students);
  console.log(students);

  useFirestoreConnect([
    {
      collection: "students",
      //orderBy: ["createdAt", "desc"],
    },
  ]);
  
  if (!students) {
    return <Loading />
  }

  const deleteStudent = async (id) => {
    //alert("Delete");
    try {
      await firestore.collection("students").doc(id).delete();      
    } catch (error) {
      console.log("Error:", error);      
    }
  }

    return ( 
        <div className="container">
            <div className="py-4">
                <div className="row">
                    {
                        // new Array(12).fill("").map((item, index) => 
                        students.map(student => (
                            <div className="col-lg-3 col-md-6 mb-4" key={student.id}>
                            <div className="card bg-light shadow text-center py-4">
                              {/* <Avatar url="https://i.pravatar.cc/150?img=3" /> */}
                              {/* <Avatar url="https://uifaces.co/api" /> */}
                              {/* <Avatar url="https:\/\/uifaces.co\/our-content\/donated\/YIcizIZe.jpg" /> */}
                              <Avatar url={`https://i.pravatar.cc/150?img=${student.id}`} />
                              <div className="card-body">
                                <h5 className="card-title mb-0">{student.name}</h5>
                                <p className="text-muted small">{student.email}</p>
                                <Link
                                  to={`/student/${student.id}`}
                                  className="btn btn-danger btn-profile"
                                >
                                  View Profile
                                </Link>
                                <button
                                  className="btn btn-edit" 
                                  onClick={() => deleteStudent(student.id)}
                                >
                                  <span className="material-icons">delete_outline</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))
                    }
                </div>                 
            </div>
        </div>
     );
};
 
export default students;