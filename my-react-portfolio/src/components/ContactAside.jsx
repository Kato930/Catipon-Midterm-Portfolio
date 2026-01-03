import React from 'react';

const ContactAside = () => {
  return (
    <aside id="contact" className="col-span-1 bg-indigo-200 p-4 rounded-lg h-min">
      <h4 className="text-xl font-semibold mb-2">Contact me</h4>
      <ol className="list-none p-0 m-0">
        <li>
          <a
            href="mailto:jtcatipon@student.apc.edu.ph"
            className="inline-block bg-blue-600 text-white p-2 rounded hover:bg-blue-700 no-underline transition duration-150"
          >
            Email Me
          </a>
        </li>
      </ol>
    </aside>
  );
};

export default ContactAside;
