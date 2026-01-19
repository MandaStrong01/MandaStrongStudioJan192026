import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Page2() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        ref={videoRef}
        src="/background.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        loop
        playsInline
      />

      <div className="relative z-10 flex flex-col items-center pt-20 text-center">
        <h1 className="text-5xl font-extrabold font-serif text-black">
          MANDASTRONG’S STUDIO
        </h1>
        <p className="mt-4 text-xl font-bold italic text-black">
          Welcome! Make Awesome Family Movies Or Put Your Dreams Into Film Reality.
        </p>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center gap-6 z-10">
        <button onClick={() => navigate("/")} className="btn-black">Back</button>
        <button onClick={() => navigate("/page3")} className="btn-black">Next</button>
      </div>
    </div>
  );
}
