import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	favicon: "https://img.favpng.com/7/5/20/web-development-computer-programming-logo-png-favpng-10MmqSpWpMNvmmdMDWR9jMqAv.jpg",
	title: 'Gareth Williams - Full-Stack & Web3 Blockchain Developer',
	description:
		'Welcome to my portfolio! I am a passionate full‑stack and blockchain developer who bridges the gap between frontend, backend, and smart contract development. Specializing in creating complete web and Web3 solutions, from beautiful user interfaces to robust server architectures and secure decentralized applications.',
	keywords: [
		'Full-Stack Developer',
		'Blockchain Developer',
		'Web3 Developer',
		'DApp Developer',
		'Solidity',
		'Smart Contract Development',
		'Frontend Development',
		'Backend Development',
		'React',
		'Next.js',
		'Node.js',
		'TypeScript',
		'Ethers.js',
		'Database Design',
		'API Development',
		'Cloud Solutions',
		'DevOps',
		'System Architecture',
		'Web Development',
		'Gareth Williams',
	],
	authors: [{ name: 'Gareth Williams' }],
	creator: 'Gareth Williams',
	openGraph: {
		title: 'Gareth Williams - Full‑Stack & Web3 Developer Portfolio',
		description:
			'Full‑stack and blockchain developer building complete web and Web3 solutions. Explore my projects and technical expertise across the entire development stack.',
		url: 'https://your-domain.com',
		siteName: 'Gareth Williams - Portfolio',
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Gareth Williams - Full‑Stack & Web3 Developer',
		description:
			'Full‑stack and blockchain developer building complete web and Web3 solutions. Explore my projects and technical expertise across the entire development stack.',


	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
