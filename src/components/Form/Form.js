
import React, {useState} from "react";
import "./Form.css"
function Form(props) {
    const [form, updateForm] = useState({name:"",age:""});
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        props.formSubmit(form);
    }
    const handleChange = (e)=>{
        updateForm(st=> {return {...st,[e.target.name]:e.target.value}})
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label>Name</label>
                    <br/>
                    <input type="text" name="name" value={form.name} onChange={handleChange}></input>
                </div>

                <div className="form-control">       
                    <label>Age</label>
                    <br/>
                    <input type="number" className="form-control"  name="age" value={form.age} onChange={handleChange}></input>
                </div>
                <button className="form-button">Submit</button>
            </form>
        </div>
    )
}

export default Form;