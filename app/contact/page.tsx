"use client";

import Card from "@/src/components/Card";
import Form from "next/form";
import { useState } from "react";

const Contact = () => {
    return (
        <div className="flex flex-col flex-1 items-center font-sans dark:bg-black bg-[#101817] text-white p-20 rounded-[20px] mt-20">
            <script src="https://elfsightcdn.com/platform.js" async></script>
            <div className="elfsight-app-04bb0370-e3ca-4732-9f67-f8f0b0c4f651" data-elfsight-app-lazy>
            </div>
        </div>
    )
    // const [messageSent, setMessageSent] = useState(false);
    // const handleSubmit = (formData: FormData) => {
    //     const name = formData.get("name") as string;
    //     const email = formData.get("email") as string;
    //     const message = formData.get("message") as string;
    //     console.log(name, email, message);
    //     setMessageSent(true);
    // };

    // return messageSent ? (
    //     <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black bg-[#101817] text-white p-20 rounded-[20px] mt-20">
    //         <h1 className="text-4xl font-bold">Message Sent</h1>
    //         <br />
    //         <p>Thank you for your message! I'll get back to you as soon as possible.</p>
    //     </div>
    // ) : (
    //     <div className="flex flex-col flex-1 items-center font-sans dark:bg-black bg-[#101817] text-white p-20 rounded-[20px] mt-20">
    //         <h1 className="text-4xl font-bold">Contact Me</h1>
    //         <br />

    //         <div className="flex flex-col gap-4">
    //             <p>Drop your details and a message below and I'll get back to you as soon as possible.</p>
    //             <Card title="">
    //                 <Form action={handleSubmit} className="flex flex-col gap-4">
    //                     <input className="rounded-md border border-zinc-300 p-4 text-[#101817] placeholder:text-[#101817]" type="text" placeholder="Name" name="name" />
    //                     <input className="rounded-md border border-zinc-300 p-4 text-[#101817] placeholder:text-[#101817]" type="email" placeholder="Email" name="email" />
    //                     <textarea className="rounded-md border border-zinc-300 p-4 text-[#101817] placeholder:text-[#101817]" placeholder="Message" name="message" />
    //                     <button type="submit" className="rounded-md bg-emerald-200 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-100">Send</button>
    //                 </Form>
    //             </Card>
    //         </div>
    //     </div>
    // );
};

export default Contact;