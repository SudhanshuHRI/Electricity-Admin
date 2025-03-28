"use client";
import Link from "next/link";
import Head from "next/head";
import { FaStar } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";

//import { deleteData, getData } from '@/helpers/services';
import { useEffect, useState } from "react";
import AdminLayout from "../../layout/AdminLayout";

//import { Toaster, toast } from "sonner";
//import { verifyIsLoggedIn } from '@/helpers/helper';
import { useRouter } from "next/router";

const Listustomers = () => {
  //const route = useRouter();
  const [totalCustomers, setTotalCustomers] = useState("");
  const [isSubmitingLoader, setisSubmitingLoader] = useState(false);
  const [refresh, setRefresh] = useState();

  const getCustomer = async () => {
    setisSubmitingLoader(true);
    const resp = await getData("/GetAllUser");

    const filterCustomer = resp?.data?.filter((e) => e.user_type == "Customer");

    setTotalCustomers(filterCustomer);
    setisSubmitingLoader(false);
  };

  const deleteCustomer = async (id) => {
    setisSubmitingLoader(true);
    try {
      const resp = await deleteData("/DeleteUser", { delId: id });
      console.log("delete resp", resp);
      resp?.message == "User Deleted Successfully"
        ? toast.success(resp?.message)
        : toast.error(resp?.message);
      setRefresh(Math.random);
    } catch (error) {
      console.log("try-catch error", error);
    }
    setisSubmitingLoader(false);
  };
  return (
    <AdminLayout>
      <>
        <Head>
          <title>Customer&apos;s List</title>
        </Head>
        {isSubmitingLoader ? (
          <div className="overlay">
            <div className="spinner-container">
              <img className="animatingSpinnerSvg" src="/spinner.svg" alt="" />
            </div>
          </div>
        ) : null}

        <div className="app-content">
          <div className="side-app leftmenu-icon">
            <div className="page-header">
              <div className="page-leftheader">
                <h4 className="page-title">List of Customers</h4>
                <ol className="breadcrumb pl-0">
                  <li className="breadcrumb-item">
                    <a href="/Dashboard">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    List of Users
                  </li>
                </ol>
              </div>
              <div className="page-rightheader">
                <div className="ml-3 ml-auto d-flex">&nbsp;</div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table card-table table-bordered table-vcenter text-nowrap table-primary">
                        <thead className="bg-primary text-white">
                          <tr>
                            <th className="text-white">Sr.no.</th>
                            <th className="text-white">User ID</th>
                            <th className="text-white">User Name</th>
                            <th className="text-white">Location</th>
                            <th className="text-white">Zip Code</th>
                            <th className="text-white">Email ID</th>
                            <th className="text-white">Contact No.</th>
                            <th className="text-white">User Type</th>
                            <th className="text-white">user status</th>
                            {/* <th className="text-white">Rating</th> */}
                            <th className="text-white">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>sdf</td>
                            <th scope="row">asdf</th>
                            <td>asdf</td>
                            <td>df</td>
                            <td>sdfa</td>
                            <td>asdf</td>
                            <td>asdf</td>
                            <td>asdf</td>
                            <td>sdfa</td>
                            <td className="text-center">
                              <FaTrashAlt style={{ cursor: "pointer" }} />
                            </td>
                          </tr>
                          <tr>
                            <td>sdf</td>
                            <th scope="row">asdf</th>
                            <td>asdf</td>
                            <td>df</td>
                            <td>sdfa</td>
                            <td>asdf</td>
                            <td>asdf</td>
                            <td>asdf</td>
                            <td>sdfa</td>
                            <td className="text-center">
                              <FaTrashAlt style={{ cursor: "pointer" }} />
                            </td>
                          </tr>
                          <tr>
                            <td>sdf</td>
                            <th scope="row">asdf</th>
                            <td>asdf</td>
                            <td>df</td>
                            <td>sdfa</td>
                            <td>asdf</td>
                            <td>asdf</td>
                            <td>asdf</td>
                            <td>sdfa</td>
                            <td className="text-center">
                              <FaTrashAlt style={{ cursor: "pointer" }} />
                            </td>
                          </tr>
                          <tr>
                            <td>sdf</td>
                            <th scope="row">asdf</th>
                            <td>asdf</td>
                            <td>df</td>
                            <td>sdfa</td>
                            <td>asdf</td>
                            <td>asdf</td>
                            <td>asdf</td>
                            <td>sdfa</td>
                            <td className="text-center">
                              <FaTrashAlt style={{ cursor: "pointer" }} />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </AdminLayout>
  );
};

export default Listustomers;
