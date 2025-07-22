import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import Starfield from "../design/Starfield";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const badgesOnly = [
  {
    name: "Introduction to Generative AI",
    src: "/Badges/aws-educate-introduction-to-generative-ai.png",
    publisher: "AWS Educate",
    category: "AI",
  },
  {
    name: "Machine Learning Foundations",
    src: "/Badges/aws-educate-machine-learning-foundations.png",
    publisher: "AWS Educate",
    category: "AI",
  },
  {
    name: "AI Agents A-Z",
    src: "/Badges/ai-agents-a-z.png",
    publisher: "O'Reilly",
    category: "AI",
  },
  {
    name: "AI ML Fundamentals",
    src: "/Badges/ai-ml-fundamentals_badge.png",
    publisher: "O'Reilly",
    category: "AI",
  },
  {
    name: "Hugging Face for NLP",
    src: "/Badges/hugging-face-for-nlp.png",
    publisher: "O'Reilly",
    category: "NLP",
  },
  {
    name: "Jumpstart Your AI Career",
    src: "/Badges/jumpstart-your-ai-career.png",
    publisher: "O'Reilly",
    category: "Career",
  },
  {
    name: "OOP in Python",
    src: "/Badges/oop-in-python.png",
    publisher: "O'Reilly",
    category: "Programming",
  },
  {
    name: "Pandas in 4 Hours",
    src: "/Badges/pandas-in-4-hours.png",
    publisher: "O'Reilly",
    category: "Programming",
  },
  {
    name: "Python Kitchen",
    src: "/Badges/python-kitchen.png",
    publisher: "O'Reilly",
    category: "Programming",
  },
  {
    name: "GenAI Essentials for Everyone",
    src: "/Badges/genai-essentials-for-everyone.png",
    publisher: "O'Reilly",
    category: "AI",
  },
  {
    name: "AI Tools for Marketing",
    src: "/Badges/ATM_Badge.png",
    publisher: "IMM Graduate School",
    category: "Marketing",
  },
  {
    name: "Basic Design with Canva",
    src: "/Badges/BDC_Badge.png",
    publisher: "IMM Graduate School",
    category: "Design",
  },
  {
    name: "7 Practices of Successful New Professionals",
    src: "/Badges/7_Practices_of_Successful_New_Professionals.png",
    publisher: "IMM Graduate School",
    category: "Career",
  },
  {
    name: "Career Success: How to Build your Confidence as a New Professional",
    src: "/Badges/Career_Success_How_to_Build_your_Confidence_as_a_New_Professional.png",
    publisher: "IMM Graduate School",
    category: "Career",
  },
  {
    name: "Getting Noticed at Work",
    src: "/Badges/Getting_Noticed_at_Work.png",
    publisher: "IMM Graduate School",
    category: "Career",
  },
  {
    name: "Degree vs Skills - Why Do you Need Them Both",
    src: "/Badges/Degree_vs_Skills_–_why_do_you_need_them_both.png",
    publisher: "IMM Graduate School",
    category: "Career",
  },
  {
    name: "Leading Projects Like a Pro: 5 Key Skills You Need",
    src: "/Badges/Leading_Projects_Like_a_Pro_5_Key_Skills_You_Need.png",
    publisher: "IMM Graduate School",
    category: "Project Management",
  },
];

type Badge = {
  name: string;
  src: string;
  publisher: string;
  category: string;
};

interface BadgeSectionProps {
  title?: string;
  badges: Badge[];
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      type: "spring",
      stiffness: 120,
    },
  }),
};

const BadgeSection = ({ title = "Badges", badges }: BadgeSectionProps) => {
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(badges.map((b) => b.category)))];

  const filteredBadges = badges.filter(
    (b) => filter === "All" || b.category === filter
  );

  const visibleBadges = showAll ? filteredBadges : filteredBadges.slice(0, 8);

  return (
    <section
      id="badges"
      className="py-24 px-4 w-full flex flex-col items-center justify-center text-center"
    >
      <Starfield />
      <h2 className="text-4xl font-extrabold mb-8 text-white">{title}</h2>

      {/* Category Filter */}
      <div className="mb-10">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-[#1c1c2b] border border-white/10 text-white rounded-lg px-4 py-2 focus:outline-none"
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Badge Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl w-full"
      >
        {visibleBadges.map((badge, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-[#1c1c2b] border border-white/5 rounded-xl p-4 shadow-md hover:shadow-lg transition backdrop-blur-md"
            custom={index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={badgeVariants}
          >
            <img
              src={badge.src}
              alt={badge.name}
              className="w-20 h-20 object-contain mb-4"
            />
            <p className="text-white text-sm font-semibold text-center">{badge.name}</p>
            <p className="text-xs text-white/60 mt-1 text-center">{badge.publisher}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* View More Button */}
      {filteredBadges.length > 8 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-12 text-sm text-white/80 hover:text-white transition flex items-center gap-1"
        >
          {showAll ? "View Less" : "View More Badges"}
          <ChevronDown
            className={`transition-transform ${
              showAll ? "rotate-180" : ""
            } w-4 h-4`}
          />
        </button>
      )}
    </section>
  );
};

export default BadgeSection;

