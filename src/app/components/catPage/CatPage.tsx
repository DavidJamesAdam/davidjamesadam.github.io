import Image from "next/image";
import Modal from "../modal/Modal";
import { useState } from "react";
import ImageCarousel from "../image-carousel/ImageCarousel";

export default function CatPage() {
  const imageDim = 60;
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <button onClick={handleOpen} className="border-0 p-0 m-0">
        <Image
          src="/cat_path1.svg"
          alt="Cat symbol"
          width={imageDim}
          height={imageDim}
          className="orange"
        />
      </button>
      <Modal isOpen={open} onClose={handleClose}>
        <div className="flex h-full w-full min-h-0 flex-col gap-3">
          <h1 className="weathered-effect shrink-0">The Cat of Ulthar</h1>
          <ImageCarousel />
          <p className="shrink-0">
            Congratulations! You have found a little secret page dedicated to my
            cat Karl. Enjoy a few photos of him. Click/tap outside of this
            window to close it.
          </p>
        </div>
      </Modal>
    </div>
  );
}
