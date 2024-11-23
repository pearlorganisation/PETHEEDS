import React, { useEffect } from 'react'

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
    <section className='container max-w-6xl mx-auto py-10'>
     <div  className='p-2'>
        <h1 className='font-medium py-5'>Terms and Conditions</h1>
        <p>Welcome to PETHEEDS LLP. These terms and conditions outline the rules and regulations for the use of our website.</p>
    
     
        <p>By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use www.petheeds.in if you do not accept all of the terms and conditions stated on this page.</p>
          <br></br>
     
        <p>The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice and any or all Agreements: “Client”, “You” and “Your” refers to you, the person accessing this website and accepting the Company’s terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client’s needs in respect of the provision of the Company’s stated services/products, in accordance with and subject to, prevailing law.</p>
     </div>

     <div className='p-2'>
        <h1 className='font-medium py-5 '>You must not:</h1>
        <p>Republish material from www.petheeds.in</p>
         <p>Sell, rent, or sub-license material from www.petheeds.in</p>
         <p>Reproduce, duplicate, or copy material from www.petheeds.in</p>
         <p>Redistribute content from www.petheeds.in</p>
     </div>
     <div className='p-2'>

     <h1 className='font-medium py-5 ' >Privacy Policy</h1>
     <p>We are committed to protecting your privacy. Authorized employees within the company on a need to know basis only use any information collected from individual customers. We constantly review our systems and data to ensure the best possible service to our customers. We will investigate any such actions with a view to prosecuting and/or taking civil proceedings to recover damages against those responsible.</p>
     </div>
     </section>
    </>
  )
}

export default PrivacyPolicy