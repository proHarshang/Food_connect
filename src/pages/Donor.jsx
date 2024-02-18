import React from 'react'
import { IoSearch } from "react-icons/io5";
import DonorCard from '../components/DonorCard';

const Ngo = () => {
    return (
        <>
            <section className='container mx-auto w-screen flex justify-between items-center my-12'>
                <h1 className='font-semibold text-3xl whitespace-nowrap'>Top Donors</h1>
                <form className='flex w-2/5 border-b-2 border-black py-3'>
                    <input type="text" placeholder='Search Donors' className='w-full border-0 px-3' />
                    <button type="submit" className='p-1 w-fit'><IoSearch /></button>
                </form>
            </section>

            <section className="w-screen px-4 lg:px-6 flex flex-wrap justify-center gap-8">
                <DonorCard />
                <DonorCard />
                <DonorCard />
                <DonorCard />
                <DonorCard />
                <DonorCard />
                <DonorCard />
                <DonorCard />
                <DonorCard />
            </section>
        </>
    )
}

export default Ngo