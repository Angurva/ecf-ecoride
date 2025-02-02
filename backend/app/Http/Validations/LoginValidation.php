<?php

namespace App\Http\Validations;

class LoginValidation{

    public function rules()
    {
        return [
            'email' => ['required', 'email', 'string'],
            'password' => ['required', 'string'],
        ];

    }

    public function messages()
    {
        return [
        
            'email.required' => 'You must enter your email.',
            'password.required' => 'You must enter your password.',
        ];
    }
}