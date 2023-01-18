import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { TextField, Button } from '@mui/material';
  
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 
                     'YOUR_TEMPLATE_ID',
                     form.current,
                     'YOUR_PUBLIC_KEY').then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <div class='divcontact'>
      <form ref={form} onSubmit={sendEmail} class="formcontact">

        <h2>Want to contact?<br/>Email me direct from here</h2>
        <label for="user_name">Full name</label><br/>
        <TextField id="user_name" name="user_name" variant="outlined" /> 
        
        <label for="user_email">Email</label><br/>
        <TextField id="user_email" name="user_email" variant="outlined" />
        
        <label for="message">Message</label><br/>
        <TextField id="message" name="message" variant="outlined" />
        <br/><br/>
        <Button variant="contained" type="submit" value="Send">Send</Button>
      </form>
    </div>
  );
};
  
export default Contact;