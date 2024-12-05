import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const RefundPolicy = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <main className="w-full max-w-4xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="space-y-12">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                            Refund Policy
                        </h1>
                        <p className="mt-5 text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                            At our company, we strive to provide exceptional products and services. We understand that sometimes circumstances may require a refund. This policy outlines our refund conditions.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                        <div className="px-4 py-5 sm:p-6">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Key Points</h2>
                            <ul className="space-y-8">
                                {[
                                    {
                                        title: "30-Day Money-Back Guarantee",
                                        description: "We offer a 30-day money-back guarantee on all our products. If you're not satisfied with your purchase, you can return it within 30 days for a full refund."
                                    },
                                    {
                                        title: "Refund Eligibility",
                                        description: "To be eligible for a refund, the product must be in its original condition, unused, and accompanied by the original packaging and all accessories."
                                    },
                                    {
                                        title: "Refund Processing",
                                        description: "Once we receive your return, we will process the refund within 5-7 business days. The refund will be issued to the original payment method used for the purchase."
                                    },
                                    {
                                        title: "Shipping Costs",
                                        description: "The customer is responsible for the cost of shipping the product back to us. We do not refund the original shipping charges."
                                    }
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="ml-3">
                                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">{item.title}</h3>
                                            <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{item.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden">
                        <div className="px-4 py-5 sm:p-6">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
                            <p className="text-xl text-gray-500 dark:text-gray-400 mb-8">
                                If you have any questions or concerns about our refund policy, please don't hesitate to contact our customer support team. We're here to help!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to='/contact'
                                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                                >
                                    Contact Us
                                </Link>
                                <a
                                    href="tel:+1234567890"
                                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                                >
                                    Call Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default RefundPolicy

