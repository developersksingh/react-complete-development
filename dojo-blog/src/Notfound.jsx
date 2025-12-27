const NotFound = () => {
  return (
    <div className="container">
      <div className="row vh-100 align-items-center justify-content-center">
          <img src="./404.png" alt="404" className="img-responsive justify-content-center" width={100} height={600}/>
        <div className="col-md-6 text-center">
          <h1 className="display-1 fw-bold text-danger">404</h1>
          <h2 className="mb-3">Page Not Found</h2>
          <p className="text-muted mb-4">
            Sorry, the page you are looking for does not exist.
          </p>

          <a href="/" className="btn btn-primary">
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
