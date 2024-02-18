import React, { useState } from 'react'
import Button from '../common/Button'
import { RiArrowLeftSLine } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Register = () => {

    const [isDonor, setIsDonor] = useState(true);
    const [isUserTypeSelectorActive, setIsUserTypeSelectorActive] = useState(true)

    const handleUserTypeSelect = (userType) => {
        setIsUserTypeSelectorActive(false)
        if (userType === 'doner') {
            setIsDonor(true)
        } else {
            setIsDonor(false)
        }
    }

    return (
        <div className='relative'>
            {isUserTypeSelectorActive && (<div className="h-screen w-screen bg-white flex flex-col items-center mx-auto absolute z-10 top-0 left-0">
                <h1 className='text-4xl font-semibold text-center mx-auto my-28'>Welcome to Anna Purna</h1>
                <div className='flex flex-col items-center gap-5 text-xl w-10/12'>
                    <Button varient="outline" onClick={() => handleUserTypeSelect('ngo')} className='w-1/2'>We are an NGO</Button>
                    <span>OR</span>
                    <Button varient="outline" onClick={() => handleUserTypeSelect('doner')} className='w-1/2'>We are Donor</Button>
                </div>
            </div>)}

            <div className="w-screen min-h-screen">
                <nav className='flex items-center w-full justify-start my-6'>
                    <Button varient='ghost' onClick={() => setIsUserTypeSelectorActive(true)}><RiArrowLeftSLine /> Back</Button>
                </nav>

                <section className='flex sm:flex-col lg:flex-row gap-9 w-11/12 mx-auto'>
                    {/* img */}
                    {isDonor ?
                        (<div className="w-1/2 bg-gray-400 h-[500px] rounded-md sticky mt-10 top-1"></div>)
                        :
                        (<div className="w-1/2 bg-gray-400 h-[500px] rounded-md sticky mt-10 top-1"></div>)
                    }

                    {/* form */}
                    <div className="w-1/2">
                        <h3 className='text-center font-semibold text-2xl'>{isDonor ? 'Register as Donor' : 'Register as NGO'}</h3>
                        {isDonor ?
                            (<form>

                            </form>)
                            :
                            (<form>

                                <div className="form__group field">
                                    <input type="text" className="form__field" placeholder="Name of Organization" name="nameOfOrganization" />
                                    <label htmlFor="Name of Organization" className="form__label">Name of Organization</label>
                                </div>

                                <h5 className='form_heading font-semibold mt-10'>Contact Info :</h5>
                                <div className="form__group field">
                                    <input type="text" className="form__field" placeholder="Name Of primary contact person" name="NameOfThePrimaryContactPerson" />
                                    <label htmlFor="Name of the primary contact person" className="form__label">Name of the primary contact person</label>
                                </div>
                                <div className="form__group field">
                                    <input type="text" className="form__field" placeholder="E-mail" name="email" />
                                    <label htmlFor="E-mail" className="form__label">E-mail</label>
                                </div>
                                <div className="form__group field">
                                    <input type="text" className="form__field" placeholder="Contact Number" name="contactNumber" />
                                    <label htmlFor="Contact Number" className="form__label">Contact Number</label>
                                </div>

                                <h5 className='form_heading font-semibold mt-10'>Geographic Coverage :</h5>
                                <div className="flex items-end gap-3">
                                    <div className='form__group w-1/2 field'>
                                        <select name="state" className="form__field">
                                            <option value="" selected disabled>State</option>
                                            <option value="Gujarat">Gujarat</option>
                                            <option value="Delhi">Delhi</option>
                                            <option value="Mumbai">Mumbai</option>
                                        </select>
                                    </div>
                                    <div className='form__group w-1/2 field'>
                                        <select name="city" className="form__field">
                                            <option value="" selected disabled>City</option>
                                            <option value="Rajkot">Rajkot</option>
                                            <option value="Surat">Surat</option>
                                            <option value="Gandhinagar">Gandhinagar</option>
                                        </select>
                                    </div>
                                </div>

                                <h5 className='form_heading font-semibold mt-10'>Discription / Mission of Organization :</h5>
                                <div className="form__group field">
                                    <textarea name="discription" className="form__field" rows="3" placeholder='Discription'></textarea>
                                    <label htmlFor="Discription" className="form__label">Discription</label>
                                </div>

                                <h5 className='form_heading font-semibold mt-10'>Social Links :</h5>

                                <div className='flex gap-4 items-baseline'>
                                    <FaFacebookF />
                                    <div className="form__group field w-full">
                                        <input type="text" className="form__field" placeholder="Facebook" name="facebook" />
                                        <label htmlFor="Facebook" className="form__label">Facebook</label>
                                    </div>
                                </div>
                                <div className='flex gap-4 items-baseline'>
                                    <FaInstagram />
                                    <div className="form__group field w-full">
                                        <input type="text" className="form__field" placeholder="Instagram" name="instagram" />
                                        <label htmlFor="Instagram" className="form__label">Instagram</label>
                                    </div>
                                </div>
                                <div className='flex gap-4 items-baseline'>
                                    <FaXTwitter />
                                    <div className="form__group field w-full">
                                        <input type="text" className="form__field" placeholder="Twitter / X" name="twitter" />
                                        <label htmlFor="Twitter / X" className="form__label">Twitter / X</label>
                                    </div>
                                </div>
                                <div className='flex gap-4 items-baseline'>
                                    <FaGlobe />
                                    <div className="form__group field w-full">
                                        <input type="text" className="form__field" placeholder="Organization's Website" name="organizationsWebsite" />
                                        <label htmlFor="Organization's Website" className="form__label">Organization's Website</label>
                                    </div>
                                </div>

                                <h5 className='form_heading font-semibold mt-10'>Logo or Visual Identity :</h5>
                                <div className="form__group field w-full">
                                    <input type="file" name="logo" />
                                </div>

                                <Button className='my-8 w-full'>Sign Up</Button>
                            </form>)
                        }
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Register