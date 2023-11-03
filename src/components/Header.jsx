import { FaFacebookF } from "react-icons/fa";
import { MdOutlinePalette } from "react-icons/md";

const  Header = ()=>{
    const backgroundPintor = {
        backgroundImage: "url('bgpintor.jpg')"
    }
  return (
    <section className="bg-cover bg-center bg-no-repeat bg-fixed w-full h-screen" style={backgroundPintor}>
        <div className="bg-black bg-opacity-25 h-full">
        <div className="flex flex-col items-center justify-center h-full p-4 sm:p-10 lg:p-16">
            <div className="flex items-center">
                <MdOutlinePalette className="w-20 h-20 text-green-400"/>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-center text-yellow-300">
                    HOLA!
                </h1>
            </div>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-4 text-center">
            <span className="p-2 rounded-md  font-raleway  font-bold text-9xl flex gap-5 ">
                <span className="">G</span>
                <span className="">O</span>
                <span className="">N</span>
                <span className="">Z</span>
                <span className="">A</span>
                <span className="">L</span>
                <span className="">O</span>
            </span>
        </p>
          <div className="flex gap-4 ">
            <FaFacebookF className="w-8 h-8  text-sky-500   bg-slate-900 p-1 rounded-lg" />
            <button className="  text-white bg-orange-600 pt-2 pb-2 pl-8 pr-8 font-raleway ">Shop Gallery</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header;