import courseData from "../jsondata/course.json"
import Footer from "../uI/Footer";
import Nvbar from "../uI/Navbar";
import Image from "next/image";
export default function page() {
  return (
    <>
     <Nvbar/>

    <main className="min-h-screen bg-gray-100 p-6 max-sm:p-2">
    <div className="min-h-screen bg-gray-100 p-6 max-sm:p-2">
      <h1 className="text-3xl font-bold text-center mb-8">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {courseData.map((course, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
          <div className="flex">
          <img src={course.url} className="w-[60%] h-[450px] max-md:h-auto min-md:w[60%]"/>

          </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-2">{course.description}</p>

            {/* Show outcomes if present */}
            {course.outcome && (
              <div className="mt-3">
                <h3 className="font-semibold text-gray-700 mb-1">What you’ll learn:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {course.outcome.map(outcome => (
                    <li key={outcome.id}>{outcome.point}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="text-sm text-gray-500 mb-2">
              <span>📅 Duration: {course.duration}</span> <br />
              <span className="text-orange-800">💰 Cost: {course.cost}</span>
            </div>
            <div>
                <button className="bg-blue-500 text-white font-semibold p-1 rounded-sm">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <h2 className="text-center font-bold text-red-800">!!!!!New Course Comming Soon!!!!!</h2>
      
    </main>
    <Footer/>
    </>
  );
}
