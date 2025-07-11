// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="border-t bg-white">
//       <div className="max-w-7xl mx-auto flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between md:py-12 px-4">
//         <div className="text-center md:text-left">
//           <p className="text-sm text-gray-600">
//             © {new Date().getFullYear()} Tammana Sai Praveen. All rights reserved.
//           </p>
//         </div>
//         <div className="flex justify-center gap-4">
//           <a
//             href="https://www.linkedin.com/in/sai-praveen-tammana-a6a468273"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-600 hover:text-gray-900 transition-colors"
//           >
//             💼 LinkedIn
//           </a>
//           <a
//             href="https://github.com/TammanaSaiPraveen"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-600 hover:text-gray-900 transition-colors"
//           >
//             📁 GitHub
//           </a>
//           <a
//             href="https://wa.me/918333933768"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-600 hover:text-gray-900 transition-colors"
//           >
//             📱 WhatsApp
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";

const Footer = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer
      className="border-t border-gray-200 dark:border-gray-700 transition-colors duration-300"
      style={{ backgroundColor: 'var(--background-color)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between md:py-12 px-4">
        <div className="text-center md:text-left">
          <p
            className="text-sm"
            style={{ color: 'var(--text-light)' }}
          >
            © {new Date().getFullYear()} Tammana Sai Praveen. All rights reserved.
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={() =>
              openInNewTab("https://www.linkedin.com/in/sai-praveen-tammana-a6a468273")
            }
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
            style={{ color: 'var(--text-light)' }}
          >
            💼 LinkedIn
          </button>
          <button
            onClick={() => openInNewTab("https://github.com/TammanaSaiPraveen")}
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
            style={{ color: 'var(--text-light)' }}
          >
            📁 GitHub
          </button>
          <button
            onClick={() => openInNewTab("https://wa.me/918333933768")}
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
            style={{ color: 'var(--text-light)' }}
          >
            📱 WhatsApp
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
