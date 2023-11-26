'use client';
import { useState } from 'react';
import { PaperPlaneTilt } from '@phosphor-icons/react/dist/ssr';
import { handleContactFormSubmission } from '../lib/actions';
import ThankYou from './ThankYou';
type Props = {};

export default function ContactForm({}: Props) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <>
      <ThankYou />
      <form
        className={`contact-form ${formSubmitted && 'hidden'}`}
        action={handleContactFormSubmission}
        onSubmit={(e) => {
          setFormSubmitted(true);
        }}>
        <div className='contact-form-info'>
          <div>
            <label htmlFor='name' className='form-label'>
              Name:
            </label>
            <input id='name' name='name' type='text' className='form-input' required />
            <label htmlFor='email' className='form-label'>
              Email:
            </label>
            <input id='email' name='email' type='email' className='form-input' required />
          </div>
          <div className='contact-form-message'>
            <label htmlFor='message' className='form-label'>
              Message:
            </label>
            <textarea id='message' name='message' className='form-input textarea' />
          </div>
        </div>
        <button className='contact-form-button button'>
          Send
          <PaperPlaneTilt className='button-icon' />
        </button>
      </form>
    </>
    // <>
    //   {formSubmitted ? (
    //     <div className='thank-you'>
    //       Thanks!
    //       <br />
    //       I'll get back to you ASAP.
    //     </div>
    //   ) : (
    //     <form
    //       className='contact-form'
    //       action={handleContactFormSubmission}
    //       onSubmit={(e) => {
    //         setFormSubmitted(true);
    //       }}>
    //       <div className='contact-form-info'>
    //         <div>
    //           <label htmlFor='name' className='form-label'>
    //             Name:
    //           </label>
    //           <input id='name' name='name' type='text' className='form-input' required />
    //           <label htmlFor='email' className='form-label'>
    //             Email:
    //           </label>
    //           <input id='email' name='email' type='email' className='form-input' required />
    //         </div>
    //         <div className='contact-form-message'>
    //           <label htmlFor='message' className='form-label'>
    //             Message:
    //           </label>
    //           <textarea id='message' name='message' className='form-input textarea' />
    //         </div>
    //       </div>
    //       <button className='contact-form-button button'>
    //         Send
    //         <PaperPlaneTilt className='button-icon' />
    //       </button>
    //     </form>
    //   )}
    // </>
  );
}
