import Navbar from '../layout/Navbar';

function ErrorPage() {
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center mt-5">
        <h1 className="text-danger">Page not found: 404</h1>
      </div>
    </>
  );
}

export default ErrorPage;
