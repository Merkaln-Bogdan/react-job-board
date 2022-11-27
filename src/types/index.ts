type ArticleType = {
  id: string | number;
  address: string;
  name: string;
  benefits: string[];
  title: string;
  createdAt: string;
  description: string;
  email: string;
  phone: string;
  pictures: string[];
  salary: string;
  employment_type: string[];
  location: LocationType;
  updatedAt: string;
};

type LocationType = {
  lat: number;
  long: number;
};

export type { ArticleType, LocationType };
