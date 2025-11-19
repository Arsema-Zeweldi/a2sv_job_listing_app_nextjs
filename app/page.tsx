import Image from "next/image";
import JobCard from "./components/JobCard";
import JobListingInterface from "./JobListingInterface";
import Header from "./components/Header";
import "../app/data/data.json";

const data: JobListingInterface[] = require("./data/data.json");
const len = data.length;

export default function Home() {
  return (
    <>
      {Header(len)}
      {data.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </>
  );
}
