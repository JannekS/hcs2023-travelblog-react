import { ArrowPathIcon } from "@heroicons/react/24/outline";

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full h-screen -mt-14 text-amber-50 text-xl bg-[url('/footprints-sand.jpg')] bg-cover bg-center">
      <ArrowPathIcon className="w-28 h-28 animate-spin" />
      <h3>loading...</h3>
    </div>
  );
}

export default Loading;
