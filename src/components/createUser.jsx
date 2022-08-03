import React from "react";
import "./excercises.css";
import { useForm } from "react-hook-form";

export const CreateUser = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({defaultValues: {
    name : "",
    email : "",
    age: "",
    passward: ""
  }});

  console.log(watch("age"));

  return (
    <div className="form">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div className="mb-3">
          <label>UserName</label>
          <input
            type={"text"}
            {...register("name", { required: "This field is required" })}
            className="form-control"
            placeholder="required"
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type={"text"}
            {...register("email", { required: "This field is required" })}
            className="form-control"
            placeholder="required"
          />
          {errors.name?.message}
          
        </div>
        <div className="mb-3">
          <label>Age</label>
          <input
            type={"number"}
            {...register("age", {required:"required field" , min:18 , max: 90, 
            maxLength:{value: "3", message: "max length exceed"}})}
            className="form-control"
            
          />
         <p>{errors.age?.message}</p> 
       
        </div>
        <div className="mb-3">
          <label>Passward</label>
          <input
            type="password"
            {...register("passward", {
              required: "This field is required",
              minLength: { value: 5, message: "enter at least 5 characters" },
            })}
            className="form-control"
            placeholder="required"
          />
           <p>{errors.passward?.message}</p> 

        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
