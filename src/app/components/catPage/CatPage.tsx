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
      <button onClick={handleOpen}>
        <Image
          src="/cat_path1.svg"
          alt="Cat symbol"
          width={imageDim}
          height={imageDim}
          className="orange"
        />
      </button>
      <Modal isOpen={open} onClose={handleClose}>
        <div className="mb-5">
          <h2 className="flex weathered-effect shrink-0 text-[clamp(2.25rem,3vw,4.5rem)]">
            The Cat of Ulthar
          </h2>
        </div>
        <ImageCarousel />
        <div className="shrink-0">
          <p>
            Congratulations! You have found a little secret page dedicated to my
            cat Karl. Enjoy a few photos of him. Click/tap outside of this
            window to close it.
          </p>
        </div>
      </Modal>
    </div>
  );
}
