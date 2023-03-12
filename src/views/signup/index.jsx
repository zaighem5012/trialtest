import React, { useState } from "react"
import logo from "../../assets/Images/kiwify-green-logo.2af0e50.png"
import { Link } from 'react-router-dom';

export function SignUpPage() {
    const [validattionMessage, setValidationMessage] = useState({
        email: "",
        repeat_email: "",
        password: "",
        checked: ""
    })
    const [values, setvalues] = useState({
        email: "",
        repeat_email: "",
        password: "",
        agree: false
    })
    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        if (checked) {
            setvalues(prev => ({
                ...prev,
                agree: checked
            }))
        }else if(!checked){
            setvalues(prev => ({
                ...prev,
                agree: checked
            }))
        }
        setvalues(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleInputBlur = (event) => {
        const { name, value } = event.target;
        let errorMessage = '';

        if (value.trim() === '') {
            errorMessage = `${name === "repeat_email" ? "The two emails must be the same."  : "This field is mandatory"} `;
        }

        setValidationMessage((prevFormErrors) => ({
            ...prevFormErrors,
            [name]: errorMessage
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!values.email) {
            setValidationMessage(prev => ({
                ...prev,
                email: "This field is mandatory"
            }))
        }
        if (!values.repeat_email || values.email !==values.repeat_email) {
            setValidationMessage(prev => ({
                ...prev,
                repeat_email: "The two emails must be the same"
            }))
        }
        if (!values.password) {
            setValidationMessage(prev => ({
                ...prev,
                password: "This field is mandatory"
            }))
        }
        if (!values.agree) {
            setValidationMessage(prev => ({
                ...prev,
                checked: "(This field is mandatory)"
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
                    create new account
                </h2>
                <p className="mt-2 text-center text-base leading-5 text-gray-600">
                    Or{' '}
                    <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                        sign into your existing account                        </Link>
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
                                className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue  transition duration-150 ease-in-out sm:text-sm sm:leading-5 ${validattionMessage.email ? "border-red-500" : "focus:border-blue-300"} w-full`}

                            />
                            <p class="text-red-500 text-xs text-left">{validattionMessage.email}
                            </p>
                        </div>
                        <div className="pb-6">
                            <label htmlFor="email-address" className="block text-sm font-medium leading-5 mb-1 text-gray-700 text-left">
                                repeat email
                            </label>
                            <input
                                id="email-address"
                                name="repeat_email"
                                type="email"
                                autoComplete="email"
                                onChange={handleChange}
                                onBlur={handleInputBlur}
                                className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue  transition duration-150 ease-in-out sm:text-sm sm:leading-5 ${validattionMessage.repeat_email ? "border-red-500" : "focus:border-blue-300"} w-full`}

                                value={values.repeat_email}

                            />
                            {validattionMessage.repeat_email && (
                                <>
                                    <p class="text-red-500 text-xs text-left">{validattionMessage.repeat_email}
                                    </p>
                                    <p class="text-red-500 text-xs text-left">This field is mendatory
                                    </p>
                                </>
                            )}
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

                                type="password"
                                autoComplete="current-password"
                                className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue  transition duration-150 ease-in-out sm:text-sm sm:leading-5 ${validattionMessage.password ? "border-red-500" : "focus:border-blue-300"} w-full`}


                            />
                            <p class="text-red-500 text-xs text-left">{validattionMessage.password}
                            </p>

                        </div>

                        <div className="font-medium text-gray-700 text-left py-6">

                            <label className="block flex items-center ">
                                <input className="mr-2 form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer border-red-500" type="checkbox" onChange={handleChange} value={values.agree} />
                                <span className="font-medium text-gray-700">

                                    I have read and accept Kiwify's <a href="https://kiwify.com.br/termos-de-uso" target="_blank" class="underline">terms of use, </a><br />
                                    <a href="https://kiwify.com.br/licenca-de-uso-software" target="_blank" class="underline">software license terms , </a>
                                    <a href="https://kiwify.com.br/politica-de-conteudo" target="_blank" class="underline"> content policy</a><br />
                                    <p class="text-red-400 text-xs text-left">{validattionMessage.checked}
                                    </p>
                                </span>

                            </label>
                        </div>
                    </div>



                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Create an account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
} 