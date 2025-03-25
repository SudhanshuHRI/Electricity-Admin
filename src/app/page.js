"use client";
import {
  FaCircleUser,
  FaLock,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa6";

import Link from "next/link";


export default function Login() {
  return (
    <>
      <div className="page">
        <div className="page-single construction-body">
          <div className="container text-center single-page single-pageimage  ">
            <div className="row">
              <div className="col-xl-7 col-lg-6 col-md-12">
                <img
                  src="/login.svg"
                  className="construction-img mb-7 h-480  mt-5 mt-xl-0"
                  alt=""
                />
              </div>
              <div className="col-xl-5  col-lg-6 col-md-12 ">
                <div className="col-lg-11">
                  <img
                    src="/logo.png"
                    className="header-brand-img light-view mb-4"
                    alt="logo"
                  />
                  <div className="wrapper wrapper2">
                    <form id="login" className="card-body" tabIndex={500}>
                      <h2 className="mb-1 font-weight-semibold">
                        Login
                      </h2>
                      <p className="mb-6">Sign In to your account</p>
                      <div className="input-group mb-3">
                        <span className="input-group-addon">
                          <FaCircleUser />
                        </span>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Username"
                          onChange={(e) => setEmail(e?.target?.value)}
                          required={true}
                        />
                      </div>
                      <div className="input-group mb-4">
                        <span className="input-group-addon">
                          <FaLock />
                        </span>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          onChange={(e) => setPass(e?.target?.value)}
                          required={true}
                        />
                      </div>
                      <div className="row mb-0">
                        <div className="col-12">
                          <button className="btn btn-primary btn-block">
                            Login
                          </button>
                        </div>
                        <div className="col-12 mb-0">
                          <Link
                            href="/forgot"
                            className="btn btn-link box-shadow-0 px-0"
                          >
                            Forgot password?
                          </Link>
                        </div>
                      </div>
                    </form>

                    <div className="card-body social-icons border-top">
                      <a
                        className="btn  btn-social btn-fb mr-2"
                        href="https://www.facebook.com"
                      >
                        <FaFacebookF />
                      </a>
                      <a
                        className="btn  btn-social btn-googleplus mr-2"
                        href="https://www.youtube.com"
                      >
                        <FaYoutube />
                      </a>
                      <a
                        className="btn  btn-social btn-twitter-transparant  "
                        href="https://www.twitter.com"
                      >
                        <FaTwitter />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
