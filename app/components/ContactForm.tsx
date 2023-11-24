
import { PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";
type Props = {};

export default function ContactForm({}: Props) {
  return (
    <form className='contact-form'>
      <label htmlFor='name' className='form-label'>
        Name:
      </label>
      <input id='name' name='name' type='text' className='form-input' required />
      <label htmlFor='email' className='form-label'>
        Email:
      </label>
      <input id='email' name='email' type='email' className='form-input' required />
      <label htmlFor='message' className='form-label'>
        Message:
      </label>
      <textarea id='message' name='message' className='form-input textarea' />
      <button className='button'>
        Send
        <PaperPlaneTilt className='button-icon' />
      </button>
    </form>
  );
}
