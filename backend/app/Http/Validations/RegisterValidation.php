<?php

namespace App\Http\Validations;

class RegisterValidation{

    public function rules()
    {
        return [
            'username' => ['required', 'string', 'max:50', 'min:3'],
            'email' => ['required', 'string', 'email','max:250', 'min:5', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
            //'confirm_password' => ['required', 'same:password'],
        ];

    }

    public function messages()
    {
        return [
            'username.required' => 'You must enter your username.',
            'username.string' => 'You must use characters only.',
            'username.max' => 'Your username must not exceed 50 characters.',
            'username.min' => 'your username must be at least 3 characters longs.',
        
            'email.required' => 'You must enter your email.',
            'email.string' => 'You must use characters only.',
            'email.unique' => 'This email already exists.',
            'email.max' => 'Your email must not exceed 250 characters.',
            'email.min' => 'your email must be at least 5 characters longs.',

            'password.required' => 'You must enter your password.',
            'password.string' => 'You must use characters only.',
            'password.min' => 'your password must be at least 8 characters longs.',

            //'confirm_password.required' => 'You must enter your confirm password.',
            //'password.same' => 'Your confirm password must be the same to your password.',


        ];
    }
}