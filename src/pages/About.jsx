import React from 'react'
import HeroSwiper from '../components/HeroSwiper'
import Button from '../common/Button'
import { MdCall } from "react-icons/md";
import { MdMail } from "react-icons/md";

const About = () => {
    return (
        <>
            <HeroSwiper />

            <h3 className='font-bold text-5xl text-center w-full mx-auto my-28'>About Us</h3>

            <section className="flex sm:flex-col lg:flex-row items-center gap-x-16 px-11">
                <div className="bg-gray-500 sm:w-full lg:w-1/2 h-[500px] rounded-md"></div>
                <div className='sm:w-full lg:w-1/2'>
                    <h3 className='font-bold text-3xl mb-4'>What We Do?</h3>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, ipsam. Totam excepturi esse consequatur quia eaque a architecto consequuntur voluptatibus placeat ipsam aperiam quod, vel, repudiandae veritatis deleniti corporis blanditiis. Minima excepturi repudiandae suscipit earum dignissimos laborum, nesciunt iste nihil accusamus recusandae nemo vitae qui autem dolor quae voluptate alias? Optio corrupti non minus consequuntur quibusdam nemo, nisi earum dolorum, facilis distinctio inventore ratione eos numquam incidunt similique dicta temporibus. Ipsam, totam sint. Optio iure aut sint libero vitae molestiae at voluptatum, tempora hic asperiores deserunt ipsum, magni nobis! Nostrum doloremque autem blanditiis, qui aliquam id totam laborum labore error asperiores, corporis ducimus, animi repudiandae maiores. Cum ea eaque eveniet ipsum voluptatibus, non sequi corporis </p>
                </div>
            </section>

            <section className='w-screen py-32 flex sm:flex-col lg:flex-row items-center gap-x-16 px-11'>
                <div className="bg-gray-500 sm:w-full lg:w-2/5 h-[300px] rounded-md"></div>
                <div className='sm:w-full lg:w-7/12'>
                    <h3 className='font-bold text-3xl mb-4'>Our Mission</h3>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, ipsam. Totam excepturi esse consequatur quia eaque a architecto consequuntur voluptatibus placeat ipsam aperiam quod, vel, repudiandae veritatis deleniti corporis blanditiis. Minima excepturi repudiandae suscipit earum dignissimos laborum, nesciunt iste nihil accusamus recusandae nemo vitae qui autem dolor quae voluptate alias? Optio corrupti non minus consequuntur quibusdam nemo, nisi earum dolorum, facilis distinctio</p>
                </div>
            </section>

            <section className='w-screen px-10'>
                <h3 className='font-bold text-3xl mb-9 text-center'>Contact Us</h3>
                <div className='flex sm:flex-col lg:flex-row gap-14 lg:gap-0 items-center'>

                    <div className="contact_details h-[300px] w-full lg:w-2/5 items-center flex flex-col max-sm:flex-row gap-6">
                        <div className='flex flex-col items-center justify-center w-9/12 py-10 rounded-md gap-5 bg-yellow-300'>
                            <MdCall className='text-4xl' />
                            <div className='text-lg'>
                                <span>+91 9898490532</span><br />
                                <span>+91 9899490534</span>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center w-9/12 py-10 rounded-md gap-5 bg-yellow-300'>
                            <MdMail className='text-4xl' />
                            <span className='text-lg'>anapurna@gmail.com</span>
                        </div>
                    </div>

                    <form className='contact_form flex flex-col gap-3 w-full lg:w-1/2'>

                        <div className="form__group field">
                            <input type="text" className="form__field" placeholder="Name" name="name" id='user_name' />
                            <label htmlFor="Name" className="form__label">Name</label>
                        </div>

                        <div className="form__group field">
                            <input type="email" className="form__field" placeholder="Email" name="email" id='user_email' />
                            <label htmlFor="Email" className="form__label">E-mail</label>
                        </div>

                        <div className="form__group field">
                            <input type="number" className="form__field" placeholder="Mobile Number" name="number" id='user_number' />
                            <label htmlFor="Mobile Number" className="form__label">Mobile Number</label>
                        </div>

                        <div className="form__group field">
                            <textarea name="message" id="user_message" className="form__field" rows="3" placeholder='Message'></textarea>
                            <label htmlFor="message" className="form__label">Message</label>
                        </div>

                        <Button>Send</Button>

                    </form>
                </div>
            </section>

        </>
    )
}

export default About