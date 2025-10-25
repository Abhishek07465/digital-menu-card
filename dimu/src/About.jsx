// About.jsx
import Navv from "./Navv";
import './About.css';
import { useEffect } from "react";
import soundFile from "./assets/naam.mp3";  // अपनी mp3 file ka path

export default function About() {
  
  useEffect(() => {
    const audio = new Audio(soundFile);
    audio.play();
  }, []);

  return (
    <>
      <Navv />

      <h1 className="text-3xl text-center my-8 font-bold">About Session</h1>

      <div className="min-h-screen bg-white font-sans">

        {/* Our Story Section */}
        <section className="bg-red-100 py-16 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-6">Our Story</h2>
            <p className="text-xl text-gray-800 mb-8">
              Bringing the flavor and fun of Gokuldham Society to your plate since 2010
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6e0a0641-ff40-430b-a231-3709622ed791.png"
                alt="TMKOC Restaurant exterior"
                className="w-full h-96 object-cover rounded-md mb-6"
              />
            </div>
          </div>
        </section>

        {/* Our Journey Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-red-700 text-center mb-12">Our Journey</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                <h3 className="text-2xl font-semibold text-red-700 mb-4">How It Began</h3>
                <p className="text-gray-700">
                  Inspired by the beloved characters and stories from Taarak Mehta Ka Ooltah Chashmah,
                  we set out to create a dining experience that brings the warmth and humor of Gokuldham Society
                  to food lovers everywhere.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-600">
                <h3 className="text-2xl font-semibold text-red-700 mb-4">Our Philosophy</h3>
                <p className="text-gray-700">
                  We believe that great food brings people together, just like in the society where
                  Jethalal, Babita ji, Bhide, and all our favorite characters share meals, laughter,
                  and life's moments together.
                </p>
              </div>
            </div>

            {/* What Makes Us Special - horizontal */}
            <div className="bg-red-50 p-8 rounded-lg border border-red-200">
              <h3 className="text-2xl font-semibold text-red-700 mb-6 text-center">What Makes Us Special</h3>
              <div className="flex justify-center gap-12 flex-wrap">
                <div className="text-center max-w-xs">
                  <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Authentic Flavors</h4>
                  <p className="text-gray-700">Traditional recipes with a modern twist</p>
                </div>

                <div className="text-center max-w-xs">
                  <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Family Environment</h4>
                  <p className="text-gray-700">Where everyone feels like part of the society</p>
                </div>

                <div className="text-center max-w-xs">
                  <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Joyful Experience</h4>
                  <p className="text-gray-700">Delicious food served with smiles and laughter</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Highlights */}
        <section className="bg-red-700 py-16 px-4 text-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Our Menu Highlights</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white text-red-700 p-4 rounded-lg text-center shadow-md">
                <h3 className="font-semibold text-lg mb-2">Breakfast</h3>
                <p>Start your day with our special morning delights</p>
              </div>

              <div className="bg-white text-red-700 p-4 rounded-lg text-center shadow-md">
                <h3 className="font-semibold text-lg mb-2">Lunch</h3>
                <p>Hearty meals to power your afternoon</p>
              </div>

              <div className="bg-white text-red-700 p-4 rounded-lg text-center shadow-md">
                <h3 className="font-semibold text-lg mb-2">Dinner</h3>
                <p>Evening feasts for family gatherings</p>
              </div>

              <div className="bg-white text-red-700 p-4 rounded-lg text-center shadow-md">
                <h3 className="font-semibold text-lg mb-2">Drinks & Sweets</h3>
                <p>Refreshments and desserts to complete your meal</p>
              </div>
            </div>
          </div>
        </section>

        {/* Visit Us */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-red-700 text-center mb-8">Visit TMKOC Restaurant</h2>

            <div className="bg-white p-6 rounded-lg shadow-md border border-red-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-700">Location</h3>
                  <p className="mb-4 text-gray-700">Khekra, Baghpat</p>

                  <h3 className="text-xl font-semibold mb-4 text-red-700">Hours</h3>
                  <p className="mb-2 text-gray-700">Monday - Friday: 7am - 11pm</p>
                  <p className="mb-2 text-gray-700">Saturday - Sunday: 8am - 12am</p>
                </div>

                <div>
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f8706ece-0c9d-4586-b459-be6fbb13c636.png"
                    alt="Interior of TMKOC Restaurant"
                    className="w-full h-64 object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-red-800 text-white py-12 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">TMKOC Restaurant</h3>
                <p>Bringing the taste of Gokuldham Society to your table</p>
              </div>

            </div>
          </div>
        </footer>

      </div>
    </>
  );
}