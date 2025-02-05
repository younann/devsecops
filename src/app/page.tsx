export default function Home() {
  return (
    <div className="h-full">
      <div className="flex flex-col items-center justify-center text-center p-5 animate-fadeIn perspective-1000">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 transform transition-transform duration-500 animate-bounce">
          Final Project for DevSecOps Course
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 transform transition-transform duration-500 animate-bounce">
          Integrating Development, Security, and Operations
        </h2>
        <article className="max-w-2xl mt-4 animate-slide-in">
          <p className="mb-4">
            Welcome to the final project for the DevSecOps course! This project
            aims to integrate development, security, and operations practices to
            create a seamless workflow that enhances software delivery while
            ensuring security at every stage.
          </p>
          <p>
            In this project, we will demonstrate how to implement DevSecOps
            principles by automating security checks, integrating security tools
            into the CI/CD pipeline, and fostering a culture of security
            awareness among team members.
          </p>
        </article>
      </div>

      <section className="bg-gray-100 h-screen">
        <div className="container mx-auto p-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-center pb-5">
            Meet the Team
          </h2>
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-xl mb-2">Younan Nwesre</h3>
                <p className="text-gray-600">DevSecOps Engineer</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-xl mb-2">Abed Haj Yehaya</h3>
                <p className="text-gray-600">Security Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
