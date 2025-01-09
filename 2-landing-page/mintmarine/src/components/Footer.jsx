import React from "react";
import FooterButton from "./FooterButton.jsx";
import assets from "../assets";

const Footer = () => {
    return (
        <footer className="relative pb-16 pt-16 max-md:py-10 bg-primary banner04">
            <div className="container mx-auto px-4">
                {/* Center the entire group */}
                <div className="flex items-center justify-center gap-12 max-md:flex-wrap">
                    {/* Expo Logo */}
                    <a
                        href="https://expo.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-opacity duration-500 hover:opacity-70"
                    >
                        <img
                            src={assets.expologo}
                            alt="Expo Logo"
                            className="h-10 w-auto object-contain"
                        />
                    </a>

                    {/* MintMarine Logo */}
                    <a
                        href="https://mintmarine.u/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-opacity duration-500 hover:opacity-70"
                    >
                        <img
                            src={assets.logo}
                            alt="MintMarine Logo"
                            className="h-13 w-auto object-contain"
                        />
                    </a>

                    {/* Powered by GuireWire Button */}
                    <FooterButton
                        link="https://x.com/GuireWire"
                        containerClassName="text-center z-10 relative"
                    />

                    {/* Social Media Icons */}
                    <div className="flex items-center justify-center gap-6">
                        {/* Twitter */}
                        <a
                            href="https://x.com/GuireWire"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-gray-500 p-3 hover:opacity-70"
                        >
                            <img
                                src={assets.x}
                                alt="x"
                                className="h-6 w-6 object-contain"
                            />
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/GuireWire"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-gray-500 p-3 hover:opacity-70"
                        >
                            <img
                                src={assets.github}
                                alt="github"
                                className="h-6 w-6 object-contain"
                            />
                        </a>

                        {/* Discord */}
                        <a
                            href="https://discordapp.com/users/1233905621250605206"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-gray-500 p-3 hover:opacity-70"
                        >
                            <img
                                src={assets.discord}
                                alt="discord"
                                className="h-6 w-6 object-contain"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
