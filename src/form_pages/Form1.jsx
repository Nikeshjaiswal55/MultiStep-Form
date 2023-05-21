import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from "yup";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Form1.css"
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const Form1 = () => {
    const [step, setStep] = useState(1)

    const initialvalue = {
        project_name: "",
        client_name: "",
        date1: "",
        date2: "",
        notes: "",
        view: "",
        leader: "",
        task: ""
    }

    const validationSchema = [
        yup.object().shape({
            project_name: yup.string().required(),
            client_name: yup.string().required(),
            date1: yup.string().required(),
            date2: yup.string().required(),
            notes: yup.string().required(),
        }),
        yup.object().shape({
            task: yup.string().required(),
        }),
        yup.object().shape({
            leader: yup.string().required(),
        }),
        yup.object().shape({
            view: yup.string().required(),
        }),
    ]

    const currentValidationSchema = validationSchema[step - 1];

    const submit = (value, { setSubmitting }) => {
        if (step === 4) {
            console.log("value", value)
            localStorage.setItem("form_data",JSON.stringify(value))
            alert("submit successful");
        }
        else {
            setStep((prev) => prev + 1)
            setSubmitting(false)
        }
    }


    return (
        <>
            <div className='container-fluid'>
                <div className="modalBackground">
                    <div className="modalContainer">
                        <div className="titleCloseBtn d-flex justify-content-center">
                            {step === 1 && <div>
                                <h4 style={{color:"#1c1c1c"}}>Create a project</h4>
                            </div>}
                            {step === 2 && <div>
                                <h4 style={{color:"#1c1c1c"}}>Tasks</h4>
                            </div>}
                            {
                                step === 3 && 
                                <div className="d-block justify-content-center">
                                    <div>
                                        <h4 className='text-center head_h'  style={{color:"#1c1c1c"}}>Who can manage projects</h4>
                                    </div>
                                    <div>
                                        <p className='text-center head_p'>Don't panic - You can also customize this permission in settings</p>
                                    </div>
                                </div>
                            }
                            {
                                step === 4 && <div className='d-flex flex-column justify-content-center'> <div>
                                    <h4 className='text-center'  style={{color:"#1c1c1c"}}>Select a view</h4>
                                </div>
                                    <div>
                                        <p className='text-center'>You Can also cutomize this view in settings</p>
                                    </div></div>
                            }
                        </div>
                        <Formik initialValues={initialvalue} validationSchema={currentValidationSchema} onSubmit={submit}>{
                            (props) => (
                                <form onSubmit={props.handleSubmit}>
                                    <div className='body-div' id="style-2">
                                        {step === 1 && <Step1 props={props} />}
                                        {step === 2 && <Step2 props={props} />}
                                        {step === 3 && <Step4 props={props} />}
                                        {step === 4 && <Step3 props={props} />}
                                    </div>
                                    <div className='d-flex align-items-center py-4'>
                                        <div className='d-flex align-items-center pointer_cursor'>
                                            <i className="fa-sharp fa-solid fa-angle-left" style={{ color: "#939ba8" }} />
                                            <p className='m-0 px-2' style={{ color: "#939ba8" }} onClick={() => (step > 1) ? setStep((pre) => pre - 1) : ""}>Back</p>
                                        </div>
                                        <div className='d-flex justify-content-center w-100'>
                                            <button className='btn btn-primary btn-size m-0 align-self-center pointer_cursor' type='subbmit'>{(step === 4) ? "Submit" : "Next"}</button>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        
                                        <div className='step__circle mx-1' style={(step === 1) ? { width: "20px", borderRadius: "30px", backgroundColor: "#8c94a1" } : {}}></div>
                                        <div className='step__circle mx-1' style={(step === 2) ? { width: "20px", borderRadius: "30px", backgroundColor: "#8c94a1" } : {}}></div>
                                        <div className='step__circle mx-1' style={(step === 3) ? { width: "20px", borderRadius: "30px", backgroundColor: "#8c94a1" } : {}}></div>
                                        <div className='step__circle mx-1' style={(step === 4) ? { width: "20px", borderRadius: "30px", backgroundColor: "#8c94a1" } : {}}></div>
                                    </div>
                                </form>
                            )
                        }
                        </Formik>

                    </div>
                </div>
            </div>
        </>
    );
};


export default Form1;