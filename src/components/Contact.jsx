/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Textarea } from "@chakra-ui/react";
import contactImg from "../images/contact.svg";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    openModal();
  };
  return (
    <div
      id="contact"
      className=" w-[100%] lg:h-[100vh] h-full flex justify-center mt-5 gap-6 items-center"
    >
      <div className="flex lg:flex-row flex-col-reverse lg:justify-around items-center gap-10 ">
        <div
          data-aos="zoom-out-down"
          className="flex lg:items-center items-end lg:justify-center justify-end"
        >
          <img
            className="lg:w-[400px] w-[200px] lg:h-[400px] h-[200px]"
            src={contactImg}
            alt=""
          />
        </div>

        <div className="ml-6" data-aos="zoom-in-right">
          <h1 className=" mb-6 text-center lg:text-4xl text-3xl font-bold text-gray-200">
            Contact me
          </h1>
          <form
            onSubmit={handleSubmit}
            className=" lg:h-[400px] h-full sm:p-12 p-6 rounded-2xl flex flex-col gap-4 formShadow mt-5"
          >
            <div>
              <input
                className="bg-[#493370] sm:p-5 p-3 outline-none text-white border-none rounded-2xl"
                type="text"
                placeholder="Name..."
              />
            </div>
            <div>
              <input
                className="bg-[#493370] sm:p-5 p-3 outline-none text-white border-none rounded-2xl"
                type="email"
                placeholder="Email..."
              />
            </div>
            <div>
              <textarea
                className="w-[100%] bg-[#493370] outline-none border-none sm:p-5 p-3 text-white"
                name=""
                id=""
                cols="20"
                rows="3"
                placeholder="Write Your Message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="px-[20px] py-[8px] bg-[#ac5259] text-white outline-none "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Modal
        size={"md"}
        lockFocusAcrossFrames
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <ModalOverlay />
        <ModalContent className="bg-green-400  ">
          <ModalHeader className="bg-gray-900 text-white "></ModalHeader>
          <ModalCloseButton className="text-white" />
          <ModalBody className="bg-gray-900 ">
            <p className="h-[100%] p-10 italic text-white font-semibold text-xl">
              Thanks for getting in touch. Your message means a lot...
            </p>
          </ModalBody>
          <ModalFooter className="bg-gray-900">
            <Button colorScheme="orange" onClick={closeModal}>
              Okay
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Contact;
