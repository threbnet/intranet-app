import image from "../../../assets/benside.jpg";

const CourseCard = ({data}) => {
  return (
    <div className="relative ">
        
       {data.unlocked != true && (
         <div className="bg-black absolute bg-opacity-90 h-full w-full ">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24 mt-24 mx-auto">
   <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
 </svg> {data.unlocked}
 
         </div>
       )}
         <div className="rounded-lg border-2 ">
     
      <div>
        <img
          src={image}
          className="h-48 w-full object-cover object-center rounded-lg"
        />
      </div>
      <div className="p-3">
        <h3 className="text-gray-100 text-sm font-bold">
          welcome to Foundation School
        </h3>
        <h2 className="text-gray-100 font-extrabold text-lg mt-3">
          What is the Foundation School ?
        </h2>
      </div>
      <div className="pb-3 px-1">
        <div className="flex gap-5">
          <span className="whitespace-nowrap text-xs rounded-full flex gap-2 px-3 py-1 bg-white text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
              />
            </svg>
            23 modules
          </span>
          <span className="whitespace-nowrap text-xs rounded-full flex gap-2 px-3 py-1 bg-white text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            1hr 30 min
          </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CourseCard;
