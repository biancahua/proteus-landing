import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCloud, faCalendarPlus } from '@fortawesome/fontawesome-free-solid';
import { faChartGantt, faTimeline, faCloudUpload, faCloudDownload, faCloudBolt, faRectangleAd, faUsersRectangle, faFolderPlus  } from '@fortawesome/free-solid-svg-icons';
import { faCloudscale } from '@fortawesome/free-brands-svg-icons';
import { faRectangleList, faRectangleTimes, faSquarePlus } from '@fortawesome/free-regular-svg-icons';



// export const Features = () => {
//     return (
//         <div id="features" class="w-full">
//             <div className="text-center">
//               <p className="text-4xl font-bold inline border-b-2 border-[#3f51b5">Features</p>
//               <p className="text-lg py-6 opacity-60">Dev/Ops simplified</p>
//             </div>
//             <div className="w-full grid grid-cols-1 md:grid-cols-2 sm;grid-cols-2 gap-10 text-center p-8">
//                 <div >
//                 <p>Track active jobs</p>
//                 </div>
//                 <div>
//                 <p>View old jobs, both successful and failed</p>
//                 </div>
//                 <div>
//                 <p>Create new jobs and cronjobs</p>
//                 </div>
//             </div>
            
//         </div>
//     )
// }

export const Features = () => {
  
  return (
    <div className="flex flex-col justify-center max-w-[1248px] mx-auto p-4 w-full mt-40 mb-20"> 
      <div className='flex flex-col items-center'>
        <p className='text-5xl font-bold border-b-[3px] border-y-pink pt-20'>Features</p>
        <p className='text-2xl text-gray-pink py-8'>Take your Kubernetes experience to the next level.</p>
      </div>
      <div className='w-full flex justify-center flex-wrap gap-10 text-center p-8'>
        <div className="flex flex-col justify-around align-center w-full md:w-72 h-72 md:h-96 shadow-md rounded-md  p16 pt-10 shadow-gray-pink hover:scale-110 duration-500 cursor-pointer items-center">
          <FontAwesomeIcon size="2x" icon={faCode} />
          <p className="text-xl px-8">DevOps simiplified</p>
          <div className="flex flex-row justify-between gap-6 py-3">

          </div>
        </div>
        <div className="flex flex-col justify-around align-center w-full h-72 md:w-72 md:h-96 shadow-md rounded-md  p16 pt-10 shadow-gray-pink hover:scale-110 duration-500 cursor-pointer items-center">
          <FontAwesomeIcon size="2x" icon={faChartGantt} />
          <p className="text-xl">Track active Jobs</p>
          <div className="flex flex-row justify-between gap-6 py-3">

          </div>
        </div>
        <div className="flex flex-col justify-around align-center w-full h-72 md:w-72 md:h-96 shadow-md rounded-md  p16 pt-10 shadow-gray-pink hover:scale-110 duration-500 cursor-pointer items-center">
          <FontAwesomeIcon size="2x" icon={faTimeline} />
          <p className="text-xl px-8">View old jobs, both successful and failed</p>
          <div className="flex flex-row justify-between gap-6 py-3">

          </div>
        </div>
        <div className="flex flex-col justify-around align-center w-full h-72 md:w-72 md:h-96 shadow-md rounded-md  p16 pt-10 shadow-gray-pink hover:scale-110 duration-500 cursor-pointer items-center">
          <FontAwesomeIcon size="2x" icon={faCalendarPlus} />
          <p className="text-xl px-8">Create new jobs and cronjobs</p>
          <div className="flex flex-row justify-between gap-6 py-3">

          </div>
        </div>  
      </div>
    </div>
  )
}