"use client";

const Error: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
        <p className="text-lg mb-8">
          We&apos;re sorry, but an unexpected error has occurred.
        </p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={() => window.location.reload()}
        >
          Reload Page
        </button>
      </div>
    </div>
  );
};

export default Error;
