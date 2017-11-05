import React from 'react';
import { Button, Checkbox, Form, Grid, Message } from 'semantic-ui-react';

const Resource = ({user}) => (
    <Grid centered>
    <Grid.Column width={6}>
        <h1>Resource</h1>        <Form>
            <Form.Field>
                <label>Email</label>
                <input type="email" placeholder="Email Here..."/>
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input type="password" placeholder="password"/>
            </Form.Field>
          <Button type="submit"> Login</Button>          
        </Form>
        <Message
    success
    icon='thumbs up'
    header='Nice job!'
    content='Your profile is complete.'
/>
    </Grid.Column>

</Grid>
);


export default Resource;