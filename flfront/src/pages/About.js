import React from "react";

const About = () => {
  return (
    <div className="about-page-container">
      <header className="about-header bg-green-500 text-white text-center py-6">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="text-lg mt-2">
          Discover the perfect blend of health and convenience.
        </p>
      </header>

      <section className="about-content px-6 py-8">
        <div className="about-purpose mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-3 text-gray-700 leading-6">
            We strive to empower individuals to live healthier lives by offering
            a curated selection of organic food items and personalized
            nutritional tracking. Our platform bridges the gap between wholesome
            eating and convenience, making it easier for you to achieve your
            health goals.
          </p>
        </div>

        <div className="about-features mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Key Features</h2>
          <ul className="list-disc list-inside mt-3 text-gray-700">
            <li>
              Wide range of organic foods with detailed nutritional information.
            </li>
            <li>
              Track your daily food intake and monitor nutritional balance.
            </li>
            <li>
              Real-time analytics with ApexCharts for insights on your diet.
            </li>
            <li>
              Admin panel to manage products and user activities efficiently.
            </li>
            <li>
              Easy-to-use shopping cart for a seamless purchase experience.
            </li>
          </ul>
        </div>

        <div className="about-approach mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Why Choose Us?
          </h2>
          <p className="mt-3 text-gray-700 leading-6">
            Our platform is designed with you in mind. From handpicked organic
            products to a user-friendly interface, we ensure every step of your
            journey towards a healthier lifestyle is smooth and enjoyable.
            Whether you’re shopping for wholesome groceries or analyzing your
            daily nutrition, we’ve got you covered.
          </p>
        </div>

        <div className="about-team mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Our Values</h2>
          <p className="mt-3 text-gray-700 leading-6">
            Transparency, quality, and customer satisfaction are the pillars of
            our platform. We believe that healthy living starts with informed
            choices, and we’re here to guide you every step of the way.
          </p>
        </div>

        <div className="about-cta text-center mt-8">
          <h2 className="text-xl font-semibold text-gray-800">
            Ready to Start Your Journey?
          </h2>
          <p className="mt-2 text-gray-700">
            Explore our products or start tracking your meals today. Together,
            let’s make healthy living a reality!
          </p>
          <button
            className="bg-green-500 text-white px-6 py-3 rounded-md mt-4 hover:bg-green-600"
            onClick={() => (window.location.href = "/products")}
          >
            Explore Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
