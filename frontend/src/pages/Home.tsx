import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <header className="bg-gray-100 p-5 text-center">
        <h1 className="text-3xl font-bold">Welcome to My Blog</h1>
        <p className="text-gray-600">Sharing thoughts, ideas, and experiences.</p>
      </header>

      <main className="flex-grow p-6">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-300 p-4 rounded-md">
              <h3 className="text-xl font-medium mb-2">Blog Title 1</h3>
              <p className="text-gray-700">Short description of the blog...</p>
              <a href="#" className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Read More
              </a>
            </div>
            <div className="border border-gray-300 p-4 rounded-md">
              <h3 className="text-xl font-medium mb-2">Blog Title 2</h3>
              <p className="text-gray-700">Short description of the blog...</p>
              <a href="#" className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Read More
              </a>
            </div>
          </div>
        </section>

        <section className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4">Join our community!</h2>
          <div className="flex justify-center space-x-4">
            <button
              className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600"
              onClick={() => {
                navigate("/signup")
              }}
            >
              Sign Up
            </button>
            <button
              className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={() => {
                navigate("/signin")
              }}
            >
              Sign In
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;