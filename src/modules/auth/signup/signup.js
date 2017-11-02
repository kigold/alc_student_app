import React from 'react';
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react';

const Signup = () => (
    <Grid centered>
        <Grid.Column width={6}>
        <h1>Sign Up</h1>
            <Form>
                <Form.Field>
                    <label>Email</label>
                    <input type="email" placeholder="Email Here..."/>
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input type="password" placeholder="password"/>
                </Form.Field>
                <Form.Field>
                    <label>Confirm Password</label>
                    <input type="password" placeholder="password"/>
                </Form.Field>  
                <Form.Field>
                    <Checkbox label="I Agree to the T and C" />
                </Form.Field>
              <Button type="submit"> Sign Up</Button>          
            </Form>
        </Grid.Column>
    </Grid>
);

export default Signup;