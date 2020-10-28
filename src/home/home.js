import "../common/common.scss";
import { Navbar } from "../NavbarComponent/Navbar";
import "./home.scss";

export function HomeComponent() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="d-flex flex-column mt-2">
          <div>
            <h1 className="text-responsive-title font-weight-bold">
              <strong>
                Create awesome <br />
                blogs easily
              </strong>
            </h1>
          </div>
          <div className="col-sm-12 col-lg-6 mt-4">
            <p className="text-justify font-weight-bold">
              Whether sharing your expertise, breaking news, or whatever’s on
              your mind, you’re in good company on blogPen . Sign up to discover
              why people have published their passions here.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
