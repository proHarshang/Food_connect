import React from 'react'
import HeroSwiper from '../components/HeroSwiper'
import NGOsSwiper from '../components/NGOsSwiper'
import DonorsSwiper from '../components/DonorsSwiper'

const Home = () => {
    return (
        <>
            <HeroSwiper />

            <h2 className='text-4xl font-bold text-center my-[20vh] mx-auto'>Lorem ipsum, dolor sit amet consectetur<br /> adipisicing elit. Magni, fugiat!</h2>

            <section className="flex sm:flex-col lg:flex-row items-center gap-x-16 px-11">
                <div className="bg-gray-500 sm:w-full lg:w-1/2 h-[500px] rounded-md"></div>
                <div className='sm:w-full lg:w-1/2'>
                    <h3 className='font-bold text-3xl mb-4'>What We Do?</h3>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, ipsam. Totam excepturi esse consequatur quia eaque a architecto consequuntur voluptatibus placeat ipsam aperiam quod, vel, repudiandae veritatis deleniti corporis blanditiis. Minima excepturi repudiandae suscipit earum dignissimos laborum, nesciunt iste nihil accusamus recusandae nemo vitae qui autem dolor quae voluptate alias? Optio corrupti non minus consequuntur quibusdam nemo, nisi earum dolorum, facilis distinctio inventore ratione eos numquam incidunt similique dicta temporibus. Ipsam, totam sint. Optio iure aut sint libero vitae molestiae at voluptatum, tempora hic asperiores deserunt ipsum, magni nobis! Nostrum doloremque autem blanditiis, qui aliquam id totam laborum labore error asperiores, corporis ducimus, animi repudiandae maiores. Cum ea eaque eveniet ipsum voluptatibus, non sequi corporis </p>
                </div>
            </section>

            <section className='w-screen py-28'>
                <h2 className='text-4xl font-bold text-center mb-16 mx-auto'>How we work to make difference?</h2>
                <div className="flex gap-28 w-full justify-center flex-wrap">
                    <div className='flex flex-col items-center gap-4'>
                        <div className='flex items-center justify-center rounded-full h-[150px] aspect-square bg-slate-500'>
                            <img src="" alt="" />
                        </div>
                        <h6 className='text-xl'>Anganwadi feeding</h6>
                    </div>
                    <div className='flex flex-col items-center gap-4'>
                        <div className='flex items-center justify-center rounded-full h-[150px] aspect-square bg-slate-500'>
                            <img src="" alt="" />
                        </div>
                        <h6 className='text-xl'>Homeless peoples</h6>
                    </div>
                    <div className='flex flex-col items-center gap-4'>
                        <div className='flex items-center justify-center rounded-full h-[150px] aspect-square bg-slate-500'>
                            <img src="" alt="" />
                        </div>
                        <h6 className='text-xl'>Breakfast</h6>
                    </div>
                    <div className='flex flex-col items-center gap-4'>
                        <div className='flex items-center justify-center rounded-full h-[150px] aspect-square bg-slate-500'>
                            <img src="" alt="" />
                        </div>
                        <h6 className='text-xl'>Mid-Day Meals</h6>
                    </div>
                </div>
            </section>

            <section className='w-screen py-28 flex sm:flex-col lg:flex-row items-center gap-x-16 px-11'>
                <div className="bg-gray-500 sm:w-full lg:w-2/5 h-[300px] rounded-md"></div>
                <div className='sm:w-full lg:w-7/12'>
                    <h3 className='font-bold text-3xl mb-4'>Our Mission</h3>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, ipsam. Totam excepturi esse consequatur quia eaque a architecto consequuntur voluptatibus placeat ipsam aperiam quod, vel, repudiandae veritatis deleniti corporis blanditiis. Minima excepturi repudiandae suscipit earum dignissimos laborum, nesciunt iste nihil accusamus recusandae nemo vitae qui autem dolor quae voluptate alias? Optio corrupti non minus consequuntur quibusdam nemo, nisi earum dolorum, facilis distinctio</p>
                </div>
            </section>

            <section className='w-screen py-14'>
                <h2 className='text-4xl font-bold text-center mb-16 mx-auto'>Some of Active NGOs</h2>
                <NGOsSwiper />
            </section>

            <section className='w-screen py-14'>
                <h2 className='text-4xl font-bold text-center mb-16 mx-auto'>Our Top Donors</h2>
                <DonorsSwiper />
            </section>

        </>
    )
}

export default Home