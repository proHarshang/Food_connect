import React, { useState } from 'react'
import Button from '../common/Button'
import { useForm } from 'react-hook-form';
import { RiArrowLeftSLine } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Register = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='relative'>
            <div className="w-screen min-h-screen">

                <section className='flex sm:flex-col lg:flex-row gap-9 w-11/12 mx-auto mt-14'>
                    {/* img */}
                    <div className="w-1/2 bg-gray-400 h-[500px] rounded-md sticky mt-10 top-1"></div>

                    {/* form */}
                    <div className="w-1/2">
                        <h3 className='text-center font-semibold text-2xl'>Register as NGO</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form__group field">
                                <input type="text" className="form__field" placeholder="Name of Organization" {...register("nameOfOrganization")} />
                                <label htmlFor="Name of Organization" className="form__label">Name of Organization</label>
                            </div>

                            <h5 className='form_heading font-semibold mt-10'>Contact Info :</h5>
                            <div className="form__group field">
                                <input type="text" className="form__field" placeholder="Name Of primary contact person" {...register("NameOfThePrimaryContactPerson")} />
                                <label htmlFor="Name of the primary contact person" className="form__label">Name of the primary contact person</label>
                            </div>
                            <div className="form__group field">
                                <input type="text" className="form__field" placeholder="E-mail" {...register("email")} />
                                <label htmlFor="E-mail" className="form__label">E-mail</label>
                            </div>
                            <div className="form__group field">
                                <input type="text" className="form__field" placeholder="Contact Number" {...register("contactNumber")} />
                                <label htmlFor="Contact Number" className="form__label">Contact Number</label>
                            </div>

                            <h5 className='form_heading font-semibold mt-10'>Geographic Coverage :</h5>
                            <div className="flex items-end gap-3">
                                <div className='form__group w-1/2 field'>
                                    <select {...register("state")} className="form__field">
                                        <option value="" selected disabled>State</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Mumbai">Mumbai</option>
                                    </select>
                                </div>
                                <div className='form__group w-1/2 field'>
                                    <select {...register("city")} className="form__field">
                                        <option value="" selected disabled>City</option>
                                        <option value="Rajkot">Rajkot</option>
                                        <option value="Surat">Surat</option>
                                        <option value="Gandhinagar">Gandhinagar</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form__group field">
                                <input type="text" className="form__field" placeholder="Address" {...register("address")} />
                                <label htmlFor="Address" className="form__label">Address</label>
                            </div>

                            <h5 className='form_heading font-semibold mt-10'>Discription / Mission of Organization :</h5>
                            <div className="form__group field">
                                <textarea {...register("discription")} className="form__field" rows="3" placeholder='Discription'></textarea>
                                <label htmlFor="Discription" className="form__label">Discription</label>
                            </div>

                            <h5 className='form_heading font-semibold mt-10'>Social Links :</h5>

                            <div className='flex gap-4 items-baseline'>
                                <FaFacebookF />
                                <div className="form__group field w-full">
                                    <input type="text" className="form__field" placeholder="Facebook" {...register("facebook")} />
                                    <label htmlFor="Facebook" className="form__label">Facebook</label>
                                </div>
                            </div>
                            <div className='flex gap-4 items-baseline'>
                                <FaInstagram />
                                <div className="form__group field w-full">
                                    <input type="text" className="form__field" placeholder="Instagram" {...register("instagram")} />
                                    <label htmlFor="Instagram" className="form__label">Instagram</label>
                                </div>
                            </div>
                            <div className='flex gap-4 items-baseline'>
                                <FaXTwitter />
                                <div className="form__group field w-full">
                                    <input type="text" className="form__field" placeholder="Twitter / X" {...register("twitter")} />
                                    <label htmlFor="Twitter / X" className="form__label">Twitter / X</label>
                                </div>
                            </div>
                            <div className='flex gap-4 items-baseline'>
                                <FaGlobe />
                                <div className="form__group field w-full">
                                    <input type="text" className="form__field" placeholder="Organization's Website" {...register("organizationsWebsite")} />
                                    <label htmlFor="Organization's Website" className="form__label">Organization's Website</label>
                                </div>
                            </div>

                            <h5 className='form_heading font-semibold mt-10'>Logo or Visual Identity :</h5>
                            <div className="form__group field w-full">
                                <input type="file" {...register("logo")} />
                            </div>

                            <Button type='submit' className='my-8 w-full'>Sign Up</Button>
                        </form>

                    </div>
                </section>

            </div>
        </div>
    )
}

export default Register