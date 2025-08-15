
import React from 'react';
import EmailIcon from './icons/EmailIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import GoogleScholarIcon from './icons/GoogleScholarIcon';

interface BusinessCardProps {
    summary: string;
}

const contacts = [
    { Icon: EmailIcon, href: "mailto:alexandrend@gmail.com", label: "Email" },
    { Icon: LinkedInIcon, href: "https://www.linkedin.com/in/alexandreduarte/", label: "LinkedIn" },
    { Icon: GoogleScholarIcon, href: "https://scholar.google.com/citations?hl=en&user=MZtzU0cAAAAJ", label: "Google Scholar" },
];

const BusinessCard: React.FC<BusinessCardProps> = ({ summary }) => {
    return (
        <div className="w-full max-w-md rounded-2xl shadow-2xl bg-gradient-to-br from-gray-800 to-black border border-gray-700 p-8 flex flex-col space-y-6 transition-all duration-500">
            {/* Top Section: Info & Contacts */}
            <div>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4"></div>
                <h2 className="text-3xl font-bold text-white">Alexandre Duarte</h2>
                <p className="text-blue-300">Software Engineer</p>
                <p className="text-blue-300"></p>
                <div className="flex space-x-4 mt-6">
                    {contacts.map(({ Icon, href, label }) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label={label}>
                            <Icon className="w-6 h-6" />
                        </a>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-700 !my-6" />

            {/* Bottom Section: About Me */}
            <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">About Me</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                    {summary}
                </p>
            </div>
        </div>
    );
};

export default BusinessCard;