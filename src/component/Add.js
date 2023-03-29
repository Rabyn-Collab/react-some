import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup";
import { Textarea, Select, Option, Checkbox, Radio, } from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { nanoid } from '@reduxjs/toolkit';
import { addUser } from '../features/userSlice';


const Add = () => {


  const nav = useNavigate();
  const dispatch = useDispatch();
  const valSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    username: Yup.string().min(5, 'too short').max(20, 'max character 20').required(),
    msg: Yup.string().min(10, 'too short').max(200, 'max character exceed').required(),
    country: Yup.string().required(),
    program: Yup.array().min(1, 'content require').required(),
    gender: Yup.string().required(),
    image: Yup.mixed()
      .required("Please upload an image")
      .test("fileFormat", "Unsupported file format", (value) =>
        value ? ["image/jpeg", "image/png", "image/jpg"].includes(value.type) : true
      )
    // .test("fileSize", "File size too large", (value) =>
    //   value ? value.size <= 1048576 : true
    // ),
  });



  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      msg: '',
      country: '',
      program: [],
      gender: '',
      id: nanoid(),
      image: null,
      imageUrl: ''
    },
    onSubmit: (val, { resetForm }) => {
      dispatch(addUser(val));
      nav(-1);

    },
    validationSchema: valSchema
  });


  const checkData = [
    { label: 'Java', color: 'green', value: 'java' },
    { label: 'Python', color: 'blue', value: 'python' },
    { label: 'React', color: 'red', value: 'react' },
    { label: 'Node', color: 'purple', value: 'node' },
  ];

  const radioData = [
    { label: 'Male', color: 'green', value: 'male' },
    { label: 'Female', color: 'red', value: 'female' },
    { label: 'Other', color: 'teal', value: 'other' },
  ];



  return (
    <div className='p-2'>

      <form onSubmit={formik.handleSubmit} className='max-w-3xl  px-10 pt-2 space-y-3 shadow-2xl' >

        <div>
          <div>
            <label htmlFor="email">Email</label>
          </div>

          <input type="email"
            placeholder='email'
            id='email'
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            className='outline-none border border-brown-400 px-2 py-1 rounded-md'
          />

          {formik.errors.email && formik.touched.email ? <h1>{formik.errors.email}</h1> : null}
        </div>




        <div>
          <div>
            <label htmlFor="username">Username</label>
          </div>
          <input type="username"
            placeholder='username'
            id='username'
            name='username'
            onChange={formik.handleChange}
            value={formik.values.username}
            className='outline-none border border-brown-400 px-2 py-1 rounded-md'
          />
          {formik.errors.username && formik.touched.username ? <h1>{formik.errors.username}</h1> : null}
        </div>



        <div className="w-72">
          <Select label="Select Your Country" name='country'
            error={formik.errors.country && formik.touched.country ? true : false}
            onChange={(e) => formik.setFieldValue('country', e)}>
            <Option value='nepal'>Nepal</Option>
            <Option value='usa'>USA</Option>
            <Option value='japan'>Japan</Option>
            <Option value='india'>India</Option>
          </Select>

          {formik.errors.country && formik.touched.country ? <h1>{formik.errors.country}</h1> : null}

        </div>


        <div className='space-y-2'>
          <label htmlFor="message">Your Message</label>
          <Textarea
            id='message'
            label="Message"
            value={formik.values.msg}
            onChange={formik.handleChange}
            name='msg'
          />
        </div>

        <div className="flex w-max gap-4">
          {checkData.map((d) => {
            return <Checkbox color={d.color} key={d.color} value={d.value} label={d.label} onChange={formik.handleChange} name='program' />;
          })}
        </div>

        <div className="flex gap-10">
          {radioData.map((d) => {
            return <Radio color={d.color} key={d.color} value={d.value} label={d.label} onChange={formik.handleChange} name='gender' />;
          })}
        </div>

        <div className='space-y-2'>
          <label className='block' htmlFor="image">Select Image</label>
          <input
            type="file"
            name='image'
            id='image'

            accept='image/*'
            onChange={(e) => {
              const file = e.target.files[0];
              formik.setFieldValue('image', file);
              // const simple = URL.createObjectURL(file);
              // formik.setFieldValue('imageUrl', simple);
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.addEventListener('load', () => {
                formik.setFieldValue('imageUrl', reader.result);
              });
            }}
          />


          {formik.errors.image && formik.touched.image ? <h1>{formik.errors.image}</h1> : null}

          {formik.values.imageUrl && <img className='h-[200px] my-4' src={formik.values.imageUrl} alt="" />}

        </div>

        <button type='submit' className='bg-blue-300 px-20 py-1 '>Submit</button>



      </form>


    </div>
  )
}

export default Add