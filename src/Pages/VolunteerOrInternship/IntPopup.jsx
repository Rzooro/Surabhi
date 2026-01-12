import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";

const IntPopup = ({ trigger, setTrigger, children }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (trigger) {
      setIsMounted(true);

      // Ensure initial hidden state renders first
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimate(true);
        });
      });
    } else if (isMounted) {
      setAnimate(false);
      setTimeout(() => setIsMounted(false), 300);
    }
  }, [trigger]);

  // Lock background scroll
  useEffect(() => {
    document.body.style.overflow = isMounted ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isMounted]);

  const closePopup = () => {
    setTrigger(false);
    document.activeElement?.blur();
  };

  if (!isMounted) return null;

  return (
    <div
      className={`
        fixed inset-0 z-50 flex justify-center pt-[8rem]
        transition-colors duration-300
        ${animate ? "bg-black/30" : "bg-black/0"}
      `}
      onClick={closePopup}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          relative bg-white w-full max-w-[40rem] max-h-[80vh] rounded-2xl
          transform transition-all duration-300 ease-out flex flex-col
          ${animate ? "scale-100 opacity-100" : "scale-95 opacity-0"}
        `}>
        <CgClose
          className="absolute top-4 right-4 text-xl cursor-pointer z-10"
          onClick={closePopup}
        />
        <div className="px-10 py-8 overflow-y-auto">
          <form className="flex flex-col gap-5">
            {/* Heading */}
            <div className="flex flex-col items-center">
              <h2 className="text-3xl font-Oswald text-lime-600">
                Register for Internship
              </h2>
              <p className="text-gray-500 font-Lato mt-1">
                Tell us about your academic background and interests.
              </p>
            </div>
            {/* Full Name */}
            <div className="flex flex-col gap-1">
              <label className="font-Lato text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="border rounded-lg px-4 py-2 appearance-none
                   focus:outline-none focus:ring-2 focus:ring-lime-500"
                required
              />
            </div>
            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="font-Lato text-sm text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="border rounded-lg px-4 py-2 appearance-none
                   focus:outline-none focus:ring-2 focus:ring-lime-500"
                required
              />
            </div>
            {/* Phone */}
            <div className="flex flex-col gap-1">
              <label className="font-Lato text-sm text-gray-600">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Your phone number"
                className="border rounded-lg px-4 py-2 appearance-none
                   focus:outline-none focus:ring-2 focus:ring-lime-500"
                required
              />
            </div>
            {/* Institution */}
            <div className="flex flex-col gap-1">
              <label className="font-Lato text-sm text-gray-600">
                Institution / College
              </label>
              <input
                type="text"
                placeholder="Your institution name"
                className="border rounded-lg px-4 py-2 appearance-none
                   focus:outline-none focus:ring-2 focus:ring-lime-500"
                required
              />
            </div>
            {/* Course */}
            <div className="flex flex-col gap-1">
              <label className="font-Lato text-sm text-gray-600">
                Course / Degree
              </label>
              <input
                type="text"
                placeholder="e.g. B.Tech, B.Sc, BA"
                className="border rounded-lg px-4 py-2 appearance-none
                   focus:outline-none focus:ring-2 focus:ring-lime-500"
                required
              />
            </div>
            {/* Year of Study */}
            <div className="flex flex-col gap-1">
              <label className="font-Lato text-sm text-gray-600">
                Year of Study
              </label>
              <select
                className="border rounded-lg px-4 py-2 
                   focus:outline-none focus:ring-2 focus:ring-lime-500"
                required>
                <option value="">Select year</option>
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>Final Year</option>
                <option>Postgraduate</option>
              </select>
            </div>
            {/* Area of Interest */}
            <div className="flex flex-col gap-1">
              <label className="font-Lato text-sm text-gray-600">
                Area of Interest
              </label>
              <select
                className="border rounded-lg px-4 py-2 
                   focus:outline-none focus:ring-2 focus:ring-lime-500"
                required>
                <option value="">Select an option</option>
                <option>Education</option>
                <option>Healthcare</option>
                <option>Environment</option>
                <option>Community Development</option>
                <option>Media & Outreach</option>
                <option>Research</option>
              </select>
            </div>
            {/* Internship Type */}
            <div className="flex flex-col gap-1">
              <label className="font-Lato text-sm text-gray-600">
                Internship Type
              </label>
              <select
                className="border rounded-lg px-4 py-2 
                   focus:outline-none focus:ring-2 focus:ring-lime-500"
                required>
                <option value="">Select type</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Remote</option>
              </select>
            </div>
            {/* Message */}
            <div className="flex flex-col gap-1">
              <label className="font-Lato text-sm text-gray-600">
                Why do you want to intern with us? (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="A short message"
                className="border rounded-lg px-4 py-2 resize-none appearance-none
                   focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
            </div>
            {/* Submit */}
            <button
              type="submit"
              className="bg-lime-600 text-white rounded-lg py-3 font-Kanit
                 hover:bg-lime-700 transition-colors duration-300">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IntPopup;
