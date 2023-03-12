import React from "react"
import logo from "../../assets/Images/kiwify-green-logo.2af0e50.png"
export function LoginPage() {
    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
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
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            register
                        </a>
                    </p>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <form className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10" action="#" method="POST">
                        <div className="-space-y-px rounded-md">
                            <div className="mb-8">
                                <label htmlFor="email-address" className="block text-sm font-medium leading-5 mb-1 text-gray-700 text-left">
                                    Email
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-red-500 w-full"
                                />
                                <p class="text-red-500 text-xs text-left">This field is mandatory
                                </p>
                            </div>
                            <div className="">
                                <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700 text-left">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-red-500 w-full"

                                />
                                <p class="text-red-500 text-xs text-left">This field is mandatory
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
        </div>
    )
} 