import React from 'react';

const Step3 = ({props}) => {
    return (
        <div>
            <div className='d-sm-flex justify-content-sm-around pt-3 w-100'>
                <div className='box__div' onClick={()=>props.setFieldValue("view","list")} >
                    <div className="option__box my-1 d-flex justify-content-center" tabIndex="1" style={(props.errors.view && props.touched.view)?{border:"1px solid red"}:(props.values.view==="list")?{border:"3px solid blue"}:{}}>
                        <i className="fa-solid fa-table-list"></i>
                    </div>
                    <div className='text-center title__box'>List</div>
                </div>
                <div className='box__div' onClick={()=>props.setFieldValue("view","Board")} >
                    <div className="option__box my-1 d-flex justify-content-center" tabIndex="2" style={(props.errors.view && props.touched.view)?{border:"1px solid red"}:(props.values.view==="Board")?{border:"3px solid blue"}:{}}>
                        {/* <i class="fa-solid fa-table-list"></i> */}
                        <i className="fa-sharp fa-regular fa-rectangle-list"></i>
                    </div>
                    <div className='text-center title__box'>Board</div>
                </div>
            </div>
        </div>
    );
};

export default Step3;