const FullScreenLoader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full p-14">
      <div className="flex space-x-2">
        <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce animation-delay-200"></div>
        <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce animation-delay-400"></div>
      </div>
    </div>
  );
};

export default FullScreenLoader;
