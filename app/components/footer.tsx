export default function Footer() {
    return (
        <div className="w-full bg-black h-[340px] justify-center items-center">
            <div className="w-full max-w-[1300px] mx-auto bg-black mt-10">
                <div className="text-white grid sm:grid-cols-4 grid-cols-2">
                    <div className="my-14 mx-10">
                        <div>
                            <h1 className="font-bold">ENHANZIO</h1><br></br>
                            <a href="">
                                Home<br></br>
                            </a>
                            <a href="">
                                DMAIC process<br></br>
                            </a>
                        </div>
                    </div>
                    <div className="my-14 mx-10">
                        <div>
                            <h1 className="font-bold">COMPANY</h1><br></br>
                            <a href="">
                                About Us<br></br>
                            </a>
                            <a href="">
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="my-14 mx-10">
                        <div>
                            <h1 className="font-bold">LEGAL</h1><br></br>
                            <a href="">
                                Terms of Use<br></br>
                            </a>
                            <a href="">
                                Privacy Policy<br></br>
                            </a>
                            <a href="">
                                Refund Policy<br></br>
                            </a>
                            <a href="">
                                Perpetual License<br></br>
                            </a>
                        </div>
                    </div>
                    <div className="my-14 mx-10">
                        <div>
                            <h1 className="font-bold">NEWSLETTER</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 pt-8 bg-black">
            </div>

            <div className="bg-black w-full">
            <div className="flex w-full justify-between items-center pl-10 bg-black pb-6">
                <p className="w-full md:max-w-[1300px] mx-auto flex text-sm leading-5 text-gray-400 mt-0">
                    © 2023 Enhanzio. All rights reserved.
                </p>
            </div>
            </div>

        </div>
    )}