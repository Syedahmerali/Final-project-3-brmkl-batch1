import Head from 'next/head';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-sky-950 to-sky-700 shadow-2xl text-white">
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-sky-950 rounded-lg p-8 shadow-lg max-w-lg w-full">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Contact <span className="text-sky-500">Me!</span>
          </h1>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-sky-950 rounded-lg p-2 border border-sky-500 focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-sky-950 rounded-lg p-2 border border-sky-500 focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="bg-sky-950 rounded-lg p-2 border border-sky-500 focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Email Subject"
                className="bg-sky-950 rounded-lg p-2 border border-sky-500 focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="bg-sky-950 rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-400 w-full mb-4 h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-400 text-sky-950 font-bold py-2 px-4 rounded-lg w-full hover:bg-blue-500 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Contact;
