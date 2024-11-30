
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function TermsOfUse() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
            <main className="container mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="mb-8 sm:mb-12 text-4xl sm:text-5xl font-extrabold text-center tracking-tight">
                        Terms and Conditions
                    </h1>
                    <div className="space-y-6 sm:space-y-8 md:space-y-10">
                        {sections.map((section, index) => (
                            <section
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
                            >
                                <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold">{section.title}</h2>
                                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{section.content}</p>
                            </section>
                        ))}
                    </div>
                    <div className="mt-10 sm:mt-12 text-center">
                        <Link
                            href="/"
                            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 hover:bg-blue-700 text-sm sm:text-base"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </main>

        </div>
    )
}

const sections = [
    {
        title: 'Introduction',
        content:
            'Welcome to our ecommerce website. By accessing or using our website, you agree to be bound by these terms and conditions and our privacy policy.',
    },
    {
        title: 'Ordering and Payment',
        content:
            'All orders placed on our website are subject to availability and acceptance by us. We reserve the right to refuse or cancel any order for any reason. Payment must be made in full at the time of order placement.',
    },
    {
        title: 'Shipping and Delivery',
        content:
            'We aim to ship all orders within 2-3 business days. Delivery times may vary depending on your location and the shipping method you choose. We are not responsible for any delays or issues with the shipping carrier.',
    },
    {
        title: 'Returns and Refunds',
        content:
            'You may return any item within 30 days of delivery for a full refund, provided the item is in its original condition and packaging. Shipping costs are non-refundable. We reserve the right to refuse a return or issue a partial refund if the item is damaged or used.',
    },
    {
        title: 'Intellectual Property',
        content:
            'All content on our website, including but not limited to text, graphics, logos, and images, is the property of Acme Store and is protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works from any part of our website without our prior written consent.',
    },
    {
        title: 'Limitation of Liability',
        content:
            'In no event shall Acme Store be liable for any indirect, special, incidental, or consequential damages arising out of or in connection with the use of our website or the purchase of any products. Our total liability shall not exceed the amount paid for the product or service.',
    },
    {
        title: 'Governing Law and Jurisdiction',
        content:
            'These terms and conditions shall be governed by and construed in accordance with the laws of [Jurisdiction], and any disputes arising from or related to these terms and conditions shall be resolved in the courts of [Jurisdiction].',
    },
    {
        title: 'Modifications',
        content:
            'We reserve the right to modify these terms and conditions at any time without prior notice. It is your responsibility to review these terms and conditions periodically for any changes. Your continued use of our website after any modifications constitutes your acceptance of the new terms and conditions.',
    },
]

