import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row mb-28 gap-10 text-sm">
        <img className="w-full md:max-w-[360px]" src={assets.contact_image} alt="" />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">
            Near College Circle <br />
            Vidyagiri, Bagalkot, INDIA
          </p>
          <p className="text-gray-500">
            Tel: 9876543210 <br />
            Email: bookmytutor@gmail.com
          </p>
          <p className="font-semibold text-lg text-gray-600">CAREERS AT BOOKMYTUTOR</p>
          <p className="text-gray-500">
          Join our team to make quality education accessible for all!
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Tutoring Opportunities</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
