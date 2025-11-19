import React from "react";
import JobListingInterface from "../JobListingInterface";
import Link from "next/link";
import Image from "next/image";

const JobCard = (job: JobListingInterface) => {
  return (
    <div className="border-gray-300 border rounded-4xl mr-100 ml-30 mt-5 mb-5 p-5 hover:bg-gray-300">
      <div className="p-2 flex gap-6">
        <div className="w-20 h-20 overflow-hidden rounded-full">
          <Image
            src={job.logoUrl}
            alt={`${job.title} logo`}
            width={66}
            height={59}
            className="object-cover"
          />
        </div>
        <div className="">
          <Link href={`/job/${job.id}`} className="text-xl font-semibold mb-1">
            {job.title}
          </Link>
          <p className="text-gray-500 mb-2">
            {job.company} <span className="text-4xl relative bottom-1">.</span>{" "}
            {job.address.street}, {job.address.city}, {job.address.state}
          </p>
          <p>{job.description}</p>
          <div className="flex align-center mt-2">
            <div className="text-[#56CDAD] bg-green-100 p-2 rounded-3xl text-sm font-semibold">
              {job.jobType}
            </div>
            <span className="mr-1 ml-1 font-light text-gray-300 text-4xl">
              |
            </span>
            <hr className="text-black" />
            <div className="flex gap-2 align-center justify-center  text-sm">
              {job.categories.map((category, idx) => {
                const isEven = idx % 2 === 0;
                const colorClasses = isEven
                  ? "text-amber-400"
                  : "text-[#4640DE]";

                return (
                  <div
                    key={idx}
                    className={`${colorClasses} min-w-20 text-center border-2 pt-2 pb-2 pr-4 pl-4 rounded-3xl font-semibold`}
                  >
                    {category}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
