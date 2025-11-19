import Image from "next/image";
import JobCard from "./components/JobCard";
import { title } from "process";
import JobListingInterface from "./JobListingInterface";
import Header from "./components/Header";
import Job from "./job/page";

const data: JobListingInterface[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    address: { street: "123 Tech Street", city: "Silicon Valley", state: "CA" },
    description:
      "We are looking for a skilled Senior Frontend Developer to join our dynamic team. You will be responsible for building and maintaining high-quality web applications.",
    jobType: "Full-time",
    categories: ["Engineering", "IT"],
    logoUrl: "/globe.svg",
  },
  {
    id: 2,
    title: "Marketing Manager",
    company: "Creative Minds Co.",
    address: { street: "123 Tech Street", city: "Silicon Valley", state: "CA" },
    description:
      "Join our team as a Marketing Manager to lead our marketing strategies and campaigns. You will work closely with cross-functional teams to drive brand awareness and growth.",
    jobType: "Part-time",
    categories: ["Engineering", "IT"],
    logoUrl: "/globe.svg",
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "Data Insights LLC",
    address: { street: "123 Tech Street", city: "Silicon Valley", state: "CA" },
    description:
      "We are seeking a Data Analyst to help us make data-driven decisions. You will analyze large datasets and provide actionable insights to support business objectives.",
    jobType: "Contract",
    categories: ["Engineering", "IT"],
    logoUrl: "/globe.svg",
  },
];
const len: number = data.length;

const test: JobListingInterface = {
  id: 1,
  title: "Senior Frontend Developer",
  company: "Tech Solutions Inc.",
  address: { street: "123 Tech Street", city: "Silicon Valley", state: "CA" },
  description:
    "We are looking for a skilled Senior Frontend Developer to join our dynamic team. You will be responsible for building and maintaining high-quality web applications.",
  jobType: "Full-time",
  categories: ["Engineering", "IT"],
  logoUrl: "../public/file.svg",
  responsibilities: [
    "Develop and maintain web applications using React.js and other frontend technologies.",
    "Collaborate with cross-functional teams to define, design, and ship new features.",
    "Optimize applications for maximum speed and scalability.",
    "Ensure the technical feasibility of UI/UX designs.",
  ],
  detail: [
    {
      title: "Bachelor's degree in Computer Science or related field",
      description: "Minimum 5 years of experience in frontend development.",
    },
  ],
  about: {
    postedOn: "August 1, 2023",
    deadline: "August 31, 2023",
    startDate: "September 15, 2023",
    endDate: "September 15, 2024",
  },
  eventLocation: "The online event will be hosted via Zoom.",
  skills: ["JavaScript", "React.js", "CSS", "HTML", "Git"],
};

export default function Home() {
  return (
    <>
      {Header(len)}
      {data.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
      {/* <Job {...test} /> */}
    </>
  );
}
