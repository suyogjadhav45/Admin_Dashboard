import { useEffect } from "react";


const MyModal = ({ closeModal, compinfo }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    // document.body.style.zIndex=1;
    // document.body.style.transform="none";
    return () => {
      document.body.style.overflow = "scroll";
      // document.body.style.zIndex=0;
      // document.body.style.transform="scale(1.02)";
    }
  }, [])

  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <div className="p-4">

          {compinfo}
        </div>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo autem amet voluptate numquam, accusantium voluptas ipsa obcaecati, odit ratione corrupti ea, similique repudiandae. Laborum deleniti sequi consequuntur ullam maiores odio?</p> */}
        <button className="px-4 py-2 rounded-md bg-green-600 hover:bg-green-800 text-white" onClick={closeModal}>OK</button>
      </div>
    </>
  )
}

export default MyModal;