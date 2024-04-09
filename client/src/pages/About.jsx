import React from 'react';
import '../index.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

// Card component for team members
function TeamMemberCard({ name, role, image, description }) {
  return (
    <div className='team-member-card'>
      <img src={image} alt={name} className='team-member-image' />
      <div className='team-member-info'>
        <h5 className='team-member-name'>{name}</h5>
        <p className='team-member-role'>{role}</p>
        <p className='team-member-description'>{description}</p>
      </div>
    </div>
  );
}

//Information about Vacation Homes
export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      {/* Section: Introduction */}
      <section className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">About Vacation Homes</h1>
        <hr className="w-20 mx-auto border-t-2 border-gray-800 mb-4" />
        <div className="text-center text-gray-700">
          <p className="mb-4">
            Vacation Homes is a leading real estate agency specializing in helping clients lease and rent properties in desirable neighborhoods. Our experienced agents are dedicated to providing exceptional service, making the renting process smooth and enjoyable.
          </p>
          <p className="mb-4">
            Our mission is to help clients find the perfect place to stay with expert advice, personalized service, and deep market knowledge.
          </p>
          <p>
            Join us for an exciting and rewarding vacation experience!
          </p>
        </div>
      </section>

      {/* Section: Meet Our Team */}
      <section className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Meet Our Team</h2>
        <hr className="w-20 mx-auto border-t-2 border-gray-800 mb-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Team members */}
          <TeamMemberCard
            name="Rejina Maharjan"
            role="Product Manager"
            image='../src/img/rejina.jpg'
            description="Rejina leads the vision and strategy for our vacation rental marketplace, ensuring that our platform meets the needs of both hosts and guests."
          />
          <TeamMemberCard
            name="Parth Patel"
            role="Software Engineer/Developer"
            image='../src/img/parth.jpg'
            description="Parth is responsible for building and maintaining the technical foundation of our vacation rental platform."
          />
          <TeamMemberCard
            name="Sunil Gohil"
            role="Customer Experience Specialist"
            image='../src/img/sunil.jpeg'
            description="Sunil is dedicated to ensuring that every user's journey on our vacation rental platform is smooth and enjoyable."
          />
        </div>
      </section>

      {/* Section: Company History */}
      <section className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Company History</h2>
        <hr className="w-20 mx-auto border-t-2 border-gray-800 mb-4" />
        <div className="text-gray-700">



          <p className="mb-4">
            Vacation Homes was founded in the quaint coastal town of Seaview Harbor by a group of passionate individuals with a common dream - to revolutionize the vacation rental industry.
          </p>
          <p className="mb-4">
            The journey began with a simple idea: to create a platform that would connect travelers with the perfect vacation rental properties, while also providing property owners with a reliable and efficient way to showcase their listings.
          </p>
          <p className="mb-4">
            In the early days, our team faced numerous challenges and obstacles. Building a scalable and user-friendly platform required countless hours of dedication and hard work. Led by our visionary founder, Rejina Maharjan, the team navigated through uncharted waters, overcoming technical hurdles and refining the platform to meet the needs of both hosts and guests.
          </p>
          <p className="mb-4">
            As the platform gained traction, our team expanded to include talented individuals like Parth Patel, a skilled software engineer whose expertise was instrumental in building the robust technical foundation of our platform. With Parth's contributions, we were able to implement innovative features and enhancements that set us apart from the competition.
          </p>
          <p className="mb-4">
            In the pursuit of excellence, we never lost sight of our core values - integrity, innovation, and customer satisfaction. Our commitment to these principles earned us the trust and loyalty of our users, propelling us to become a leading player in the vacation rental market.
          </p>
          <p>
            Today, Vacation Homes stands as a testament to the power of perseverance and determination. From our humble beginnings, we have grown into a thriving community of travelers, property owners, and vacation enthusiasts. Our journey is far from over, and we remain dedicated to our mission of providing exceptional service and unforgettable experiences to all who choose to travel with us.
          </p>
          <p className="mt-4">
            Join us as we continue to write the next chapter in our history, one unforgettable vacation at a time.
          </p>






          {/* Add more history paragraphs here */}
        </div>
      </section>

      {/* Section: Social Media */}
      <section className="mb-8">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center">Follow Us</h3>
        <hr className="w-10 mx-auto border-t-2 border-gray-800 mb-4" />
        <div className="flex items-center justify-center space-x-4">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl text-blue-600 hover:text-blue-800" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl text-blue-400 hover:text-blue-600" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl text-pink-600 hover:text-pink-800" />
          </a>
        </div>
      </section>

      {/* Section: Footer */}
      <footer className="text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Vacation Homes. All rights reserved.</p>
      </footer>

    </div>
  );
}