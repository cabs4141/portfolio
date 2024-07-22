import { useState } from "react";
import { Spinner } from "@nextui-org/spinner";
import { notification } from "antd";

export default function ContactMe({ id }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const openNotificationWithIcon = (type, message) => {
    notification[type]({
      message: message,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = { name, email, message };
    console.log(result);
    try {
      const response = await fetch("https://portfolio-api-production-be4d.up.railway.app/contact/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result),
      });

      if (response.status !== 200) {
        throw new Error("Network response was not ok");
      }

      // Show success notification
      openNotificationWithIcon("success", "Message sent successfully!");
    } catch (error) {
      console.error("Fetch error:", error);
      openNotificationWithIcon("error", "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id={id} className="relative isolate bg-dark px-6 pt-28 pb-28 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-400 sm:text-4xl ">Contact me</h2>
        <p className="mt-4 text-lg leading-8 text-gray-400">Send message here 🚀</p>
      </div>
      <form onSubmit={handleSubmit} className=" mx-auto mt-16 max-w-xl">
        {loading && (
          <div className="absolute inset-0 flex justify-center items-center bg-opacity-50 bg-gray-500">
            <Spinner />
          </div>
        )}
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-300">
              Name
            </label>
            <div className="mt-2.5">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="your name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-300">
              Email
            </label>
            <div className="mt-2.5">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-300">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="send message here"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            send message
          </button>
        </div>
      </form>
    </div>
  );
}
