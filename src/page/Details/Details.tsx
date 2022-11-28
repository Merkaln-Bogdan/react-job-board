import { calculationDate } from "helpers/datingHooks";

import { Button } from "components/Button";
import { Headline } from "components/Headline";
import { Icon } from "components/Icon";
import { Info } from "components/Info/Info";
import { Header } from "sections/Header";
import { Layout } from "sections/Layout";
import { Picker } from "sections/Picker";
import { Map } from "sections/Map";

import { useDetails } from "./Details.hooks";

const Details = () => {
  const {
    description,
    pictures,
    salary,
    benefits,
    employment_type,
    createdAt,
    title,
    location,
    phone,
    email,
  } = useDetails();

  return (
    <Layout>
      <div className="max-w-5xl flex justify-center py-14 px-4 sm:flex-col">
        <div className="w-4/6 mx-20 sm:mr-0 sm:w-full sm:mx-0">
          <main className="mt-5">
            <Header title="Job Details" />

            <Button className="bg-dark text-white mt-10 sm:hidden">
              Apply Now
            </Button>

            <Info className="flex justify-between mt-8 text-2xl font-bold mt-8 sm:mt-mar_top_mid sm:mb-4 sm:flex-col">
              <Headline
                as="p"
                className="w-3/5 text-2xl font-bold sm:w-full sm:mb-5"
              >
                {title}
              </Headline>
              <Headline
                as="span"
                className="text-xl flex flex-col sm:flex-col-reverse sm:self-end"
              >
                &#8364; {salary.replace(/\k/g, " 000")}
                <Headline as="p" className="text-base font-normal">
                  Brutto, per year
                </Headline>
              </Headline>
            </Info>

            <div className="flex">
              <p className="text-light sm:mt-mar_min_md">
                Posted
                {calculationDate(createdAt).postedDate}
                ago
              </p>
            </div>
            <Info>{description}</Info>

            <Info label="Responsibilities" className="flex flex-col">
              {description}
            </Info>

            <Info label="Compensation & Benefits:" className="flex flex-col">
              {description}
            </Info>

            <Button
              onClick={() => null}
              className="bg-dark text-white sm:m-auto"
            >
              Apply Now
            </Button>

            <div className="flex flex-col sm:flex-col-reverse">
              <Picker
                data={employment_type}
                label="Employment type"
                title="Additional info"
                className="w-56 py-4 px-8 bg-light border border-solid border-b_light"
              />

              <Picker
                data={benefits}
                label="Benefits"
                className="w-56 py-4 px-8 bg-light_yellow text-dark_yellow border border-solid border-yellow"
              />

              <Picker data={pictures} asImg title="Attaches images" />
            </div>
          </main>

          <Button
            onClick={() => null}
            className="mt-20 ml-mar_min_lg bg-light text-dark sm:hidden"
          >
            <Icon name="BsChevronLeft" className="mr-4" />
            Return to job board
          </Button>
        </div>

        <Headline className="inline-block w-full mb-4 pb-2.5 mt-20 text-2xl font-bold border-b border-solid border-light lg:hidden">
          Contacts
        </Headline>
        <Map center={location} info={{ email, phone }} />
      </div>
    </Layout>
  );
};

export { Details };
