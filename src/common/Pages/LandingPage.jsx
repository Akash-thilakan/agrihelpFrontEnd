import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@mui/material";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";



function LandingPage() {
      const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

    const services = [
    {
      title: "Crops",
      desc: "Buy fresh crops directly from farmers.",
      icon: <AgricultureIcon fontSize="large" className="text-green-600" />,
    },
    {
      title: "News & Tips",
      desc: "Stay updated with farming insights.",
      icon: <InfoIcon fontSize="large" className="text-green-600" />,
    },
    {
      title: "Tools, Tractors & Workers",
      desc: "Find equipment and skilled workers easily.",
      icon: <BuildIcon fontSize="large" className="text-green-600" />,
    },
    {
      title: "Videos",
      desc: "Watch expert farming tutorials and guides.",
      icon: <PlayCircleFilledIcon fontSize="large" className="text-green-600" />,
    },
  ];

   const blogs = [
    {
      title: "Modern Farming Techniques",
      img: "https://blog.agribazaar.com/wp-content/uploads/2024/06/1.jpg",
      desc: "Learn how smart tools and new strategies are transforming agriculture today.",
    },
    {
      title: "Tips for Better Crop Growth",
      img: "https://plus.unsplash.com/premium_photo-1661962692059-55d5a4319814?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWdyaWN1bHR1cmV8ZW58MHx8MHx8fDA%3D",
      desc: "Simple and effective tips to improve soil health and boost crop productivity.",
    },
    {
      title: "Sustainable Agriculture Practices",
      img: "https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg",
      desc: "Explore eco-friendly methods that help farms thrive while protecting nature.",
    },
  ];

     

  return (
    <>
    <div className="w-full h-screen relative font-sans">

<video
className="absolute inset-0 w-full h-full object-cover"
src="https://www.pexels.com/download/video/3784890/"
autoPlay
loop
muted
/>


{/* Overlay */}
<div className="absolute inset-0 " style={{backgroundColor:"rgb(0,0,0,0.3)"}}></div>


{/* Navbar */}
<div className="relative z-10 flex items-center justify-between px-10 py-6 text-white">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 bg-green-400 rounded-lg"></div>
<h1 className="text-xl font-bold">Agri Help</h1>
</div>


<div className="hidden md:flex space-x-10 text-sm">
<a href="#home" className="hover:text-green-300">Homepage</a>
<a href="#about" className="hover:text-green-300">About us</a>
<a href="#service" className="hover:text-green-300">Our Services</a>
<a href="#blog" className="hover:text-green-300">Blog</a>
<a href="#contact" className="hover:text-green-300">Contact us</a>
</div>


<div className="flex space-x-4">
<Link to={"/login"}><Button variant="text" style={{ color: "white" }}>Log in</Button></Link>
<Link to={"/register"}>
<Button
variant="contained"
style={{ backgroundColor: "white", color: "black", borderRadius: "20px" }}
>
Sign up
</Button></Link>
</div>
</div>


{/* Hero Section */}
<div id="home"  className="relative z-10 flex flex-col justify-center h-full px-10 md:px-20 text-white max-w-3xl">
<p className="text-sm mb-2 text-green-300">New features available</p>


<h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
Your Guide to Modern Agriculture
</h1>


<p className="text-lg text-gray-200 mb-8">
At AgriHelp, we believe that every seed deserves a chance to grow. Our platform connects farmers with the resources, tools, and support they need to build a stronger and more sustainable future.
</p>


{/* Buttons */}
<div className="flex space-x-4">
<button className="px-6 py-3 bg-green-400 rounded-full text-black font-semibold hover:bg-green-500 transition flex items-center">
Getting Started
<span className="ml-2 text-xl">→</span>
</button>


<button className="px-6 py-3 bg-white bg-opacity-90 rounded-full text-black font-semibold hover:bg-opacity-100 transition">
Our Services
</button>
</div>
</div>
</div>

{/* about us */}
  <div id="about" ref={ref} className=" w-full py-20 px-6 md:px-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

         
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-green-700 mb-4">About Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            AgriHelp is a platform built to connect farmers, buyers, and local 
            communities through technology. We simplify agriculture by offering 
            access to crops, land, tools, workers, and expert farming guidance. 
            Our mission is to empower farmers and make modern agriculture easy, 
            accessible, and transparent for everyone.
          </p>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="bg-green-50 p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-green-800 mb-6">Our Achievements</h3>

            <ul className="space-y-4 text-gray-800 text-lg">
              <li className="flex items-start">
                <span className="text-green-600 text-2xl mr-3">✔</span>
                Helped connect over 500+ verified farmers
              </li>

              <li className="flex items-start">
                <span className="text-green-600 text-2xl mr-3">✔</span>
                1000+ successful crop and tool listings
              </li>

              <li className="flex items-start">
                <span className="text-green-600 text-2xl mr-3">✔</span>
                Trusted platform for land leasing & agri-services
              </li>

              <li className="flex items-start">
                <span className="text-green-600 text-2xl mr-3">✔</span>
                Improving digital access for rural communities
              </li>
            </ul>
          </div>
        </motion.div>

      </div>
    </div>

    {/* our services */}
  <div id="service" className=" w-full py-20 px-6 md:px-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex justify-center mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
              {s.title}
            </h3>
            <p className="text-gray-600 text-center">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Blogs */}

     <div id="blog" className=" w-full py-20 px-6 md:px-20 bg-white">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
        Latest Blog Posts
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((b, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
          >
            <img src={b.img} alt={b.title} className="w-full h-48 object-cover" />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{b.title}</h3>
              <p className="text-gray-600 mb-4">{b.desc}</p>

              <button className="text-green-600 font-semibold hover:text-green-800 transition">
                Read More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* contact us */}
     
    <div id="contact" className=" w-full py-20 px-6 md:px-20 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-green-700 mb-4">
            Contact Us
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We are here to support farmers, buyers, and agricultural communities.
            If you have any questions, suggestions, or need help, feel free to reach out.
          </p>

          <div className="space-y-3 text-gray-700">
            <p><strong>Email:</strong> support@agrihelp.com</p>
            <p><strong>Phone:</strong> +91 9497158172</p>
            <p><strong>Address:</strong> Kochi, Kerala, India</p>
          </div>
        </motion.div>

        {/* RIGHT SIDE — FORM */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-md"
        >
          <h3 className="text-2xl font-semibold text-green-700 mb-6">
            Send us a message
          </h3>

          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </div>
        </motion.form>

      </div>
    </div>
    <Footer />
  

    </>
  )
}

export default LandingPage