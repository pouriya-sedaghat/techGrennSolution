import { useRef } from 'react';
import swal from 'sweetalert';

function ContactForm() {
    const emailInputRef = useRef();
    const nameInputRef = useRef();
    const commentInputRef = useRef();
    async function contactHanlder(e) {
        e.preventDefault();
        const email = emailInputRef.current.value;
        const name = nameInputRef.current.value;
        const comment = commentInputRef.current.value;
        const reqBody = { email, name, comment };
        if (email && name && comment !== '') {
            emailInputRef.current.value = '';
            nameInputRef.current.value = '';
            commentInputRef.current.value = '';
            swal('Success!', 'it is registered ; )', 'success');
            const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(reqBody), headers: { 'Content-Type': 'application/json' } });
            const responseData = await response.json();
        }
        else {
            swal('Faild!', 'Please fill in all fields : /', 'error');
        }
    }
    return (
        <>
            <form onSubmit={contactHanlder}>
                <div><p className='py-2'>Contact Us</p></div>
                <div className='d-flex my-2 justify-content-center align-items-center'>
                    <input ref={emailInputRef} className='d-block w-75 text-secondary rounded-5 me-1 px-3 py-1 border-0' type='text' placeholder='Your Email' />
                    <input ref={nameInputRef} className='d-block w-25 text-secondary rounded-5 ms-1 px-3 py-1 border-0' type='text' placeholder='Your Name' />
                </div>
                <div className='position-relative'>
                    <textarea ref={commentInputRef} rows={3} className='w-100 text-secondary rounded-4  px-3 py-1 border-0' placeholder='Write here'></textarea>
                    <button className='position-absolute rounded-5 text-transparent border-0 px-3 py-1'>Send</button>
                </div>
            </form>
        </>
    );
}

export default ContactForm;