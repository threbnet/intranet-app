import profile from "../../../assets/benside.jpg";

const InfoForm = () => {

    return (
        <form className="mt-3 flex w-full p-3">
            <div className="w-full grid grid-cols-3 gap-4">
            <div className="flex gap-4">
              <img
                src={profile}
                className="h-32 w-32 object-cover object-center rounded-lg "
              />
              <div className=" mt-4 gap-3">
                <button className="p-3 bg-gray-600 rounded-lg flex gap-2 mb-4">
                  change photo{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </button>
                <button className="p-3 bg-gray-600 rounded-lg flex gap-2">
                  remove photo{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="my-3  w-full">
              <label className="block py-2">Membership No.</label>
                <input
                  type="text"
                  className="w-full p-2 border bg-transparent rounded-lg"
                  placeholder="Membership No"
                />
              </div>
              <div className="my-3 w-full">
                <label className="block py-2">First Name</label>
                <input
                  type="text"
                  className="w-full p-2 border bg-transparent rounded-lg"
                  placeholder="First Name"
                />
              </div>
              <div className="my-3 w-full">
              <label className="block py-2">Last Name</label>
                <input
                  type="text"
                  className="w-full p-2 border bg-transparent rounded-lg"
                  placeholder="Last Name"
                />
              </div>
              <div className="my-3 w-full">
              <label className="block py-2">Other Names</label>
                <input
                  type="text"
                  className="w-full p-2 border bg-transparent rounded-lg"
                  placeholder="Other Names"
                />
              </div>
              <div className="my-3 w-full">
              <label className="block pb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border bg-transparent rounded-lg"
                  placeholder="Email"
                />
              </div>
              {/* <hr className="w-1/2" /> */}
              <div className="my-3 w-full">
              <label className="block py-2">Username</label>
                <input
                  type="text"
                  className="w-full p-2 border bg-transparent rounded-lg"
                  placeholder="Username"
                />
              </div>
              <div className="my-3 w-full">
              <label className="block py-2">Password</label>
                <input
                  type="password"
                  className="w-full p-2 border bg-transparent rounded-lg"
                  placeholder="Password"
                />
              </div>
              {/* <hr className="w-1/2" /> */}
              <div className="my-3 w-full">
              <label className="block py-2">Bio</label>
                <textarea
                  className="w-full p-2 border bg-transparent rounded-lg h-24"
                  placeholder="bio"
                />
              </div>
              <div className="my-3 w-full">
              <label className="block py-2">Timezone</label>
                <select className="w-full p-2 border bg-transparent rounded-lg">
                  <option>(GMT +00:00) UTC</option>
                </select>
              </div>
              {/* <hr className="w-1/2" /> */}
              
              <div className="my-3 w-full">
              <label className="block py-2">Branch</label>
                <select className="w-full p-2 border bg-gray-900 rounded-lg">
                  <option>Ho</option>
                  <option>Accra</option>
                  <option>Kumasi</option>
                  <option>Tarkoradi</option>
                </select>
              </div>
              <div className="mt-12 mb-4 flex gap-3">
                <button className="p-3 bg-gray-600 rounded-lg flex gap-2">
                  Update Profile{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </button>
                <button className="p-3 bg-gray-600 rounded-lg flex gap-2">
                  Cancel{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>









           
          </form>
    )
}

export default InfoForm;