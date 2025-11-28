// Subsidiaries Page
const Subsidiaries = () => {
  const subsidiariesData = {
  bangladesh: [
    {
      id: 1,
      name: 'Shah International & Women',
      description: 'Specializing in skilled workforce recruitment for both male and female workers across various sectors.',
      services: ['Manufacturing', 'Healthcare', 'Hospitality', 'Construction'],
      established: '2010',
      employees: '500+'
    },
    {
      id: 2,
      name: 'Afran Khan International',
      description: 'Premier recruitment agency focusing on technical and professional workforce placement.',
      services: ['Engineering', 'IT Services', 'Management', 'Technical'],
      established: '2015',
      employees: '300+'
    },
    {
      id: 3,
      name: 'Khan Builders',
      description: 'Construction and infrastructure development with skilled labor supply.',
      services: ['Construction', 'Civil Engineering', 'Project Management', 'Labor Supply'],
      established: '2012',
      employees: '750+'
    },
    {
      id: 4,
      name: 'Training Center',
      description: 'Comprehensive skill development and training programs for aspiring workers.',
      services: ['Skill Training', 'Language Courses', 'Certification Programs', 'Job Preparation'],
      established: '2018',
      employees: '100+'
    }
  ],
  mauritius: [
    {
      id: 5,
      name: 'BMK International',
      description: 'Leading manpower solutions provider in Mauritius with diverse industry coverage.',
      services: ['Tourism', 'Manufacturing', 'Retail', 'Services'],
      established: '2016',
      employees: '200+'
    },
    {
      id: 6,
      name: 'B. Newaz International',
      description: 'Strategic workforce management and recruitment excellence in Mauritius.',
      services: ['Professional Services', 'Finance', 'Healthcare', 'Education'],
      established: '2017',
      employees: '150+'
    },
    {
      id: 7,
      name: 'SS Khan',
      description: 'Specialized recruitment and HR solutions for growing businesses.',
      services: ['HR Consulting', 'Recruitment', 'Payroll Services', 'Training'],
      established: '2019',
      employees: '100+'
    }
  ]
};
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2d3190] mb-4">Our Subsidiaries</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A network of specialized companies delivering excellence across industries
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#2d3190] mb-8">Bangladesh Operations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {subsidiariesData.bangladesh.map(sub => (
              <div key={sub.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-[#2d3190]">
                <h3 className="text-2xl font-bold text-[#2d3190] mb-3">{sub.name}</h3>
                <p className="text-gray-700 mb-4">{sub.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Services:</h4>
                  <div className="flex flex-wrap gap-2">
                    {sub.services.map((service, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Established: {sub.established}</span>
                  <span>Employees: {sub.employees}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#2d3190] mb-8">Mauritius Operations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {subsidiariesData.mauritius.map(sub => (
              <div key={sub.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-[#2d3190]">
                <h3 className="text-2xl font-bold text-[#2d3190] mb-3">{sub.name}</h3>
                <p className="text-gray-700 mb-4">{sub.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Services:</h4>
                  <div className="flex flex-wrap gap-2">
                    {sub.services.map((service, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Established: {sub.established}</span>
                  <span>Employees: {sub.employees}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

  export default Subsidiaries;