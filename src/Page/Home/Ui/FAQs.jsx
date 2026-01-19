import React from "react";

const FAQs = () => {
  return (
    <div>
      <div className="my-20">
        {" "}
        <div className="max-w-4xl mx-auto">
          {" "}
          {/* Header */}{" "}
          <div className="text-center mb-12">
            {" "}
            <h1 className="text-4xl font-bold text-secondary mb-4">
              {" "}
              Frequently Asked Question (FAQ){" "}
            </h1>{" "}
            <p className="text-gray-600 max-w-2xl mx-auto">
              {" "}
              Enhance posture, mobility, and well-being effortlessly with
              Posture Pro. Achieve proper alignment, reduce pain, and strengthen
              your body with ease!{" "}
            </p>{" "}
          </div>{" "}
          {/* FAQ Accordion */}{" "}
          <div className="space-y-4 mb-8">
            {" "}
            {/* FAQ 1 */}{" "}
            <div className="collapse collapse-arrow bg-white border border-teal-200 rounded-2xl shadow-sm">
              {" "}
              <input type="radio" name="faq-accordion" defaultChecked />{" "}
              <div className="collapse-title text-lg font-medium text-gray-800 pr-12">
                {" "}
                How does this posture corrector work?{" "}
              </div>{" "}
              <div className="collapse-content">
                {" "}
                <p className="text-gray-600 leading-relaxed">
                  {" "}
                  A posture corrector works by providing support and gentle
                  alignment to your shoulders, back, and spine, encouraging you
                  to maintain proper posture throughout the day. Here's how it
                  typically functions: A posture corrector works by providing
                  support and gentle alignment to your shoulders.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            {/* FAQ 2 */}{" "}
            <div className="collapse collapse-arrow bg-white border border-teal-200 rounded-2xl shadow-sm">
              {" "}
              <input type="radio" name="faq-accordion" />{" "}
              <div className="collapse-title text-lg font-medium text-gray-800 pr-12">
                {" "}
                Is it suitable for all ages and body types?{" "}
              </div>{" "}
              <div className="collapse-content">
                {" "}
                <p className="text-gray-600 leading-relaxed">
                  {" "}
                  Yes, our posture corrector is designed to be adjustable and
                  suitable for various ages and body types. The straps can be
                  customized to fit different body sizes comfortably.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            {/* FAQ 3 */}{" "}
            <div className="collapse collapse-arrow bg-white border border-teal-200 rounded-2xl shadow-sm">
              {" "}
              <input type="radio" name="faq-accordion" />{" "}
              <div className="collapse-title text-lg font-medium text-gray-800 pr-12">
                {" "}
                Does it really help with back pain and posture improvement?{" "}
              </div>{" "}
              <div className="collapse-content">
                {" "}
                <p className="text-gray-600 leading-relaxed">
                  {" "}
                  Many users report significant improvements in back pain and
                  posture after consistent use. The corrector helps train your
                  muscles to maintain proper alignment, which can reduce strain
                  and discomfort over time.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            {/* FAQ 4 */}{" "}
            <div className="collapse collapse-arrow bg-white border border-teal-200 rounded-2xl shadow-sm">
              {" "}
              <input type="radio" name="faq-accordion" />{" "}
              <div className="collapse-title text-lg font-medium text-gray-800 pr-12">
                {" "}
                Does it have smart features like vibration alerts?{" "}
              </div>{" "}
              <div className="collapse-content">
                {" "}
                <p className="text-gray-600 leading-relaxed">
                  {" "}
                  Yes, our advanced model includes smart vibration alerts that
                  gently remind you when your posture needs correction, helping
                  you develop better habits throughout the day.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            {/* FAQ 5 */}{" "}
            <div className="collapse collapse-arrow bg-white border border-teal-200 rounded-2xl shadow-sm">
              {" "}
              <input type="radio" name="faq-accordion" />{" "}
              <div className="collapse-title text-lg font-medium text-gray-800 pr-12">
                {" "}
                How will I be notified when the product is back in stock?{" "}
              </div>{" "}
              <div className="collapse-content">
                {" "}
                <p className="text-gray-600 leading-relaxed">
                  {" "}
                  You can sign up for email notifications on the product page.
                  We'll send you an alert as soon as the item is available for
                  purchase again.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* See More Button */}{" "}
          <div className="flex justify-center">
            {" "}
            <button className="btn bg-lime-400 hover:bg-lime-500 border-none text-gray-800 font-semibold px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
              {" "}
              See More FAQ
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default FAQs;
