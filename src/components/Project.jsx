import { CiLink } from "react-icons/ci";

function Project({ theme, title, description, technologies, link, github }) {
  return (
    <div className="hover:bg-gray-50 hover:dark:bg-[#242223] transition-all duration-300 p-6 md:rounded-xl">
        <img className="w-60" src={technologies + theme} />
        <h3 className="font-bold text-lg text-gray-800  dark:text-gray-300 mt-4">{ title }</h3>
        <p className="leading-7 font-medium  text-gray-800 dark:text-gray-300 font-light text-base mt-4">{ description }</p>
        
        <div className="flex gap-6 font-medium  text-gray-800 dark:text-gray-300 font-medium">
           
            <a className="flex gap-2  font-medium  mt-4 hover:text-blue-500 cursor-pointer transition-all duration-300">
               
            
            </a>
            </div>
    </div>
  )
}

export default Project