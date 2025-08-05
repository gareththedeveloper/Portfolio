'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-16 text-center text-gray-900"
				>
					Full Stack Projects
				</motion.h2>

				<div className="space-y-16">
					{/* E-commerce Platform */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4 text-gray-900">
											SaaS Analytics Dashboard
										</h3>
										<p className="text-gray-600">
											A responsive, component-driven dashboard for SaaS products built with React,
											delivering real-time analytics, user engagement insights, and interactive data visualisations
											optimised for desktop and mobile devices.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-600 mb-3">
												Frontend Features
											</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• React + Vite for ultra-fast builds</li>
												<li>• Tailwind CSS for utility-first styling</li>
												<li>• Chart.js & D3.js for data visualisation</li>
												<li>• Reusable UI component library</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-600 mb-3">
												Performance Optimisation
											</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• Code splitting & lazy loading</li>
												<li>• Image optimisation with Next/Image</li>
												<li>• Memoisation with React.memo</li>
												<li>• Lighthouse score 95+ for all metrics</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-600">
											Key Achievements
										</h4>
										<ul className="space-y-2 text-sm text-gray-600">
											<li>• Reduced bundle size by 42% via tree-shaking</li>
											<li>• Implemented fully accessible UI (WCAG 2.1 AA)</li>
											<li>• Achieved sub-200ms route transitions</li>
										</ul>
									</div>
								</div>

								<div className="bg-gray-50 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-600 mb-4">
										Component Architecture
									</h4>
									<div className="aspect-[4/3] bg-white rounded-lg p-4 shadow-inner">
										{/* Add detailed component architecture diagram here */}
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* App Shell */}
											<g>
												<rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<text x="200" y="45" textAnchor="middle" className="fill-gray-600 text-[12px]">
													React App Shell (Routing + State Management)
												</text>
											</g>

											{/* UI Components */}
											<g>
												<rect x="20" y="80" width="170" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<rect x="210" y="80" width="170" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<text x="105" y="105" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Dashboard Widgets
												</text>
												<text x="295" y="105" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Charts & Graphs
												</text>
											</g>

											{/* API Integration Layer */}
											<g>
												<rect x="20" y="140" width="360" height="30" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
												<text x="200" y="160" textAnchor="middle" className="fill-gray-600 text-[12px]">
													REST / GraphQL API Client
												</text>
											</g>

											{/* State Management */}
											<g>
												<rect x="20" y="190" width="170" height="40" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<rect x="210" y="190" width="170" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<text x="105" y="215" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Redux Toolkit Store
												</text>
												<text x="295" y="215" textAnchor="middle" className="fill-gray-600 text-[12px]">
													React Query Cache
												</text>
											</g>

											{/* Data Layer */}
											<g>
												<rect x="20" y="250" width="360" height="30" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
												<text x="200" y="270" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Persistent Local Storage (IndexedDB / LocalStorage)
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-400" strokeWidth="1">
												<line x1="200" y1="60" x2="200" y2="80" />
												<line x1="105" y1="120" x2="105" y2="140" />
												<line x1="295" y1="120" x2="295" y2="140" />
												<line x1="200" y1="170" x2="200" y2="190" />
												<line x1="105" y1="230" x2="105" y2="250" />
												<line x1="295" y1="230" x2="295" y2="250" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>


					{/* Real-time Analytics Platform */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4 text-gray-900">
											AI-Powered Knowledge Assistant
										</h3>
										<p className="text-gray-600">
											An AI-driven web application enabling real-time conversational search across
											company documents. Built with React for an interactive chat UI, and integrated
											with a fine-tuned LLM for context-aware, natural language responses.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-600 mb-3">
												Frontend Features
											</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• React Chat Interface with Streaming Responses</li>
												<li>• Context-Aware Search and Query Suggestions</li>
												<li>• Document Upload & Preview Components</li>
												<li>• Tailwind CSS + Framer Motion for Animations</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-600 mb-3">
												AI Integration
											</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• OpenAI GPT-4 / LangChain Integration</li>
												<li>• Vector Search with Pinecone</li>
												<li>• Custom Prompt Engineering</li>
												<li>• Real-Time Streaming via WebSockets</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-600">Key Achievements</h4>
										<ul className="space-y-2 text-sm text-gray-600">
											<li>• Reduced average query time from 4s to 0.9s</li>
											<li>• 92% accuracy in document content retrieval</li>
											<li>• Seamless real-time AI responses with token streaming</li>
										</ul>
									</div>
								</div>

								<div className="bg-gray-50 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-600 mb-4">System Architecture</h4>
									<div className="aspect-[4/3] bg-white rounded-lg p-4 shadow-inner">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Client Layer */}
											<g>
												<rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<text x="200" y="45" textAnchor="middle" className="fill-gray-600 text-[12px]">
													React Chat UI (Streaming Responses)
												</text>
											</g>

											{/* API Layer */}
											<g>
												<rect x="20" y="80" width="360" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<text x="200" y="105" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Node.js API Gateway (WebSocket + REST)
												</text>
											</g>

											{/* AI Processing */}
											<g>
												<rect x="20" y="150" width="170" height="40" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
												<rect x="210" y="150" width="170" height="40" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
												<text x="105" y="175" textAnchor="middle" className="fill-gray-600 text-[12px]">
													LangChain Orchestration
												</text>
												<text x="295" y="175" textAnchor="middle" className="fill-gray-600 text-[12px]">
													GPT-4 / LLM API
												</text>
											</g>

											{/* Data Layer */}
											<g>
												<rect x="20" y="220" width="170" height="30" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<rect x="210" y="220" width="170" height="30" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<text x="105" y="240" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Pinecone Vector DB
												</text>
												<text x="295" y="240" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Document Store (S3 / GCS)
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-400" strokeWidth="1">
												<line x1="200" y1="60" x2="200" y2="80" />
												<line x1="200" y1="120" x2="200" y2="150" />
												<line x1="105" y1="190" x2="105" y2="220" />
												<line x1="295" y1="190" x2="295" y2="220" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4 text-gray-900">
											Web3 NFT Marketplace on Ethereum
										</h3>
										<p className="text-gray-600">
											A full-stack decentralized application enabling users to mint, trade, and auction NFTs
											on the Ethereum blockchain. Built with Solidity smart contracts, a Node.js backend,
											and a React front-end with wallet integration.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-600 mb-3">
												Frontend Features
											</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• React + Next.js for SPA/SSR hybrid</li>
												<li>• Web3.js & Ethers.js wallet integration</li>
												<li>• NFT minting & upload via IPFS</li>
												<li>• Tailwind CSS + Framer Motion UI</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-600 mb-3">
												Smart Contract & Backend
											</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• Solidity ERC-721 & ERC-1155 contracts</li>
												<li>• OpenZeppelin security standards</li>
												<li>• Node.js GraphQL API</li>
												<li>• IPFS metadata storage</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-600">Key Achievements</h4>
										<ul className="space-y-2 text-sm text-gray-600">
											<li>• Seamless MetaMask & WalletConnect login</li>
											<li>• Sub-3s minting & transaction confirmation</li>
											<li>• Deployed on Ethereum mainnet & Polygon</li>
										</ul>
									</div>
								</div>

								<div className="bg-gray-50 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-600 mb-4">DApp Architecture</h4>
									<div className="aspect-[4/3] bg-white rounded-lg p-4 shadow-inner">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Client Layer */}
											<g>
												<rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<text x="200" y="45" textAnchor="middle" className="fill-gray-600 text-[12px]">
													React Frontend (Next.js + Wallet Integration)
												</text>
											</g>

											{/* API Layer */}
											<g>
												<rect x="20" y="80" width="360" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<text x="200" y="105" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Node.js GraphQL API
												</text>
											</g>

											{/* Smart Contract Layer */}
											<g>
												<rect x="20" y="150" width="170" height="40" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
												<rect x="210" y="150" width="170" height="40" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
												<text x="105" y="175" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Solidity Contracts
												</text>
												<text x="295" y="175" textAnchor="middle" className="fill-gray-600 text-[12px]">
													OpenZeppelin Libraries
												</text>
											</g>

											{/* Storage Layer */}
											<g>
												<rect x="20" y="220" width="170" height="30" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<rect x="210" y="220" width="170" height="30" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<text x="105" y="240" textAnchor="middle" className="fill-gray-600 text-[12px]">
													IPFS / Filecoin
												</text>
												<text x="295" y="240" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Ethereum Mainnet / Polygon
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-400" strokeWidth="1">
												<line x1="200" y1="60" x2="200" y2="80" />
												<line x1="200" y1="120" x2="200" y2="150" />
												<line x1="105" y1="190" x2="105" y2="220" />
												<line x1="295" y1="190" x2="295" y2="220" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>


				</div>
			</div>
		</section>
	);
}
