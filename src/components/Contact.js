import '../css/Contact.css';
import { Form } from 'semantic-ui-react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';


function Contact () {
    const animation_src = require("../assets/2-about.json")
    return (
        <div className = "contact">
            <div className = "column1">
                <div className='column1-text'>
                    <h1>Interested in working together?</h1>
                </div>
                <div>
                    {/* <img className='column1-graphic' src={image_src}/> */}
                    <Player
                        autoplay
                        loop
                        src={animation_src}
                        style={{ height: '300px', width: '300px' }}
                    >
                    </Player>
                </div>
            </div>
            <div className = 'column2'>
                <Form className='contact-form' size='large' action='https://formsubmit.co/f712311a9f46a546eb052e26688a9925' method='POST'>
                    <Form.Group widths='equal'>
                        <Form.Input id='form-name' name='name' fluid placeholder='Name' />
                        <Form.Input id='form-email' name='email' fluid placeholder='Email' />
                    </Form.Group>
                    <Form.Input id='form-subject' name='_subject' fluid placeholder='Subject' />
                    <Form.TextArea id='form-message' name='message' placeholder='Type your message here' />
                    <Form.Button>Submit</Form.Button>
                </Form>
            </div>
        </div>
    );
}

export default Contact