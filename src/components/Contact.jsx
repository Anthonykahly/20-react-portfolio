import React from "react";

//contact form
const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#B6BBC4] flex justify-center items-center p-4"
    >
      <form
        method="post"
        action="https://getform.io/f/f21f3e98-5a51-4300-a762-ae40e802b0d3"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-5xl font-extrabold inline border-b-4 text-[#31304D]">
            Contact me!
          </p>
          <p className="text-[#161A30] py-4">
            Submit the form below or contact me at akahly@gmail.com
          </p>
        </div>
        <input
          className="bg-white border-[#161A30] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-white border-[#161A30]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-white border-[#161A30] p-2"
          name="message"
          placeholder="Message"
          rows="10"
        ></textarea>
        <button className="text-[white] text-2xl border-2 bg-[#B6BBC4] hover:bg-[#161A30]">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
