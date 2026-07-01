"use client";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

import CloseBtn from "../../../public/images/landing/CloseBtn.svg";

const SpeakerForm = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-[#1E1D2E] max-w-190 w-full h-186.25 text-white p-[20px_24px] rounded-3xl cursor-default relative overflow-hidden flex flex-col"
                    >
                        <button onClick={onClose} className="cursor-pointer mb-4 flex justify-end">
                            <Image alt="close" src={CloseBtn} width={32} height={32} />
                        </button>

                        <div className="z-10 bg-[#500794] rounded-4xl h-163.25"></div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SpeakerForm;
