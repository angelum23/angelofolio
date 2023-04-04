import { Configuration, OpenAIApi } from "openai";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { TextField, Button } from '@mui/material';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    //not implemented yet
    
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

  const sendChat = async () => {
    let input = document.getElementById("tfgpt").value;
    let token = document.getElementById("tftoken").value;
    
    debugger;

    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: input,
      temperature: 0.6,
    });    
  }

  return (
    <div>
      <NotificationContainer/>

      <div class="divchat">
        <div class="chatbox">

        </div> 

          <TextField id="tfgpt"></TextField>
          <Button variant="contained" type="submit" value="Send" color="secondary" onClick={sendChat}>Send</Button>
      </div>

      <div class='divemailcontact'>
        <form ref={form} onSubmit={sendEmail}>

          <h2>Want to contact? Email me direct from here</h2>

          <label for="user_name">Full name</label><br/>
          <TextField id="user_name" name="user_name" variant="outlined" multiline style = {{width: 350}}/> <br/><br/>
          
          <label for="user_email">Email</label><br/>
          <TextField id="user_email" name="user_email" variant="outlined" style = {{width: 350}}/> <br/><br/>
          
          <label for="message">Message</label><br/>
          <TextField id="message" name="message" variant="outlined" fullWidth multiline rows={6} maxRows={20} placeholder="Email sendind still not working but it will be implemented soon."/> <br/><br/>

          <Button variant="contained" type="submit" value="Send" color="secondary">Send</Button>
        </form>
      </div>

      <div class='divdatacontact'>
        <h2 class="contacts">Contact links</h2>
        <h3 class="texto">
          <p><FaGithub/> <a href="https://github.com/angelum23" target="_blank">GitHub</a></p>
          <p><FaLinkedin/> <a href="https://www.linkedin.com/in/ângelo-josé-da-rosa-7b1bb11b9/" target="_blank">Linkedin</a></p>

          <CopyToClipboard text={"angelojose.net@gmail.com"}
            onCopy={() => {
              NotificationManager.info('Email successfully copied to clipboard!');
            }}>
            <Button variant='contained' color='secondary'>Email</Button>
          </CopyToClipboard>

        </h3>
      </div>
      <div class='divtoken'>
        <h2 class="contacts">Token</h2>
        <TextField id="tftoken" class='tftoken'></TextField>
      </div>
    </div>
  );
};
  
export default Contact;