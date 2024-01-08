"use client"
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import banner from '../public/img/Eke.jpg'


export default function Refund() {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);

  return (
    <>
    <Header/>
    <div className=" 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
    <h2 className=" font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800">Return, Exchange, and Refund Policy</h2>
    <div className="mt-4 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start">
        <div className=" ">
            <p className=" font-normal text-base leading-6 text-gray-600 lg:w-8/12 md:w-9/12 ">Here are few of the most frequently asked questions by our valueable customers</p>
        </div>

      
    </div>
    <div className=" flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
        <div className=" md:w-5/12 lg:w-4/12 w-full ">
            <Image src={banner}  width={100} height={100}  alt="Img of Glass bottle" className="w-full md:block hidden" placeholder = 'empty' />
            <Image src={banner} width={100} height={100}  alt="Img of Glass bottle" className="w-full md:hidden block  "  placeholder = 'empty'/>
        </div>
        <div className=" md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
            {/* <!-- Shipping Section --> */}
            <div>
                <div className=" flex justify-between items-center cursor-pointer">
                    <h3 className=" font-semibold text-xl leading-5 text-gray-800">Returns</h3>
                    <button aria-label="too" className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setShow(!show)}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className={show ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (show ? "block" : "hidden")}>Eligibility: You may return a product within 15 days from the date of purchase if it meets the following criteria:

The product is unopened, unused, and in its original packaging.
It is in a resalable condition.
The product is not part of our non-returnable items (see section 1.3)..

The following items are non-returnable:

Products that have been opened or used.
Products with tampered or broken seals.
Gift cards and promotional items.
Items purchased from unauthorized resellers or third-party sellers.</p>
            </div>

            <hr className=" my-7 bg-gray-200" />

            {/* <!-- Returns Section --> */}

            <div>
                <div className=" flex justify-between items-center cursor-pointer">
                    <h3 className=" font-semibold text-xl leading-5 text-gray-800">Refund</h3>
                    <button aria-label="too" className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setShow2(!show2)}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className={show2 ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (show2 ? "block" : "hidden")}>Eligibility: You may request a refund within 30 days from the date of purchase if you meet the following criteria:

The product is unopened, unused, and in its original packaging.
It is in a resalable condition.
You have proof of purchase (receipt or invoice)..</p>
            </div>

            <hr className=" my-7 bg-gray-200" />

            {/* <!-- Exchange Section --> */}

            <div>
                <div className=" flex justify-between items-center cursor-pointer">
                    <h3 className=" font-semibold text-xl leading-5 text-gray-800">Terms and condition</h3>
                    <button aria-label="too" className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setShow3(!show3)}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className={show3 ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (show3 ? "block" : "hidden")}>
                    1. Acceptance of Terms

By accessing and using the services, products, and website provided by Your Choice, you agree to abide by these terms and conditions. If you do not agree with these terms, please refrain from using our services.
<br/>
2. Product Information

2.1 Product Descriptions: We strive to provide accurate descriptions of our perfumes, including ingredients, sizes, and fragrances. However, we cannot guarantee the accuracy of product descriptions, and variations may occur.

2.2 Use of Products: Our perfumes are intended for personal use and may not be resold without explicit written consent from Your Choice.
<br/>
3. Ordering and Payment

3.1 Order Placement: Orders are subject to acceptance and availability. We reserve the right to cancel or refuse orders at our discretion.

3.2 Pricing: All prices are in [Currency] and inclusive of applicable taxes. Shipping charges, if any, will be added to your order.

3.3 Payment: We accept [List of Accepted Payment Methods]. Payment must be made in full before we process and ship your order.
<br/>
4. Shipping and Delivery

4.1 Delivery Times: We will make every effort to deliver your order within the estimated delivery timeframes. However, we are not responsible for delays caused by external factors beyond our control.

4.2 Shipping Costs: Shipping costs are calculated based on your location and the shipping method chosen during the checkout process.

4.3 International Orders: If you are placing an international order, you are responsible for any customs duties or import restrictions that may apply in your country.
<br/>
5. Returns and Refunds

Please refer to our "Return, Exchange, and Refund Policy" for detailed information on our policy regarding returns and refunds.
<br/>
6. Privacy and Data Protection

6.1 Privacy Policy: Our Privacy Policy governs the collection, use, and protection of your personal information. Please review our Privacy Policy for more information.

6.2 Data Security: We take reasonable steps to protect your data; however, we cannot guarantee the security of information transmitted over the internet.
<br/>
7. Intellectual Property

7.1 Trademarks: All trademarks, logos, and branding belong to Your Choice and may not be used without our prior written consent.

7.2 Copyright: All content on our website, including text, images, and graphics, is protected by copyright and may not be reproduced without permission.
<br/>
8. Limitation of Liability

Your Choice shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our products or services.
<br/>
9. Governing Law and Jurisdiction

These terms and conditions are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
<br/>
10. Amendments

Your Choice reserves the right to amend these terms and conditions at any time. Revised terms will be posted on our website, and it is your responsibility to review them periodically.
<br/>
11. Contact Information

If you have questions or concerns regarding these terms and conditions, please contact us at [Customer Support Email or Phone Number].

By using our services and products, you acknowledge that you have read, understood, and agreed to these terms and conditions..</p>
            </div>

            <hr className=" my-7 bg-gray-200" />


            <div>
                <div className=" flex justify-between items-center cursor-pointer">
                    <h3 className=" font-semibold text-xl leading-5 text-gray-800">Shipping</h3>
                    <button aria-label="too" className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setShow4(!show4)}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className={show4 ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (show4 ? "blcok" : "hidden")}>1.1 Domestic Shipping: We offer domestic shipping to addresses within India. Our standard shipping method typically takes 4 to 8 business days for delivery.

1.2 International Shipping: For our international customers, we provide shipping to select countries. International shipping times may vary depending on the destination, customs clearance, and local postal services. Please refer to the estimated delivery times provided during checkout.
<br/>
2. Shipping Costs

2.1 Domestic Shipping: The cost of domestic shipping is determined based on the total order value and the selected shipping method. Shipping costs are calculated during the checkout process and will be clearly displayed before you complete your purchase.

2.2 International Shipping: International shipping costs are calculated based on the destination country, the total order value, and the selected shipping method. These costs will be displayed during checkout.
<br/>

3. Order Processing

3.1 Order Confirmation: Once your order is placed and payment is received, you will receive an order confirmation email. Please review this email to ensure that all order details are correct. If you notice any discrepancies, contact our customer support team immediately.

3.2 Order Processing Time: Orders are typically processed within 4 to 8 business days from the date of purchase. Please note that processing times may vary during peak seasons.
<br/>

4. Tracking Your Order

4.1 Tracking Information: For shipments within India, you will receive a tracking number via email once your order is shipped. You can use this tracking number to monitor the status of your shipment.

4.2 International Shipments: International customers will also receive a tracking number. However, tracking availability may vary depending on the destination and local postal services.
<br/>

5. Shipping Restrictions

5.1 Hazardous Materials: Due to international shipping regulations, some perfume products may not be available for international shipment. Please review our product descriptions and restrictions before placing an order.

5.2 PO Boxes: We do not ship to PO boxes for security and delivery reasons. Please provide a physical street address for delivery.
<br/>

6. Customs and Duties

6.1 International Customs: When shipping internationally, please be aware that customs duties, taxes, and import fees may be applicable in your country. These charges are the responsibility of the recipient and are not included in the purchase price or shipping costs.
<br/>

7. Delivery Issues

7.1 Lost or Delayed Shipments: While we make every effort to ensure timely and accurate deliveries, we are not responsible for delays or loss of shipments caused by external factors beyond our control, such as weather, customs delays, or incomplete address information.

7.2 Address Accuracy: It is essential to provide accurate and complete shipping information during the checkout process. We are not responsible for misdelivered or undeliverable shipments due to incorrect or incomplete addresses.
<br/>

8. Contact Information

If you have any questions or require assistance regarding our shipping policy or the status of your order, please contact our customer support team at [Customer Support Email or Phone Number].

By placing an order with Your Choice, you agree to adhere to the terms and conditions outlined in this shipping policy..</p>
            </div>

            <hr className=" my-7 bg-gray-200" />

            <div>
                <div className=" flex justify-between items-center cursor-pointer">
                    <h3 className=" font-semibold text-xl leading-5 text-gray-800">Cancellation</h3>
                    <button aria-label="too" className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setShow5(!show5)}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className={show5 ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (show5 ? "blcok" : "hidden")}>
                

1. Order Cancellation

1.1 Cancellation Window: Customers may cancel their orders within 1 hours of placing the order. Cancellation requests made after this period may not be accepted.

1.2 How to Request a Cancellation: To request an order cancellation, please contact our customer support team at +91 8452050281 as soon as possible. Please include your order number and the reason for cancellation in your request.

<br/>
2. Cancellation Eligibility

2.1 Eligible Orders: Orders are eligible for cancellation if they meet the following criteria:

The order has not been shipped or dispatched from our warehouse.
The order has not entered the processing or packaging stage.
2.2 Non-Eligible Orders: Orders that have already been shipped, processed, or are in the packaging stage cannot be canceled. In such cases, customers may refer to our "Return, Exchange, and Refund Policy" for further instructions.
<br/>

3. Refund for Canceled Orders

3.1 Refund Process: If your cancellation request is approved, we will process a refund to your original payment method. Please allow 14 business days for the refund to be completed.

3.2 Cancellation Fees: Your Choice reserves the right to apply a cancellation fee in certain cases. The fee, if applicable, will be communicated to you when you request the cancellation.
<br/>

4. Contact Information

If you have questions or need assistance regarding order cancellations, please contact our customer support team at skadil718@gmail.com or +91 8452050281.
<br/>

5. Amendments

Your Choice reserves the right to amend this cancellation policy at any time without prior notice. Please check our website for the most up-to-date version of our cancellation policy.
                </p>
            </div>

        </div>
    </div>
</div>
<Footer/>
</>
  )
}
