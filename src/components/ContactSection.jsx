import { Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import {cn} from "@/lib/utils";
const ContactSection = () => {
  return (
    <section id='contact' className='py-24 px-4 relative bg-secocndary/30'>
        <div className='container mx-auto max-w-5xl'>

            <div className="flex justify-center  animate-bounce">
                <img
                    src="/luffy.png"
                    alt="Scroll indicator"
                    className="w-24 h-24 md:w-45 md:h-50 sm:w-50 sm:h-45 object-contain"
                />
            </div>

            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                Get In <span className='text-primary'>Touch</span>
            </h2>
            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                Have a project in mind or want to collaborate ? Feel free to reach out.
                I'm always open to discuss about new opportunities.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='space-y-8'>
                    <h3 className='text-2xl font-semibold md-6'>
                        Contact Information
                    </h3>
                    <div className='space-y-6 justify-center'>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Mail className='h-6 w-6 text-primary'/>{" "}
                            </div>
                            <div>
                                <h4 className='font-medium '>E-mail</h4>
                                <a href='mailto:yagneshkannam@gmail.com' className='text-muted-foreground hover:text-primary transition-colors'>yagneshkannam@gmail.com</a>
                            </div>
                         </div> 

                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <MapPin className='h-6 w-6 text-primary'/>{" "}
                            </div>
                            <div>
                                <h4 className='font-medium '>Location</h4>
                                <a href='' className='text-muted-foreground hover:text-primary transition-colors'>Hyderabad, Telangana , India</a>
                            </div>
                         </div>    

                    </div>


                    <div className='pt-8 '>
                        <h4 className='font-medium mb-4'>Connect With Me</h4>
                        <div className='flex space-x-4 justify-center'>
                            <a href='https://www.linkedin.com/in/yagnesh-kannam-299a33267/' target="_blank">
                                <FaLinkedin  size={30}/>
                            </a>
                            <a href='https://www.instagram.com/yagneshhhh_?igsh=dW5hMjg3OTRwYTEy' target='_blank'>
                                <FiInstagram  size={30}/>
                            </a>

                        </div>
                    </div>
                </div>

                <div className='bg-card border p-8 rounded-lg shadow-xs'>
                    <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>

                    <form className='space-y-6 '>
                        <div>
                            <label htmlFor='name'className='block text-sm font-medium mb-2'>{" "}Your Name</label>
                            <input
                            type='text'
                            id='name'
                            name='name'
                            className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                            placeholder='shanks'/>
                            
                        </div>

                        <div>
                            <label htmlFor='email'className='block text-sm font-medium mb-2'>{" "}Your Email</label>
                            <input
                            type='email'
                            id='email'
                            name='email'
                            className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                            placeholder='shanks@email.com'/>
                            
                        </div>

                        <div>
                            <label htmlFor='message'className='block text-sm font-medium mb-2'>{" "}Your Message</label>
                            <textarea
                            id='message'
                            name='message'
                            className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                            placeholder="HI , I'd like to talk about..."/>
                            
                        </div>

                        <button type='submit' className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                                Send Message
                                <Send size={16}/>
                        </button>

                    </form>
                    <p className='font-light text-sm mt-4'>
                       Note : This  form is disabled as this portfolio does not use a backend (Next.js). However, I can develop a fully functional contact form tailored to your website requirements.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactSection