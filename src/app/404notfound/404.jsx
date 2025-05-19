// pages/404.jsx
export default function Custom404() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800">
        <h1 className="text-5xl font-bold mb-2">404 – Page Not Found</h1>
        <p className="text-lg">Sorry, we couldn’t find that page.</p>
        <a href="/" className="mt-4 text-blue-600 hover:underline">
          ← Back to home
        </a>
      </div>
    )
  }