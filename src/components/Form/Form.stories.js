import React from 'react';
import Form from './Form';

export default {
    title : 'Form',
    component : Form,
    argTypes: { onSubmit: { action: 'Submit data' } }
}

const Template = (args) => <Form  {...args} />;

export const SignUp = Template.bind({});
SignUp.args={
    buttons:[{ok:"Sign Up"},"Cancel"],
    fields:[{
        label : 'First Name :',
        placeholder : "Please enter your first name",
        type:"text",
        required : true,
        dataKey:'fname'
    },{
        label : 'Last Name :',
        placeholder : 'Please enter your last name',
        type:"text",
        required:true,
        dataKey:'lname'
    },{
        label:'Address :',
        placeholder:'Please enter your address',
        type:'text',
        required:false,
        dataKey:'address' 
    },{
        label:'Age',
        placeholder:'Please enter your age',
        type:'number',
        required:false,
        dataKey:'age'
    },{
        label : 'Email :',
        placeholder : 'Please enter your email',
        type:'email',
        required:'true',
        dataKey:'email'
    },{
        label : 'Password : ',
        placeholder : 'Please enter your password',
        type:'password',
        require:true,
        dataKey:'password'
    }]
}

export const LoginForm = Template.bind({});
LoginForm.args={
    buttons : [{ok:"Login"}],
    fields : [{
        label : 'Email :',
        placeholder : 'Please enter your email',
        type : 'email',
        required : true,
        dataKey : 'email'
    },{
        label : 'Password :',
        placeholder : 'Please enter your password',
        type:'password',
        required:true,
        dataKey : 'password'
    }]
}