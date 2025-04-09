import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

interface NewsLetterPopUPProps {
  openNewsLetter: boolean;
  setOpenNewsLetter: React.Dispatch<React.SetStateAction<boolean>>;
}
const NewsLetterPopUP: React.FC<NewsLetterPopUPProps> = ({
  openNewsLetter,
  setOpenNewsLetter,
}) => {
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (openNewsLetter) {
      document.body.style.overflow = "hidden";
    }
    intervalIdRef.current = setInterval(() => {
      setOpenNewsLetter(true);
      document.body.style.overflow = "hidden";
    }, 600000);

    // Cleanup the interval when the component unmounts or modal is closed
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [setOpenNewsLetter, openNewsLetter]);

  const closeModal = useCallback(() => {
    setOpenNewsLetter(false);
    document.body.style.overflow = "auto"; // Restore scrolling

    // Clear the interval when the modal is closed
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null; // Reset the ref
    }
  }, [setOpenNewsLetter]);

  return (
    <div
      className={`fixed bg-white/15 ${openNewsLetter ? "inset-0 w-full h-full scale-100" : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 scale-0"} duration-300 transition-all ease-in-out flex items-center justify-center z-50`}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className="max-w-5xl w-full">
        <div className="w-full grid md:grid-cols-2 grid-cols-1 bg-white rounded-xl overflow-hidden">
          <div className="w-full px-8 py-4 flex flex-col gap-4">
            <div className="relative w-full aspect-[4/2]">
              <Image
                src="/logo.png"
                className="object-contain"
                alt="logo"
                fill
              />
            </div>
            <div className=""></div>
          </div>
          <div className="relative w-full aspect-square">
            <Image
              src="https://tncimmigration.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-24-at-23.35.17-2.jpeg"
              alt=""
              fill
              className="object-cover"
            />
            <button
              className="absolute top-3 right-3 p-1 aspect-square bg-white/10 text-secondary/70 hover:text-secondary flex items-center justify-center duration-300 transition-all ease-in-out"
              onClick={() => closeModal()}
            >
              <IoClose className="w-8 h-8 " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterPopUP;
