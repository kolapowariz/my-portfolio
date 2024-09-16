import { Skeleton } from "./ui/skeleton";

export function ProjectSkeleton() {
  // work on 1280px and above for skeleton
  return (
    <div className="xl:grid lg:grid-cols-2 lg:gap-4">
      <div className="sm:w-full flex flex-col sm:flex-row justify-center items-center my-7 mx-auto">
        <div className="w-full h-auto rounded-t-xl sm:rounded-none sm:w-96 sm:h-52 bg-gray-200 text-black sm:rounded-s-2xl p-4">
          <Skeleton className=" h-4 w-[200px] bg-white dark:bg-current mx-auto" />
          <Skeleton className="h-12 w-full bg-white dark:bg-current" />
          <Skeleton className=" h-8 w-20 bg-white" />
        </div>
        <div className="w-full h-auto rounded-b-xl sm:rounded-none sm:w-96 sm:h-52 bg-gray-200 sm:rounded-e-2xl p-4">
          <Skeleton className="h-48 sm:h-36 w-full bg-white" />
        </div>
      </div>
      {/* <div className="sm:w-full flex flex-col sm:flex-row justify-center items-center my-7 mx-auto">
        <div className="w-full h-auto rounded-t-xl sm:rounded-none sm:w-96 sm:h-52 bg-gray-200 text-black sm:rounded-s-2xl p-4">
          <Skeleton className=" h-4 w-[200px] bg-white dark:bg-current mx-auto" />
          <Skeleton className="h-12 w-full bg-white dark:bg-current" />
          <Skeleton className=" h-8 w-20 bg-white" />
        </div>
        <div className="w-full h-auto rounded-b-xl sm:rounded-none sm:w-96 sm:h-52 bg-gray-200 sm:rounded-e-2xl p-4">
          <Skeleton className="h-48 sm:h-36 w-full bg-white" />
        </div>
      </div> */}
      
    </div>
  );
}

export function SingleProject() {
  return (
    <div className="mx-auto h-[80rem]">
      <Skeleton className="mx-auto p-4 w-full h-[80rem] mb-4 border-b-2 md:w-[50%]">
        <div className="flex flex-col space-y-2 px-2">
          <div className="flex justify-center items-center md:gap-2 gap-4">
            <Skeleton className=" h-10 w-[80px] bg-white dark:bg-current" />
            <Skeleton className=" h-10 w-[80px] bg-white" />
            <Skeleton className=" h-10 w-[80px] bg-white" />
            <Skeleton className=" h-10 w-[80px] bg-white" />
          </div>

          <Skeleton className=" h-4 w-[240px] bg-white" />
          <Skeleton className="h-[80vh] w-full bg-white" />
          <Skeleton className=" h-2 w-[200px] bg-white" />
          <div className="flex justify-center gap-2">
            <Skeleton className=" h-8 w-10 bg-white" />
            <Skeleton className=" h-8 w-10 bg-white" />
            <Skeleton className=" h-8 w-10 bg-white" />
            <Skeleton className=" h-8 w-10 bg-white" />
          </div>
        </div>
      </Skeleton>
    </div>
  );
}

// <section className="md:w-[100%] mt-6 xl:border">
//       <div className="md:w-[80%] mx-auto">
//         <Skeleton className="p-4 w-full mx-auto h-58 mt-2 mb-8 bg-gray-500 md:w-[95%]">
//           <div className="space-y-6 sm:space-y-0 px-2 sm:grid grid-cols-2 sm:space-x-2">
//             <div className="space-y-2">
//               <Skeleton className=" h-4 w-[200px] bg-white dark:bg-current mx-auto" />
//               <Skeleton className="h-12 w-full bg-white dark:bg-current" />
//               <Skeleton className=" h-8 w-20 bg-white" />
//             </div>
//             <div className="">
//               <Skeleton className="h-48 sm:h-36 w-full bg-white" />
//             </div>
//           </div>
//         </Skeleton>
//       </div>

//     </section>
