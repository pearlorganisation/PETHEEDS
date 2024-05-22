import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const TermsOfUse = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [])
    return (
        <div className='min-h-screen'>
            <div className="bg-gray-100 dark:bg-gray-900">

                <main className="container mx-auto py-12 px-4 md:px-6">
                    <div className="mx-auto max-w-3xl">
                        <h1 className="mb-8 text-4xl font-bold tracking-tight">Terms and Conditions</h1>
                        <div className="space-y-8">
                            <section className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                                <h2 className="mb-4 text-2xl font-bold">Introduction</h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Welcome to our ecommerce website. By accessing or using our website, you agree to be bound by these
                                    terms and conditions and our privacy policy.
                                </p>
                            </section>
                            <section className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                                <h2 className="mb-4 text-2xl font-bold">Ordering and Payment</h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    All orders placed on our website are subject to availability and acceptance by us. We reserve the right
                                    to refuse or cancel any order for any reason. Payment must be made in full at the time of order
                                    placement.
                                </p>
                            </section>
                            <section className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                                <h2 className="mb-4 text-2xl font-bold">Shipping and Delivery</h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    We aim to ship all orders within 2-3 business days. Delivery times may vary depending on your location
                                    and the shipping method you choose. We are not responsible for any delays or issues with the shipping
                                    carrier.
                                </p>
                            </section>
                            <section className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                                <h2 className="mb-4 text-2xl font-bold">Returns and Refunds</h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    You may return any item within 30 days of delivery for a full refund, provided the item is in its
                                    original condition and packaging. Shipping costs are non-refundable. We reserve the right to refuse a
                                    return or issue a partial refund if the item is damaged or used.
                                </p>
                            </section>
                            <section className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                                <h2 className="mb-4 text-2xl font-bold">Intellectual Property</h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    All content on our website, including but not limited to text, graphics, logos, and images, is the
                                    property of Acme Store and is protected by copyright and trademark laws. You may not reproduce,
                                    distribute, or create derivative works from any part of our website without our prior written consent.
                                </p>
                            </section>
                            <section className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                                <h2 className="mb-4 text-2xl font-bold">Limitation of Liability</h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    In no event shall Acme Store be liable for any indirect, special, incidental, or consequential damages
                                    arising out of or in connection with the use of our website or the purchase of any products. Our total
                                    liability shall not exceed the amount paid for the product or service.
                                </p>
                            </section>
                            <section className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                                <h2 className="mb-4 text-2xl font-bold">Governing Law and Jurisdiction</h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    These terms and conditions shall be governed by and construed in accordance with the laws of
                                    [Jurisdiction], and any disputes arising from or related to these terms and conditions shall be resolved
                                    in the courts of [Jurisdiction].
                                </p>
                            </section>
                            <section className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                                <h2 className="mb-4 text-2xl font-bold">Modifications</h2>
                                <p className="text-gray-600 dark:text-gray-400">
                                    We reserve the right to modify these terms and conditions at any time without prior notice. It is your
                                    responsibility to review these terms and conditions periodically for any changes. Your continued use of
                                    our website after any modifications constitutes your acceptance of the new terms and conditions.
                                </p>
                            </section>
                        </div>
                    </div>
                </main>

            </div>
        </div>
    )
}

export default TermsOfUse