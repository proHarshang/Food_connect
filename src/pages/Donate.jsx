import React from 'react'
import { useForm } from 'react-hook-form';
import Button from '../common/Button';

const Donate = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <div className='donate_herosection w-full relative flex items-center justify-center bg-black h-56'>
                <h1 className="text-white font-bold text-center text-5xl">Be A Part of Us</h1>
            </div>
            <h2 className='mx-auto my-10 text-center w-full text-black text-3xl'>Let's Donate</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='w-11/12 mx-auto max-w-[600px]'>
                <div className="form__group field">
                    <input type="text" className="form__field" placeholder="Name" {...register("name")} />
                    <label htmlFor="Name" className="form__label">Name</label>
                </div>
                <div className="form__group field">
                    <input type="tel" className="form__field" placeholder="number" {...register("number")} />
                    <label htmlFor="number" className="form__label">Number</label>
                </div>
                <div className="form__group field">
                    <input type="email" className="form__field" placeholder="email" {...register("email")} />
                    <label htmlFor="email" className="form__label">Email</label>
                </div>
                <h5 className='form_heading font-semibold mt-10'>Location :</h5>
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
                    <textarea {...register("address")} className="form__field" rows="3" placeholder='Address'></textarea>
                    <label htmlFor="Address" className="form__label">Address</label>
                </div>
                <h5 className='form_heading font-semibold mt-10'>Food details :</h5>
                <div className="form__group field">
                    <textarea {...register("discription")} className="form__field" rows="3" placeholder='Discription'></textarea>
                    <label htmlFor="discription" className="form__label">Discription</label>
                </div>
                <div className='my-8 space-y-2'>
                    <div className='space-x-3'>
                        <input type="radio" className="form__field" {...register("veg_nonveg")} />
                        <label htmlFor="email" >Veg</label>
                    </div>
                    <div className='space-x-3'>
                        <input type="radio" className="form__field" {...register("veg_nonveg")} />
                        <label htmlFor="email">Non Veg</label>
                    </div>
                </div>
                <h5 className='form_heading font-semibold mt-10'>Date of food cooked :</h5>
                <div className="form__group field">
                    <input type="date" className="form__field" {...register("cookedDate")} />
                </div>
                <Button className="my-10 w-full">Donate</Button>
            </form>
        </>
    )
}

export default Donate