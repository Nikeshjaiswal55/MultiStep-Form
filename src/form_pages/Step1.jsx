import React, { useState } from 'react';

const Step1 = ({ props }) => {
    const arr = ["client1", "client2"]
    const [clients, setClients] = useState([...arr]);
    const [client_value, setClient_value] = useState("");
    const [show, setshow] = useState(false);


    const addvalue = () => {
        if (client_value) {
            const temp = [...clients]
            temp.push(client_value)
            setClients(temp)
            setshow(false)
            setClient_value("")
        }
    }


    return (
        <>
            <div className='row'>
                <p className='py-2 m-0'>Project Name</p>
                <input className="form-control col-12" style={(props?.errors.project_name && props.touched.project_name) ? { border: "1px solid red" } : {}} name="project_name" type="text" placeholder="Enter project name here" value={props.values.project_name} onChange={props.handleChange} onBlur={props.handleBlur} />
            </div>
            <div className='row'>
                <p className='py-2 m-0'>Client</p>
                <div className='row p-0 pb-1'>
                    <div className='col-12 col-sm-7'>
                        <select className="form-select" name="client_name" style={(props.errors.client_name && props.touched.client_name) ? { border: "1px solid red" } : {}} value={props.values.client_name} onChange={(e) => props.setFieldValue("client_name", e.target.value)} onBlur={props.handleBlur} >
                        <option value="">Select option</option>
                            {
                                clients?.map((item,index) => 
                                    <option value={item} key={index}>{item}</option>
                                )}
                        </select>
                    </div>
                    <div className='col-12 col-sm-1 d-flex align-items-center justify-content-center'>
                        <p className='p-0 m-0'>or</p>
                    </div>
                    <div className="client-border text-center pointer_cursor col-12 col-sm-4" onClick={() => setshow(true)}><i className="fa-sharp fa-solid fa-plus px-1" />New Client</div>
                </div>
            </div>
            <div className='row justify-content-around' style={(!show) ? { display: "none" } : { display: "flex" }}>
                <div className='col-9'>
                    <input className="form-control" value={client_value} onChange={(e) => setClient_value(e.target.value)} />
                </div>
                <div className='col-2'>
                    <button type='button' className='btn btn-primary' onClick={addvalue}>Add</button>
                </div>
            </div>
            <div>
                <p className='py-2 m-0'>Dates</p>
                <div className='d-sm-flex'>
                    <input type="date" name='date1' style={(props.errors.date1 && props.touched.date1) ? { border: "1px solid red" } : {}} value={props.values.date1} onChange={props.handleChange} onBlur={props.handleBlur} className="form-control pointer_cursor margin-right mb-2 mb-sm-0" />
                    <input type="date" name='date2' style={(props.errors.date2 && props.touched.date2) ? { border: "1px solid red" } : {}} value={props.values.date2} onChange={props.handleChange} onBlur={props.handleBlur} className="form-control pointer_cursor" />
                </div>
            </div>
            <div>
                <p className='py-2 m-0'>Notes</p>
                <textarea className="form-control textarea-height" style={(props.errors.notes && props.touched.notes) ? { border: "1px solid red" } : {}} name='notes' value={props.values.notes} onChange={props.handleChange} onBlur={props.handleBlur} placeholder="optional" />
            </div>
        </>
    );
};

export default React.memo(Step1);