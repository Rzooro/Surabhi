import React from "react";
import { MdCall, MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="flex flex-col mt-[5rem] lap:mt-[9rem] gap-12">
      <h1 className="font-Alegreya text-8xl lap:text-[10rem] text-center text-lime-600 leading-none tracking-tight">
        Get in Touch!
      </h1>

      <div className="flex flex-col gap-y-14 items-center lap:items-start lap:flex-row justify-center mb-20 lap:gap-20">
        <div className="flex flex-col gap-10 w-[95%] lap:w-auto">
          <div className="flex flex-col items-center gap-4">
            <h2 className="font-Oswald text-4xl">Help Desk</h2>
            <p className="font-Lato text-lg text-center">
              We welcome your feedback, suggestions, and questions.
              <br />
              Please write to us.
            </p>
          </div>

          {/* FORM */}
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="Name" className="text-lg font-Lato">
                Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                id="Name"
                className="border border-black rounded-md w-full h-8 text-lg font-Lato px-3"
                required
              />
            </div>

            <div className="flex gap-8">
              <div className="flex flex-col gap-1">
                <label htmlFor="Phone" className="text-lg font-Lato">
                  Phone<span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Mobile No"
                  id="Phone"
                  className="border border-black rounded-md w-full lap:w-60 h-8 text-lg font-Lato px-3"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="Mail" className="text-lg font-Lato">
                  E-Mail<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Mail ID"
                  id="Mail"
                  className="border border-black rounded-md w-full lap:w-60 h-8 text-lg font-Lato px-3"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="msg" className="text-lg font-Lato">
                Message<span className="text-red-600">*</span>
              </label>
              <textarea
                id="msg"
                className="border border-black rounded-md w-full h-28 text-lg font-Lato px-3 pt-1 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-lime-600 text-lg font-Lato rounded-lg px-4 py-1 w-fit place-self-center text-white">
              Submit
            </button>
          </form>
        </div>

        {/* ADDRESS */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-Oswald text-4xl text-center">
              Address & Contact Info
            </h1>

            <p className="font-Lato lap:text-lg text-center lap:text-left w-[95%] lap:w-auto">
              #22, 1st cross, Siddappa Layout, Gubbalala, near Vajarahalli
              <br />
              metro station, Kanakapura Main Road, Bengaluru-560061
            </p>

            <div className="flex gap-4 justify-center">
              <div className="flex items-center gap-2 font-Lato">
                <MdCall />
                <span className="font-bold">+91 8073779126</span>
              </div>

              <div className="flex items-center gap-2 font-Lato">
                <MdEmail />
                <a
                  href="mailto:surabhitrustb@gmail.com?subject=Enquiry&body=Hello%20Surabhi%20Team,"
                  className="text-blue-600 font-bold">
                  surabhitrustb@gmail.com
                </a>
              </div>
            </div>

            <iframe
              className="rounded-xl border border-lime-600 mt-4 lap:w-[30rem] lap:h-[18rem]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.372075707676!2d77.53925707417001!3d12.883779816799423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159b42954b63%3A0x20fb0dcaa346019a!2sSurabhi%20Foundation%20Trust!5e0!3m2!1sen!2sin!4v1739607751544!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
