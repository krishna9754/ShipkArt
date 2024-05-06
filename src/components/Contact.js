/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

function Contact() {
  return (
    <div>
      <div className='text-center mt-16'>
        <p className='font-medium text-xl mb-2 underline' >Contact</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.918052700667
        !2d77.32280507292228!3d28.572223375697693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3
        90ce44e94a2663f%3A0x96317734f1be41f7!2sNoida%20Sector%2018%2C%20Noida%2C%20Uttar%20Pradesh%2020130
        1!5e0!3m2!1sen!2sin!4v1714936128952!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='mt-4 flex justify-center w-full'>
        <form action='https://formspree.io/f/mdoqbyzp' method='POST'>
          <div className='flex flex-col'>
          <input className='border-[1px] max-[450px]:w-72 w-96 border-black rounded-lg p-2 my-2 text-sm font-light' type='text' placeholder='userName' name='userName' required autoComplete='off'/>
          <input className='border-[1px] max-[450px]:w-72 w-96 border-black rounded-lg p-2 my-2 text-sm font-light' type='text' placeholder='Email' name='Email' required autoComplete='off'/>
          <textarea className='border-[1px] max-[450px]:w-72 w-96 border-black rounded-sm p-2 my-2 text-sm font-light' name="Message" placeholder="Enter you message" autoComplete="off" required cols="30" rows="10"/>
          <input className='border-[1px] bg-black max-[450px]:w-72 w-96 text-white border-black rounded-lg py-2 my-2 text-md font-bold' type='submit' required/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact