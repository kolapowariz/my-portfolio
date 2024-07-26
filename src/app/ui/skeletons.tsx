// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-[#103c64] sm:w-[40rem] sm:h-[30rem] mx-auto p-4 shadow-sm`}
    >
      <div className="flex p-4">
        <div className="ml-2 h-6 w-16 rounded-md bg-[#09233c] text-sm font-medium" />
      </div>
      <div className="flex items-center justify-center truncate rounded-xl bg-[#1d6db8] px-4 py-8">
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <div className="">

        <div className="my-6">
          <CardSkeleton />
        </div>
        <div className="my-8">

        <CardSkeleton />
        </div>
        <div className="my-6">

        <CardSkeleton />
        </div>
      </div>
    </>
  );
}


export default function DashboardSkeleton() {
  return (
    <>

      <div className="mx-auto mt-6 grid gap-10 xl:grid-cols-2 sm:w-[48rem] lg:w-[50rem] xl:w-[98rem] xl:h-[28rem] ">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>

    </>
  );
}


