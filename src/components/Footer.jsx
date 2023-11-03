
function Footer() {
      // Function to handle form submission
  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    // You can add code here to handle the form submission, e.g., send data to your server or a newsletter service.
    // Make sure to handle form validation and data processing as needed.
  };

  return (
    <footer className="bg-gray-900 text-white  px-8 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Contact</h2>
            <p>Email: example@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Social</h2>
            <ul>
              <li><a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Tik-tok</a></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Subscribe</h2>
            <p>Join our newsletter for updates.</p>
            {/* Add your newsletter signup form here */}
            <form onSubmit={handleNewsletterSignup}>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white border border-gray-600 p-2 rounded-l focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600 focus:outline-none"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p>Privacy Policy | Terms of Use</p>
          {/* Additional links, credits, and accessibility statement can be added here */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
