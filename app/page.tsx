import Image from "next/image";
import Main from "./Main/page";

export default function Home() {
  return (
    <div className="flex">
      {/* side bar if you wnat to enter */}
      <div className="flex-grow p-10">
        {/* Main content here */}
        <Main/>
      </div>
    </div>
  );
}
