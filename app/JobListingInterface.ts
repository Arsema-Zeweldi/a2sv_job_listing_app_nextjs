interface JobListingInterface {
  id: number;
  company: string;
  title: string;
  address: {
    street: string;
    city: string;
    state: string;
  };
  description: string;
  jobType: string;
  categories: string[];
  logoUrl: string;
  responsibilities?: string[];
  detail?: [
    {
      title: string;
      description?: string;
    }
  ];
  about?: {
    postedOn: string;
    deadline: string;
    startDate: string;
    endDate: string;
  };
  eventLocation?: string;
  skills?: string[];
}
export default JobListingInterface;
