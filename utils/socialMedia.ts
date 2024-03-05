import { ISocialMedia } from "@/interfaces/socialMedia";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";
import { FiYoutube, FiLinkedin } from "react-icons/fi";

export const socialMedia:ISocialMedia[] = [
    {
        id: 1,
        name: 'instagram',
        href: 'https://www.instagram.com/valvtronic.arg',
        icon: FaInstagram
    },
    {
        id: 2,
        name: 'facebook',
        href: 'https://www.facebook.com/valvtronic',
        icon: SlSocialFacebook
    },
    {
        id: 3,
        name: 'youtube',
        href: 'https://linktr.ee/Valvtronic',
        icon: FiYoutube
    },
    {
        id: 4,
        name: 'linkedIn',
        href: 'https://www.linkedin.com/company/valvtronic-arg/',
        icon: FiLinkedin
    },
];