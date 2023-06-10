
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';

  
export default function Forms() {
  return (
    <section className='Form'>
    <div style={{ display: 'block', 
                  width: 450, 
                  padding: 30 }}className='Container' >
      <h2>Get in touch</h2>
      <p>Send us a message we will call back later</p>
      <Form>
      <div className='first-row'>
      <Form.Group className='name-col'>
          
          <Form.Control type="text" 
                        placeholder="Your name" />
        </Form.Group>
        <Form.Group className='name-col'>
        
          <Form.Control  type="email" 
                        placeholder="Your email " />
        </Form.Group></div>
        <Form.Group>
        
        <Form.Control  type="email" 
                      placeholder="Subject " />
      </Form.Group>
      <Form.Group>
        
        <Form.Control className='msg' type="textarea" 
                      placeholder="Message " />
      </Form.Group>
        <button className='alazea-btn' type="submit">
  Send Message
        </button>
      </Form>
    </div>  <div style={{ display: 'block', 
                  width: 450
                 }} className='map-area' >

   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22236.40558254599!2d-118.25292394686001!3d34.057682914027104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z4Kay4Ka4IOCmj-CmnuCnjeCmnOCnh-CmsuCnh-CmuCwg4KaV4KeN4Kav4Ka-4Kay4Ka_4Kar4KeL4Kaw4KeN4Kao4Ka_4Kav4Ka84Ka-LCDgpq7gpr7gprDgp43gppXgpr_gpqgg4Kav4KeB4KaV4KeN4Kak4Kaw4Ka-4Ka34KeN4Kaf4KeN4Kaw!5e0!3m2!1sbn!2sbd!4v1532328708137" allowfullscreen=""></iframe>
   </div></section>
  );
}