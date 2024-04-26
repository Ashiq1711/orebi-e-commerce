import React from "react";

function ContactForm() {
  return (
    <div className="">
      <form className="max-w-[780px] px-3 md:px-0">
        <h1 className=" font-bold text-2xl md:text-[40px] pb-10">
          Fill up a Form
        </h1>
        <div className="mb-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="large-input"
          >
            Name
          </label>
          <input
            className="block outline-none border-b w-full p-3 text-gray-900   rounded-lg bg-gray-50 text-base  focus:border-blue-500 "
            id="large-input"
            type="text"
            placeholder="Your name here"
          />
        </div>
        <div className="mb-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="base-input"
          >
            Email
          </label>
          <input
            className="bg-gray-50 outline-none border-b  text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-3"
            id="base-input"
            type="email"
            placeholder="Your email here"
          />
        </div>
        <div>
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg outline-none border-b   focus:border-blue-500 dark:bg-gray-700"
            placeholder="Your message here..."
          ></textarea>
        </div>
        <button className=" font-bold text-[14px] px-20 py-4 text-white bg-black rounded-md mt-8 border  focus:border-blue-500 block  p-3 dark:bg-gray-700 ">
          Post
        </button>
      </form>
      <div className=" mt-10 px-3 md:px-0">
        <iframe
          className=" w-full"
          allowFullScreen
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.9827861021913!2d89.83921157592441!3d23.604950294343663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe3acf7a421d3d%3A0x58b1380341373723!2sRajendra%20College%20Rd%2C%20Faridpur!5e0!3m2!1sen!2sbd!4v1714045007333!5m2!1sen!2sbd"
        />
      </div>
    </div>
  );
}

export default ContactForm;
