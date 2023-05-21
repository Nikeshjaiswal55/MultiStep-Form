import React, { useEffect, useState } from 'react';


const Step2 = ({ props }) => {
    const [refetch, setRefetch] = useState([])
    const [data, setData] = useState([]);
    const [input_task, setInput_task] = useState("");
    // const [tsk, setTask] = useState([...tasks]);
    const [tsk, setTask] = useState([]);

    useEffect(() => {
        const tasks = ["Marketing Website Design", "Branding Design", "UI/UX Fundamentals", "Wireframe and Prototyping", "Style Guide", "UX Research and Flows", "Layout Design"]
        localStorage.setItem("tsk", JSON.stringify(tasks));
    }, [])

    useEffect(() => {
        let data = localStorage.getItem("tsk");
        data = JSON.parse(data)
        setTask(data)
    }, [refetch])

    const add = () => {
        if (input_task) {
            // const temp = [...tasks]
            const temp = [...tsk]
            temp.push(input_task)
            setTask(temp)
            setInput_task("")
            alert("taska added")
            console.log(temp)
        }
    }

    function add_to_field(e) {
        if (e.target.checked) {
            const temp = [...data]
            temp.push(e.target.value)
            props.setFieldValue("task", temp)
            setData(temp)
        }
        else if (!e.target.unchecked) {
            // data.pop();/
            let tem = data.filter(item => item !== e.target.value)
            setData(tem)
            props.setFieldValue("task", tem)
        }
        else if (data.length === 0) {
            console.log(data.length)
            props.setFieldValue("task", "")
        }
    }

    function delete_task(index) {
        const temp = [...tsk];
        console.log("index", index)
        temp.splice(index, 1);
        localStorage.setItem("tsk", JSON.stringify(temp));
        // setTask(temp)
        setRefetch(temp)
    }

    return (
        <>
            <div className='row'>
                <p className='py-2 m-0'>Project Name</p>
                <span className='d-flex'><input type="text" value={input_task} onChange={(e) => setInput_task(e.target.value)} className="form-control" placeholder="Enter project name here" /><button className='btn btn-primary w-25 add__btn' type='button' onClick={add}>Add</button></span>
            </div>
            <div className='p-4 bg-light overflow-auto over__div' id='style-1'>
                {tsk?.map((item, index) => (<>
                    <div className='mb-0 d-flex align-items-center student__list' key={index} style={(props.errors.task && props.touched.task) ? { border: "1px solid red" } : {}}>
                        <div className='col d-flex align-items-center justify-content-between w-100'>
                            <div className='d-flex align-items-center'>
                                <input type='checkbox' value={item} onChange={(e) => add_to_field(e)}></input>
                                <p className='mt-2 px-3 stu___name'>{item}</p>
                            </div>
                            <div>
                                <button className='cancel' type='button' onClick={() => delete_task(index)}>X</button>
                            </div>
                        </div>
                    </div>
                    <hr style={{ borderBottom: "1px solid #5A607F" }} className='p-0 m-0'></hr>
                </>
                ))}
            </div>

        </>
    );
};

export default Step2;