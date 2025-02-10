import { useState } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const projects = [
  {
    name: "Project One",
    image: "/images/project1.png",
    description: "A sleek web app that does amazing things.",
    link: "https://yourproject1.com",
    repo: "https://github.com/yourrepo1",
  },
  {
    name: "Project Two",
    image: "/images/project2.png",
    description: "A powerful tool for productivity.",
    link: "https://yourproject2.com",
    repo: "https://github.com/yourrepo2",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-10">My Portfolio</h1>
      <div className="flex overflow-x-scroll w-full space-x-6 p-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project.name}`} className="relative group w-96 h-60 flex-shrink-0">
      <motion.img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover rounded-lg shadow-lg"
        whileHover={{ scale: 1.05 }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-start p-4 transition">
        <h3 className="text-lg font-semibold">{project.name}</h3>
      </div>
    </Link>
  );
};

const ProjectDetail = ({ name }) => {
  const project = projects.find((p) => p.name === name);
  if (!project) return <div className="text-center text-white">Project not found</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
      <p className="text-lg mb-4">{project.description}</p>
      <p>
        Check it out here: <a href={project.link} className="text-blue-400 underline">Live Project</a>
      </p>
      <p>
        View the code: <a href={project.repo} className="text-blue-400 underline">GitHub Repository</a>
      </p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:name" element={<ProjectDetailWrapper />} />
      </Routes>
    </Router>
  );
};

const ProjectDetailWrapper = () => {
  const { name } = useParams();
  return <ProjectDetail name={name} />;
};

export default App;
