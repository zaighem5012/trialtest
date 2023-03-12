import React, { useState } from "react"
import logo from "../../assets/Images/kiwify-green-logo.2af0e50.png"
import { Link } from 'react-router-dom';

export function LoginPage() {
    const [validattionMessage, setValidationMessage] = useState({
        email: "",
        repeat_email: "",
        password: ""
    })
    const [values, setvalues] = useState({
        email: "",
        repeat_email: "",
        password: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setvalues(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleInputBlur = (event) => {
        const { name, value } = event.target;
        let errorMessage = '';

        if (value.trim() === '') {
            errorMessage = `${name === "repeat_email" ? "The two emails must be the same." + "\n" +"This field is mandatory" : "This field is mandatory"} `;
        }

        setValidationMessage((prevFormErrors) => ({
            ...prevFormErrors,
            [name]: errorMessage
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if(!values.email){
            setValidationMessage(prev => ({
                ...prev,
                email:"This field is mandatory"
            }))
        }
        if(!values.password){
            setValidationMessage(prev => ({
                ...prev,
                password:"This field is mandatory"
            }))
        }
    }
    return (
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src={logo}
                        alt="Your Company"
                    />
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                        Login to your account
                    </h2>
                    <p className="mt-2 text-center text-base leading-5 text-gray-600">
                        Or{' '}
                        <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                            register
                        </Link>
                    </p>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <form className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10" action="#" method="POST" onSubmit={handleSubmit}>
                        <div className="-space-y-px rounded-md">
                        <div className="mb-6">
                                <label htmlFor="email-address" className="block text-sm font-medium leading-5 mb-1 text-gray-700 text-left">
                                    E-mail
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleInputBlur}
                                    className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue  transition duration-150 ease-in-out sm:text-sm sm:leading-5 ${validattionMessage.email ? "border-red-500":"focus:border-blue-300"} w-full`}
                                />
                                <p class="text-red-500 text-xs text-left">{validattionMessage.email}
                                </p>
                            </div>
                           
                            <div className="">
                                <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700 text-left">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    onChange={handleChange}
                                    value={values.password}
                                    onBlur={handleInputBlur}
                                    className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue  transition duration-150 ease-in-out sm:text-sm sm:leading-5 ${validattionMessage.password ? "border-red-500":"focus:border-blue-300"} w-full`}

                                    type="password"
                                    autoComplete="current-password"

                                />
                                <p class="text-red-500 text-xs text-left">{validattionMessage.password}
                                </p>

                            </div>
                        </div>

                        <div className="mb-6 mt-2 flex justify-end items-center">
                            <div className="text-sm leading-5">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                    Forgot password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                To enter
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    )
} 