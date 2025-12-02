interface JobListingInterface {
  id: number;
  title: string;
  description: string;
  responsibilities?: string[];
  ideal_candidate: {
    age: string;
    gender: string;
    traits: string[];
  };
  when_where: string;
  address: {
    street: string;
    city: string;
    state: string;
  };
  about?: {
    posted_on: string;
    deadline: string;
    location: string;
    start_date: string;
    end_date: string;
    categories: string[];
    required_skills: string[];
  };
  company: string;
  image: string;
}
export default JobListingInterface;
