


import conatactImage from '../../assets/images/contactPhoto.png'
import { Input } from '@nextui-org/react'
import { Mail, Phone } from 'lucide-react'
import ContactUsForm from './components/contactUsForm'

const ContactUs = () => {
  return (
    <div className='grid grid-cols-12 gap-5  auto-rows-fr'>
    <div className='col-span-12 md:col-span-8 '>
    <div className='border-1 border-gray-300 rounded-3xl p-3 h-full'>
        <h1 className='font-bold text-2xl mb-10 mt-5'><span className='text-secondary-500 '>Let's Chat,</span> Reach Out to Us.</h1>
        <p className='text-gray-400 text-sm'>Have questions or feedback? We're here to help. Send us a <br />
        message, and we'll respond within 24 hours</p>

        <div className='mt-10 w-full'>
            <ContactUsForm/>
        </div>
    </div>
    </div>
    <div className='col-span-12 md:col-span-4 flex-1'>
    <img src={conatactImage} alt=""/>

    <div className='border-1 border-gray-300 rounded-3xl p-3 mt-4 '>
   <div className='bg-secondary-100 w-full h-16 rounded-full relative mb-4'>
    <div className='absolute left-0 w-16 h-16 rounded-full bg-secondary-200 flex justify-center items-center'>
        <Mail size={20} color='white'/>
        </div>
        <Input
         classNames={{
            base: "max-w-full  h-16",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full rounded-full border-0  font-normal text-default-500 bg-transparent",
          }}
  isReadOnly
  className="w-full ms-16 border-0 shadow-none"
  defaultValue="junior@nextui.org"
  label="Email"
  type="email"
  variant="bordered"
/>
   </div>

   <div className='bg-secondary-100 w-full h-16 rounded-full relative mb-4'>
    <div className='absolute left-0 w-16 h-16 rounded-full bg-secondary-200 flex justify-center items-center'>
        <Phone  size={20} color='white'/>
        </div>
        <Input
         classNames={{
            base: "max-w-full  h-16",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full rounded-full border-0  font-normal text-default-500 bg-transparent",
          }}
  isReadOnly
  className="w-full ms-16 border-0 shadow-none"
  defaultValue="+971 43342555"
  label="Phone"
  type="text"
  variant="bordered"
/>
   </div>

   <div className='bg-secondary-100 w-full h-16 rounded-full relative'>
    <div className='absolute left-0 w-16 h-16 rounded-full bg-secondary-200 flex justify-center items-center'>
        <Phone  size={20} color='white'/>
        </div>
        <Input
         classNames={{
            base: "max-w-full  h-16",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full rounded-full border-0  font-normal text-default-500 bg-transparent",
          }}
  isReadOnly
  className="w-full ms-16 border-0 shadow-none"
  defaultValue="+971 43342555"
  label="Whatsapp"
  type="text"
  variant="bordered"
/>
   </div>
    </div>
    </div>
</div>

  )
}

export default ContactUs