import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          About <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to BookMyTutor, your go-to platform for personalized
            learning. We connect you with expert tutors across subjects, making
            quality education easy and accessible. Find the perfect tutor and
            schedule sessions effortlessly to reach your academic goals.
          </p>
          <p>
            BookMyTutor is committed to excellence in education technology. We
            continuously enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            learning support. Whether you&#39;re scheduling your first session or
            managing ongoing studies, BookMyTutor is here to support your
            educational journey every step of the way.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at BookMyTutor is to create a seamless learning
            experience for every student. We aim to bridge the gap between
            learners and tutors, making it easier for you to access the support
            you need, whenever you need it.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>{" "}
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className=" border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]  hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>EFFICIENCY:</b>
          <p>Flexible session scheduling that fits into your busy learning routine.</p>
        </div>
        <div className=" border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]  hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>CONVENIENCE:</b>
          <p>
          Access to a network of trusted tutors and subject experts in your area.</p>
        </div>
        <div className=" border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px]  hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>PERSONALIZATION:</b>
          <p>Personalized tutor recommendations and reminders to help you stay on track with your studies.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
