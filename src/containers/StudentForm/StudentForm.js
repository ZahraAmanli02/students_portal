import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import Input from '../../components/layout/Input/Input';
import { useFirestore } from 'react-redux-firebase';

const studentForm = () => {
    let history = useHistory();
    const firestore = useFirestore();
    const { id } = useParams();
    const docRef = id ? firestore.collection("students").doc(id) : null;
    const [ student, setStudent ] = useState({
        name: "",
        email: "",
        phone: "",
        class: "",
        address1: "",
        address2: "",
    });
    const onInputChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (id) {
            loadStudent();
        }
    }, [id]);

    //UPDATE !!
    const loadStudent = async () => {
        try {
            // const docRef = firestore.collection("students").doc(id);
            const result = await docRef.get();
            if (result.exists) {
                setStudent(result.data());
            } else {
                console.log("No find a student!!");
            }
        } catch (error) {
            console.log("Error:", error);            
        }
    };

    const submitForm = async (e) => {
        e.preventDefault();

        if (id) {
            //UPDATE STUDENT..
            //alert("update");
            await docRef.update({ ...student, updatedAt: firestore.FieldValue.serverTimestamp() });  
        } else {
            //ADD NEW STUDENT..
            //alert("add");
            firestore.collection("students")
            .add({ ...student, createdAt: firestore.FieldValue.serverTimestamp() });
        }
        history.push("/");
    };
    return ( 
        <div className="container">
            <div className="py-4">
                <div className="row ">
                    <div className="col-md-10 mx-auto">
                        <div className="card card-body shadow">
                            <form onSubmit={submitForm}>
                            <div className="form-row form-group mb-4">
                                <div className="col-md-6">
                                    <Input
                                        type="text"
                                        placeholder="Enter Student Name"  
                                        name="name"
                                        value={student.name}
                                        onChange={onInputChange}  
                                    />
                                    {/* <input
                                        type="text"
                                        placeholder=""
                                        name="name"
                                        className="form-control"
                                        value={student.name}
                                        onChange={onInputChange}
                                    /> */}
                                </div>
                                <div className="col-md-6">
                                    <Input
                                        type="email"
                                        placeholder="Enter Student Email"  
                                        name="email"
                                        value={student.email}
                                        onChange={onInputChange}  
                                    />  
                                    {/* <input
                                        type="email"
                                        placeholder="Enter Student email"
                                        name="email"
                                        className="form-control"
                                        value={student.email}
                                        onChange={onInputChange}
                                    /> */}
                                </div>
                                </div>
                                <div className="form-row form-group mb-4">
                                <div className="col-md-6">
                                    <Input
                                        type="text"
                                        placeholder="Enter Student Phone"  
                                        name="phone"
                                        value={student.phone}
                                        onChange={onInputChange}  
                                    />  
                                    {/* <input
                                        type="text"
                                        placeholder="Enter Student phone"
                                        name="phone"
                                        className="form-control"
                                        value={student.phone}
                                        onChange={onInputChange}
                                    /> */}
                                </div>
                                <div className="col-md-6">
                                    <Input
                                        type="text"
                                        placeholder="Enter Student Class"  
                                        name="class"
                                        value={student.class}
                                        onChange={onInputChange}  
                                    />  
                                    {/* <input
                                        type="text"
                                        placeholder="Enter Student class"
                                        name="class"
                                        className="form-control"
                                        value={student.class}
                                        onChange={onInputChange}
                                    /> */}
                                </div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col-md-6">
                                        <Input
                                            type="text"
                                            placeholder="Enter Student Address1"  
                                            name="address1"
                                            value={student.address1}
                                            onChange={onInputChange}  
                                        />
                                        {/* <input
                                            type="text"
                                            placeholder="Enter Student address1"
                                            name="address1"
                                            className="form-control"
                                            value={student.address1}
                                            onChange={onInputChange}
                                        /> */}
                                    </div>
                                    <div className="col-md-6">
                                        <Input
                                            type="text"
                                            placeholder="Enter Student Address2"  
                                            name="address2"
                                            value={student.address2}
                                            onChange={onInputChange}  
                                        />
                                        {/* <input
                                            type="text"
                                            placeholder="Enter Student address2"
                                            name="address2"
                                            className="form-control"
                                            value={student.address2}
                                            onChange={onInputChange}
                                        /> */}
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-danger">  
                                    {id ? "Update Student" : "Add Student"}                          
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default studentForm;