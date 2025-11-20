import React from 'react'
import toast from 'react-hot-toast';


const Contact = () => {

   const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "88eec560-64b0-4d12-9c75-26e6f360bdbd");

    try {
       const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success('Thank you for your submission!')
      event.target.reset();
    } else {
      toast.error(data.message)
    }
    } catch (error) {
      toast.error(error.message)
    }
  };

  return (
    <div id='contact' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-white'>
        <h3 className='text-3xl lg:text-5xl'>Let's get in touch</h3>
        <p className='m-5 font-medium text-center max-sm:text-sm max-w-lg'>Hit me up to get your awesome website asap!</p>

        <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>

          <div>
            <p className='mb-2 text-sm font medium'>Your name</p>
            <div className='flex pl-3 rounded-lg border border-gray-600'>
              <input name='name' type="text" placeholder='Enter your name' required className='w-full
              p-3 text-sm outline-none'/>
            </div>
          </div>

          <div>
            <p className='mb-2 text-sm font medium'>Email</p>
            <div className='flex pl-3 rounded-lg border border-gray-600'>
              <input name='email' type="email" placeholder='Enter your email' required className='w-full
              p-3 text-sm outline-none'/>
            </div>
          </div>

          <div className='sm:col-span-2'>
            <p className='mb-2 text-sm font medium'>Message</p>
            <textarea name='message' rows={8} placeholder='Enter your message' 
            className='w-full p-3 text-sm outline-none rounded-lg border border-gray-600' required/>
          </div>

          <button type='submit' className='w-max flex gap-2 bg-primary text-white text-sm px-10
          py-3 rounded-full cursor-pointer hover:scale-103 transition-all'>
            Submit
          </button>

        </form>
        
    </div>
  )
}

export default Contact