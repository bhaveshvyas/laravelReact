import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/inertia-react';
export default function Dashboard(props) {
    const { data, setData, errors, post } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        age: "",
    });
    function handleSubmit(e) {
        e.preventDefault();
        post(route("customers.store"));
    }
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Post</h2>}
        >
            <Head title="Posts" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    href={route("customers.index")}
                                >
                                    Back
                                </Link>
                            </div>
                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">First Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="First Name"
                                            name="first_name"
                                            value={data.first_name}
                                            onChange={(e) =>
                                                setData("first_name", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.first_name}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Last Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Last Name"
                                            name="last_name"
                                            value={data.last_name}
                                            onChange={(e) =>
                                                setData("last_name", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.last_name}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="">Email</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Email"
                                            name="email"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.email}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Age</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Age"
                                            name="age"
                                            value={data.age}
                                            onChange={(e) =>
                                                setData("age", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.age}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}