import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Server,
  Globe,
  Download,
} from "lucide-react";

export default function Index() {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://cdn.builder.io/api/v1/assets/6d207ab9eab84a4a8f14186015210816/malleswararao-duggineni-java.pdf-69aa78";
    link.download = "Malleswararao_Duggineni_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = {
    "Programming Languages": ["Java 8", "Python", "C/C++"],
    "Frameworks & Technologies": [
      "Spring Boot",
      "Spring MVC",
      "JPA",
      "REST APIs",
    ],
    Databases: ["MySQL", "SQL"],
    "Tools & IDEs": [
      "Eclipse",
      "Visual Studio Code",
      "Git",
      "Maven",
      "Postman",
      "JUnit",
    ],
    "Web Technologies": ["HTML", "CSS", "Bootstrap"],
  };

  const experience = [
    {
      title: "Software Developer",
      company: "W3Softech Pvt. Ltd",
      location: "Hyderabad, Telangana",
      period: "June 2024 - Present",
      responsibilities: [
        "Developed and maintained RESTful APIs for backend services using Java 8 and Spring Boot framework",
        "Implemented clean architecture patterns with controller-service-repository layers for maintainable code structure",
        "Integrated MySQL database for data persistence and optimized database queries using JPA (Java Persistence API)",
        "Built comprehensive CRUD operations with advanced features including pagination and sorting for efficient data handling",
        "Consumed and tested APIs extensively using Postman and developed automated test cases with JUnit framework",
        "Collaborated effectively in Agile development environments using Git for version control and team coordination",
        "Applied Java 8 features including Streams API and Optional for enhanced data processing and null-safe operations",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "RVR & JC College of Engineering",
      location: "Guntur, Andhra Pradesh",
      period: "August 2020 - May 2024",
    },
    {
      degree: "Intermediate (Mathematics, Physics, Chemistry)",
      institution: "Narayana Junior College",
      location: "Andhra Pradesh",
      period: "",
    },
  ];

  const projects = [
    {
      title: "Employee Management API",
      technologies: [
        "Java 8",
        "Spring Boot",
        "MySQL",
        "JPA",
        "Postman",
        "REST APIs",
      ],
      description:
        "Designed and developed a comprehensive full-stack RESTful API system for employee management operations",
      features: [
        "Created secure endpoints for complete CRUD functionality including create, update, delete, and view employee records",
        "Implemented robust backend architecture using Spring Boot framework with MySQL database integration",
        "Utilized Java 8 modern features such as Streams API and Optional classes for efficient data processing and handling",
        "Conducted thorough API testing and validation using Postman to ensure reliability and performance",
        "Applied industry best practices for REST API design including proper HTTP status codes and error handling",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-primary">
              Malleswararao Duggineni
            </h1>
            <div className="hidden md:flex space-x-6">
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a
                href="#experience"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-hero-from to-hero-to text-white rounded-2xl p-8 md:p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Malleswararao Duggineni
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-blue-100">
                Java Backend Developer
              </p>
              <p className="text-lg mb-8 text-blue-50 max-w-3xl mx-auto">
                Java Backend Developer with 1+ years of experience in developing
                and maintaining RESTful APIs using Java 8, Spring Boot, and
                MySQL. Demonstrated expertise in object-oriented programming,
                microservices architecture, and clean code principles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-blue-100">
                  <MapPin className="w-4 h-4" />
                  <span>Guntur, Andhra Pradesh, India</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <Mail className="w-4 h-4" />
                  <span>malleswararaoduggineni@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-blue-100">
                  <Phone className="w-4 h-4" />
                  <span>9392570818</span>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" variant="secondary" className="mr-4">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                  onClick={handleResumeDownload}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am a passionate Java Backend Developer with expertise in
                  building scalable enterprise applications. With a strong
                  foundation in object-oriented programming and modern
                  development practices, I specialize in creating robust RESTful
                  APIs using Java 8 and Spring Boot. My experience includes
                  working with microservices architecture, database
                  optimization, and Agile development methodologies. I'm
                  committed to writing clean, maintainable code and delivering
                  high-quality solutions that meet business requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {category === "Programming Languages" && (
                      <Code className="w-5 h-5 text-primary" />
                    )}
                    {category === "Databases" && (
                      <Database className="w-5 h-5 text-primary" />
                    )}
                    {category === "Frameworks & Technologies" && (
                      <Server className="w-5 h-5 text-primary" />
                    )}
                    {category === "Web Technologies" && (
                      <Globe className="w-5 h-5 text-primary" />
                    )}
                    {category === "Tools & IDEs" && (
                      <Code className="w-5 h-5 text-primary" />
                    )}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Professional Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <Card key={index} className="mb-6">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {exp.company}
                      </CardDescription>
                      <CardDescription>{exp.location}</CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      <CardDescription className="text-base font-medium text-primary">
                        {edu.institution}
                      </CardDescription>
                      <CardDescription>{edu.location}</CardDescription>
                    </div>
                    {edu.period && (
                      <Badge variant="outline">{edu.period}</Badge>
                    )}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="mb-6">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Additional Information
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">
                      Version Control
                    </h3>
                    <p className="text-muted-foreground">
                      Proficient in Git for collaborative development and code
                      management
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">
                      Database Management
                    </h3>
                    <p className="text-muted-foreground">
                      Experience with query optimization and database design
                      principles
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">
                      API Development
                    </h3>
                    <p className="text-muted-foreground">
                      Strong understanding of RESTful web services and API
                      documentation
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">
                      Problem Solving
                    </h3>
                    <p className="text-muted-foreground">
                      Excellent analytical and debugging skills with attention
                      to detail
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-lg text-muted-foreground mb-8">
                  I'm always interested in hearing about new opportunities and
                  collaborating on exciting projects. Feel free to reach out if
                  you'd like to connect!
                </p>
                <div className="space-y-4">
                  <Button size="lg" className="w-full sm:w-auto">
                    <Mail className="w-4 h-4 mr-2" />
                    malleswararaoduggineni@gmail.com
                  </Button>
                  <div className="flex justify-center">
                    <Button variant="outline" size="lg">
                      <Phone className="w-4 h-4 mr-2" />
                      +91 9392570818
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Malleswararao Duggineni. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
