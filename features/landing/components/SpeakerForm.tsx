"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

import CloseBtn from "../../../public/images/landing/CloseBtn.svg";
import SendBtn from "../../../public/images/landing/SendBtn.svg";
import MessageRead from "../../../public/images/landing/MessageRead.svg";
import LgvBebasText from "@/features/news/components/LgvBebasText";

const schema = z.object({
    name: z.string().min(2, "უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს"),
    lastname: z.string().min(2, "უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს"),
    email: z.string().email("ჩაწერეთ სწორი იმეილი"),
    number: z.string().min(9, "ჩაწერეთ მინიმუმ 9 სიმბოლო").max(9, "ჩაწერეთ მაქსიმუმ 9 სიმბოლო"),
    text: z.string().min(1, "ჩაწერეთ მინიმუმ 1 სიმბოლო")
});
type FormData = z.infer<typeof schema>;

const SpeakerForm = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    const [submitted, setSubmitted] = useState(false);

    const { register, watch, handleSubmit, reset, formState: { errors }, } = useForm<FormData>({ resolver: zodResolver(schema), });

    const values = watch();

    const handleClose = () => {
        onClose();
    };

    function onSubmit(data: FormData) {
        console.log(data);
        setSubmitted(true);
    }

    return (
        <AnimatePresence
            onExitComplete={() => {
                reset();
                setSubmitted(false);
            }}
        >
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleClose}
                    className="bg-slate-900/20 backdrop-blur sm:p-8 p-4 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-[#1E1D2E] max-w-190 w-full text-white sm:p-[20px_24px] p-4 rounded-3xl cursor-default relative overflow-hidden flex flex-col"
                    >
                        <button onClick={handleClose} className="cursor-pointer mb-4 flex justify-end">
                            <Image alt="close" src={CloseBtn} width={32} height={32} />
                        </button>

                        {submitted ? (
                            <div className="z-10 bg-[#1E1D2E] flex flex-col gap-6 items-center justify-center">
                                <h2 className="font-bold md:text-[54px] text-[26px] leading-100% tracking-[1.51px] font-display text-center"><span className="md:block hidden"><LgvBebasText>წარმტებით გადაგზავნილია</LgvBebasText></span><span className="md:hidden block font-sans">წარმტებით გადაგზავნილია</span></h2>

                                <p className="md:text-[24px] text-[15px] leading-100% text-[#F4EAFD] text-center">ჩვენი გუნდი 24 საათის განმავლობაში დაგიკავშირდება.</p>

                                <Image alt="Message Read" src={MessageRead} width={483} height={284} className="md:w-120.75 w-65 md:h-71 h-47.5" />

                                <div className="flex sm:gap-7.5 gap-3 sm:p-[29px_0px_29px] w-full justify-center sm:mb-0 m-[28px_0px_73px]">
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="font-bold text-[14px] leading-100% text-[#FED403] cursor-pointer hover:underline md:w-auto w-full">
                                        {"შეამოწმე ფორმა".toUpperCase()}
                                    </button>

                                    <button
                                        onClick={() => { reset(); setSubmitted(false); }}
                                        className="cursor-pointer p-[14px_16px] border-2 border-[#8A2BE2] rounded-[30px] text-[14px] leading-100% font-bold bg-[#8A2BE233] hover:bg-[#8A2BE260] transition duration-300 md:w-auto w-full">
                                        {"ახალი ფორმა".toUpperCase()}
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="z-10 bg-[#500794] rounded-4xl flex flex-col p-12 gap-4">
                                <div className="h-1 bg-[#D9D9D9] rounded-4xl mb-2"></div>
                                <div className="flex gap-4 md:flex-row flex-col">
                                    <div className="flex flex-col gap-2 md:w-75 w-full">
                                        <label htmlFor="name" className="text-[12px] leading-100% font-bold">სახელი</label>
                                        <input
                                            id="name"
                                            {...register("name")}
                                            placeholder="სახელი"
                                            className={`bg-[#FFFFFF3B] rounded-lg p-[12px_16px] text-[14px] leading-100% focus:outline-none ${values.name
                                                ? "bg-white text-[#37115A]"
                                                : "bg-[#FFFFFF3B] focus:bg-white focus:text-[#37115A]"
                                                }`} />
                                        {errors.name && <p className="text-[14px] text-red-400">{errors.name.message}</p>}
                                    </div>
                                    <div className="flex flex-col gap-2 md:w-75 w-full">
                                        <label htmlFor="lastname" className="text-[12px] leading-100% font-bold">გვარი</label>
                                        <input
                                            id="lastname"
                                            {...register("lastname")}
                                            placeholder="გვარი"
                                            className={`bg-[#FFFFFF3B] rounded-lg p-[12px_16px] text-[14px] leading-100% focus:outline-none ${values.lastname
                                                ? "bg-white text-[#37115A]"
                                                : "bg-[#FFFFFF3B] focus:bg-white focus:text-[#37115A]"
                                                }`} />
                                        {errors.lastname && <p className="text-[14px] text-red-400">{errors.lastname.message}</p>}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="email" className="text-[12px] leading-100% font-bold">იმეილი</label>
                                    <input
                                        id="email"
                                        {...register("email")}
                                        placeholder="იმეილი"
                                        className={`bg-[#FFFFFF3B] rounded-lg p-[12px_16px] text-[14px] leading-100% focus:outline-none ${values.email
                                            ? "bg-white text-[#37115A]"
                                            : "bg-[#FFFFFF3B] focus:bg-white focus:text-[#37115A]"
                                            }`} />
                                    {errors.email && <p className="text-[14px] text-red-400">{errors.email.message}</p>}
                                </div>

                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="number" className="text-[12px] leading-100% font-bold">ტელეფონი</label>
                                    <input
                                        id="number"
                                        {...register("number")}
                                        placeholder="ტელეფონი"
                                        className={`bg-[#FFFFFF3B] rounded-lg p-[12px_16px] text-[14px] leading-100% focus:outline-none ${values.number
                                            ? "bg-white text-[#37115A]"
                                            : "bg-[#FFFFFF3B] focus:bg-white focus:text-[#37115A]"
                                            }`} />
                                    {errors.number && <p className="text-[14px] text-red-400">{errors.number.message}</p>}
                                </div>

                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="text" className="text-[12px] leading-100% font-bold">კომენტარი</label>
                                    <textarea
                                        id="text"
                                        {...register("text")}
                                        placeholder="ტექსტი"
                                        className={`bg-[#FFFFFF3B] rounded-lg p-[12px_16px] text-[14px] leading-100% focus:outline-none h-40 ${values.text
                                            ? "bg-white text-[#37115A]"
                                            : "bg-[#FFFFFF3B] focus:bg-white focus:text-[#37115A]"
                                            }`}></textarea>
                                    {errors.text && <p className="text-[14px] text-red-400">{errors.text.message}</p>}
                                </div>

                                <button type="submit" className="bg-[#EFC906] text-[14px] leading-100% font-bold text-[#0E0417] p-3 rounded-4xl cursor-pointer flex items-center mt-4 hover:bg-[#efc806de] transition duration-300">
                                    <span className="w-full">{"გაგზავნა".toUpperCase()}</span>
                                    <Image alt="Send" src={SendBtn} width={32} height={32} />
                                </button>
                            </form>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SpeakerForm;