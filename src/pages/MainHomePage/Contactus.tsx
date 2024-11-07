import { HomeNavBar } from "@/pages/MainHomePage/SubComponent/HomeNavBar";
import HomePageFooter from "@/pages/MainHomePage/SubComponent/HomePageFooter";
import { Link } from "react-router-dom";

export default function Contactus() {
  return (
    <>
      <HomeNavBar />
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Contact Placement Cell - LDCE
          </h1>

          {/* Responsive grid: 1 column on mobile, 2 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info Section */}
            <div className="bg-white overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5">
                <h2 className="text-xl font-bold text-gray-900">Contact Us</h2>
                <dl>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-base sm:text-lg font-medium text-gray-500">
                      Head Training and Placement Officer (TPO)
                    </dt>
                    <dd className="mt-1 text-base sm:text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                      <b>Prof. Vinod P. Patel</b> <br /> (M.Tech, IIT, Roorkee){" "}
                      <br />
                      Mobile : +91-90334 83966
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-base sm:text-lg font-medium text-gray-500 row-span-1">
                      Assistant TPO
                    </dt>
                    <dd className="mt-1 text-base sm:text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                      <b>Prof. Keyur Hirapra</b> <br /> Mobile : +91-98795 19312
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-base sm:text-lg font-medium text-gray-500 row-span-3">
                      TPO Coordinator
                    </dt>
                    <dd className="mt-1 text-base sm:text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                      <b>Prof. Pragnesh Patel</b> <br /> Mobile : +91-99048
                      36972
                    </dd>
                    <dd className="mt-1 text-base sm:text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                      <b>Prof. Irfan Siddique</b> <br /> Mobile : +91-94296
                      31872
                    </dd>
                    <dd className="mt-1 text-base sm:text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                      <b>Prof. Ronak Patel</b> <br /> Mobile : +91-99252 06902
                    </dd>
                  </div>
                  <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-base sm:text-lg font-medium text-gray-500">
                      Email
                    </dt>
                    <dd className="mt-1 text-base sm:text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                      <b>placement@Ldce.ac.in</b>
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Address Section */}
              <div className="mt-8 px-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Address
                  </h2>
                </div>
                <div className="py-5 px-4">
                  <div className="text-base sm:text-lg text-gray-900 sm:mt-0 hover:text-gray-500">
                    <Link
                      to={"https://maps.app.goo.gl/HZXoagihUGtGUdww5"}
                      target="_blank"
                    >
                      1st Floor, Principal Office, Student Section, Lalbhai
                      Dalpatbhai College Of Engineering, 120, Circular Road,
                      University Area, Ahmedabad, Gujarat 380015
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Section */}
            <div className="bg-white overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Location Map
                </h2>
              </div>
              <div className="border-t mt-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1181.7168098991376!2d72.54676228101918!3d23.0346564135915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84eae4e00f0b%3A0xe312595978f83a90!2sLDCE%20Training%20and%20Placement%20Cell!5e1!3m2!1sen!2sin!4v1728646185242!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomePageFooter />
    </>
  );
}
