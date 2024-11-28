import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const RefundPolicy = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [])
    return (
        <div className='min-h-screen'>
            <main className="w-full max-w-3xl mx-auto py-12 md:py-20 px-4 md:px-6">
                <div className="space-y-8">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">Refund Policy</h1>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">
                            At our company, we strive to provide exceptional products and services to our customers. However, we
                            understand that sometimes circumstances may require a refund. This policy outlines the conditions under
                            which we offer refunds.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Key Points</h2>
                        <ul className="space-y-4 text-gray-500 dark:text-gray-400">
                            <li className="flex items-start gap-4">
                                <svg
                                    className="flex-shrink-0 w-6 h-6 text-green-500"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                                </svg>
                                <div>
                                    <h3 className="text-lg font-medium">30-Day Money-Back Guarantee</h3>
                                    <p>
                                        We offer a 30-day money-back guarantee on all our products. If you're not satisfied with your
                                        purchase, you can return it within 30 days for a full refund.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <svg
                                    className="flex-shrink-0 w-6 h-6 text-green-500"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                                </svg>
                                <div>
                                    <h3 className="text-lg font-medium">Refund Eligibility</h3>
                                    <p>
                                        To be eligible for a refund, the product must be in its original condition, unused, and accompanied by
                                        the original packaging and all accessories.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <svg
                                    className="flex-shrink-0 w-6 h-6 text-green-500"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                                </svg>
                                <div>
                                    <h3 className="text-lg font-medium">Refund Processing</h3>
                                    <p>
                                        Once we receive your return, we will process the refund within 5-7 business days. The refund will be
                                        issued to the original payment method used for the purchase.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <svg
                                    className="flex-shrink-0 w-6 h-6 text-green-500"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                                </svg>
                                <div>
                                    <h3 className="text-lg font-medium">Shipping Costs</h3>
                                    <p>
                                        The customer is responsible for the cost of shipping the product back to us. We do not refund the
                                        original shipping charges.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Contact Us</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            If you have any questions or concerns about our refund policy, please don't hesitate to contact our customer
                            support team. We're here to help!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to='/contact'
                                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                href="#"
                            >
                                Contact Us
                            </Link>
                            <a
                                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                href="#"
                            >
                                Call Us
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default RefundPolicy