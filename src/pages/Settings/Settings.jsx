import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Settings = () => {
    const items = [
        {
            name: 'Profile',
            path: ''
        },
        {
            name: 'Orders',
            path: 'orderList'
        }
    ]
    return (
        <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto pt-12">
            <h1 className="border-b py-6 text-4xl font-semibold">Settings</h1>
            <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">


                {/* Sidebar for larger screens */}
                <div className="col-span-2 hidden sm:block ">
                    <ul>
                        {
                            items?.map(item => {
                                return <li className="mt-5 ">
                                    <NavLink
                                        to={`/profile/${item?.path}`}
                                        className={({ isActive }) =>
                                            `cursor-pointer border-l-2 px-2 py-2 font-semibold transition ${isActive ? "border-l-blue-700 text-blue-700" : "border-transparent hover:border-l-blue-700 hover:text-blue-700"
                                            }`
                                        }
                                    >
                                        {item?.name}
                                    </NavLink>
                                </li>
                            })
                        }


                    </ul>
                </div>

                <div className="w-full col-span-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Settings;
