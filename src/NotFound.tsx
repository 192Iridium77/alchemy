const NotFound = () => {
  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center">
        <img src="/404.jpg" alt="404" className="h-64" />
        <p>The page you were looking for was not found.</p>
        <a className="text-primary-200 px-4 py-2 my-12" href="/">
          <div className="border-b border-primary-200">Back to Home</div>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
