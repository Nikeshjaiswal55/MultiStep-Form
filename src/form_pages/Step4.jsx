import React from 'react';

const Step4 = ({props}) => {
    return (
        <>
            <div className='manage__box px-4 d-flex flex-column flex-sm-row align-items-center ' onClick={()=>props.setFieldValue("leader","everyone")} tabIndex="1" style={(props.errors.leader)?{border:"1px solid red"}:(props.values.leader==="everyone")?{border:"2px solid blue"}:{}}>
                <div className='py-2 py-sm-0'>
                    <i className="fa-regular fa-clock icons__inner"></i>
                </div>
                <div className='d-block align-items-center px-3'>
                    <h6 className='test_h p-0 m-0'><strong>Everyone</strong> </h6>
                    <p className='text_p p-0 m-0'>All users can now to see it, but guest cannot access the projects.</p>
                </div>
            </div>
            <div className='manage__box px-4 d-flex flex-column flex-sm-row align-items-center' onClick={()=>props.setFieldValue("leader","Admin")} tabIndex="2" style={(props.errors.leader)?{border:"1px solid red"}:(props.values.leader==="Admin")?{border:"2px solid blue"}:{}}>
                <div className='py-2 py-sm-0'>
                    <i className="fa-regular fa-circle-user icons__inner"></i>
                </div>
                <div className='d-block px-3'>
                    <h6 className='test_h p-0 m-0'><strong>Only Admin's</strong> </h6>
                    <p className='text_p p-0 m-0'>Only admins can manage everything.</p>
                </div>
            </div>
            <div className='manage__box px-4 d-flex flex-column flex-sm-row align-items-center' onClick={()=>props.setFieldValue("leader","Specific-people")} tabIndex="3" style={(props.errors.leader)?{border:"1px solid red"}:(props.values.leader==="Specific-people")?{border:"2px solid blue"}:{}}>
                <div className='py-2 py-sm-0'>
                    <i className="fa-solid fa-user-group icons__inner"></i>
                </div>
                <div className='d-block px-3'>
                    <h6 className='test_h p-0 m-0'><b>Only to Specific people</b> </h6>
                    <p className='text_p p-0 m-0'>Only some specific people can able to see it.</p>
                </div>
            </div>
        </>
    );
};

export default Step4;