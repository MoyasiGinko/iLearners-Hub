// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { newsItems } from "./cardData";
// import CustomButton from "@/components/common/CustomButton";

// const NewsDetail: React.FC = () => {
//   const pathname = usePathname();
//   const id = pathname ? parseInt(pathname.split("/").pop() || "0", 10) : 0;
//   const item = newsItems.find((item) => item.id === id);

//   // Function to render different categories with fun icons
//   const getCategoryIcon = (category: string) => {
//     switch (category) {
//       case "news":
//         return "📰";
//       case "event":
//         return "🎉";
//       case "offer":
//         return "🎁";
//       default:
//         return "📌";
//     }
//   };

//   // Function to add animations to lists for kid-friendly effect
//   const enhanceContentWithAnimations = (content: string) => {
//     // Add animation classes to headers
//     let enhancedContent = content
//       .replace(/<h2>/g, '<h2 class="animate-header">')
//       .replace(/<h3>/g, '<h3 class="animate-subheader">')
//       .replace(/<h4>/g, '<h4 class="animate-subheader">');

//     // Add fun emojis and classes to list items for visual appeal
//     enhancedContent = enhancedContent
//       .replace(/<li>/g, '<li class="animate-list-item">✨ ')
//       .replace(/<ol>/g, '<ol class="fun-ordered-list">')
//       .replace(/<ul>/g, '<ul class="fun-unordered-list">');

//     // Highlight important text
//     enhancedContent = enhancedContent
//       .replace(/<strong>/g, '<strong class="highlight">')
//       .replace(/<p>/g, '<p class="animate-paragraph">');

//     return enhancedContent;
//   };

//   if (!item) {
//     return (
//       <div className="bg-blue-50 min-h-screen p-6">
//         <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h1 className="text-3xl font-bold text-red-500">Oops!</h1>
//             <p className="text-lg mb-6">
//               We couldn't find the news item you're looking for. (ID: {id})
//             </p>
//             <div className="mt-4 text-center">
//               <Image
//                 src="/images/news/n1.jpg"
//                 alt="Not found"
//                 width={200}
//                 height={200}
//                 className="mx-auto rounded-full border-4 border-purple-200"
//               />
//             </div>
//             <div className="mt-8 text-center">
//               <Link href="/news-offers">
//                 <span className="inline-block bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium px-6 py-3 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1">
//                   ← Back to News & Events
//                 </span>
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-blue-50 min-h-screen p-6">
//       <div className="max-w-4xl mx-auto">
//         <Link href="/news-offers">
//           <span className="inline-block mb-6 bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium px-4 py-2 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1">
//             ← Back to News & Events
//           </span>
//         </Link>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white rounded-2xl overflow-hidden shadow-lg"
//         >
//           {/* Header image with enhanced styling */}
//           <div className="relative h-64 md:h-80 overflow-hidden">
//             <Image
//               src={item.imageUrl}
//               alt={item.title}
//               layout="fill"
//               objectFit="cover"
//               className="hover:scale-105 transition-transform duration-500"
//             />
//             <motion.div
//               initial={{ x: 100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ delay: 0.2 }}
//               className={`absolute top-6 right-6 rounded-full px-4 py-2 text-sm font-bold shadow-lg ${
//                 item.category === "news"
//                   ? "bg-blue-500 text-white"
//                   : item.category === "event"
//                   ? "bg-green-500 text-white"
//                   : "bg-yellow-400 text-purple-900"
//               }`}
//             >
//               {getCategoryIcon(item.category)} {item.category.toUpperCase()}
//             </motion.div>
//           </div>

//           {/* Content with enhanced styling for kids */}
//           <div className="p-6 md:p-10">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.1 }}
//             >
//               <p className="text-sm text-gray-500 mb-2 font-medium">
//                 📅 {item.date}
//               </p>
//               <h1 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6 leading-tight">
//                 {item.title}
//               </h1>

//               {/* Enhanced content rendering with custom styling */}
//               <style jsx global>{`
//                 .animate-header {
//                   color: #6d28d9;
//                   font-size: 1.8rem;
//                   margin-top: 1.5rem;
//                   margin-bottom: 1rem;
//                   padding-bottom: 0.5rem;
//                   border-bottom: 3px dotted #d8b4fe;
//                   animation: colorChange 6s infinite alternate;
//                 }

//                 .animate-subheader {
//                   color: #7c3aed;
//                   font-size: 1.4rem;
//                   margin-top: 1.2rem;
//                   margin-bottom: 0.8rem;
//                   font-weight: bold;
//                 }

//                 .fun-ordered-list,
//                 .fun-unordered-list {
//                   background-color: #f3f4f6;
//                   padding: 1rem 1rem 1rem 3rem;
//                   border-radius: 1rem;
//                   margin: 1rem 0;
//                   border: 2px dashed #d1d5db;
//                 }

//                 .animate-list-item {
//                   margin-bottom: 0.6rem;
//                   transition: transform 0.2s;
//                   padding-left: 0.5rem;
//                 }

//                 .animate-list-item:hover {
//                   transform: translateX(5px);
//                   color: #6d28d9;
//                 }

//                 .highlight {
//                   background-color: #fef3c7;
//                   padding: 0 0.25rem;
//                   border-radius: 0.25rem;
//                   font-weight: bold;
//                   color: #92400e;
//                 }

//                 .animate-paragraph {
//                   line-height: 1.8;
//                   margin-bottom: 1.2rem;
//                   font-size: 1.05rem;
//                 }

//                 @keyframes colorChange {
//                   0% {
//                     color: #6d28d9;
//                   }
//                   25% {
//                     color: #4f46e5;
//                   }
//                   50% {
//                     color: #7c3aed;
//                   }
//                   75% {
//                     color: #8b5cf6;
//                   }
//                   100% {
//                     color: #6d28d9;
//                   }
//                 }

//                 @keyframes bounce {
//                   0%,
//                   100% {
//                     transform: translateY(0);
//                   }
//                   50% {
//                     transform: translateY(-5px);
//                   }
//                 }
//               `}</style>

//               <div
//                 className="prose max-w-none text-gray-700"
//                 dangerouslySetInnerHTML={{
//                   __html: item.content
//                     ? enhanceContentWithAnimations(item.content)
//                     : item.description,
//                 }}
//               />
//             </motion.div>

//             {/* Interactive feedback section */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-2 border-dashed border-purple-300"
//             >
//               <h3 className="text-xl font-bold text-purple-700 mb-3 flex items-center">
//                 <span className="text-2xl mr-2">👍</span> What did you think?
//               </h3>
//               <p className="mb-4">
//                 Did you enjoy reading this? Share it with your friends!
//               </p>
//               <div className="flex flex-wrap gap-3">
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="bg-blue-500 hover:bg-blue-600 border-blue-700 text-white px-8 inline-block py-3 rounded-full
//          font-medium
//        shadow-lg hover:shadow-xl
//        border-b-4
//        active:border-b-0 active:border-t-0 active:shadow-inner
//        active:translate-y-1 hover:-translate-y-1
//        transform transition-all duration-200
//        focus:outline-noneactive:shadow-inner active:bg-blue-700"
//                   onClick={() => {
//                     const button = document.activeElement as HTMLElement;
//                     navigator.clipboard.writeText(window.location.href);
//                     if (button) {
//                       const originalText = button.innerText;
//                       button.innerText = "Link Copied!";
//                       setTimeout(() => {
//                         button.innerText = originalText;
//                       }, 2000);
//                     }
//                   }}
//                 >
//                   Share with Friends
//                 </motion.button>

//                 <CustomButton
//                   text="Explore More"
//                   href="/news-offers"
//                   className="bg-gradient-to-r from-purple-400 to-purple-500 border-purple-600 hover:bg-opacity-90"
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* Related items section with enhanced animations */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="mt-12"
//         >
//           <h2 className="text-2xl font-bold text-purple-800 mb-6 flex items-center">
//             <span className="mr-2">🔍</span> You might also like...
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {newsItems
//               .filter((relatedItem) => relatedItem.id !== item.id)
//               .slice(0, 3)
//               .map((relatedItem, index) => (
//                 <motion.div
//                   key={relatedItem.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 + 0.2 }}
//                   whileHover={{
//                     y: -5,
//                     boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
//                   }}
//                   className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
//                 >
//                   <div className="relative h-32 overflow-hidden">
//                     <Image
//                       src={relatedItem.imageUrl}
//                       alt={relatedItem.title}
//                       layout="fill"
//                       objectFit="cover"
//                       className="hover:scale-110 transition-transform duration-500"
//                     />
//                     <div
//                       className={`absolute top-2 right-2 rounded-full px-2 py-1 text-xs font-bold ${
//                         relatedItem.category === "news"
//                           ? "bg-blue-500 text-white"
//                           : relatedItem.category === "event"
//                           ? "bg-green-500 text-white"
//                           : "bg-yellow-400 text-purple-900"
//                       }`}
//                     >
//                       {getCategoryIcon(relatedItem.category)}{" "}
//                       {relatedItem.category}
//                     </div>
//                   </div>
//                   <div className="p-4">
//                     <h3 className="font-bold text-purple-700 mb-1 line-clamp-1 hover:text-purple-900 transition-colors">
//                       {relatedItem.title}
//                     </h3>
//                     <p className="text-sm text-gray-500 mb-2">
//                       {relatedItem.date}
//                     </p>
//                     <Link href={`/news-offers/${relatedItem.id}`}>
//                       <span className="text-sm text-purple-600 hover:text-purple-800 font-medium inline-flex items-center">
//                         Read More <span className="ml-1 text-lg">→</span>
//                       </span>
//                     </Link>
//                   </div>
//                 </motion.div>
//               ))}
//           </div>
//         </motion.div>

//         {/* Fun footer with animated elements */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="mt-16 mb-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl p-8 text-white text-center relative overflow-hidden"
//         >
//           {/* Animated background elements */}
//           <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
//             {[...Array(5)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute rounded-full bg-white opacity-10"
//                 style={{
//                   top: `${Math.random() * 100}%`,
//                   left: `${Math.random() * 100}%`,
//                   width: `${Math.random() * 50 + 20}px`,
//                   height: `${Math.random() * 50 + 20}px`,
//                 }}
//                 animate={{
//                   y: [0, -20, 0],
//                   x: [0, 10, 0],
//                 }}
//                 transition={{
//                   repeat: Infinity,
//                   duration: 3 + i,
//                   ease: "easeInOut",
//                   repeatType: "reverse",
//                 }}
//               />
//             ))}
//           </div>

//           <div className="relative z-10">
//             <motion.h3
//               className="text-2xl font-bold mb-4"
//               transition={{ repeat: Infinity, duration: 2 }}
//             >
//               Did You Know? 🤔
//             </motion.h3>
//             <p className="mb-6 text-lg">
//               The iLearners Hub has more than 30 courses!
//             </p>
//             <CustomButton
//               text="See Our Courses"
//               href="/courses"
//               className="bg-gradient-to-r from-yellow-400 to-yellow-500 border-yellow-600 hover:bg-opacity-90"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default NewsDetail;
