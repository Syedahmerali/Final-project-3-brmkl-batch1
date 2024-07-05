import Head from 'next/head';

const Journey = () => {
  const education = [
    {
      year: '2010 - 2012',
      title: 'Bachelor of Arts - Karachi University',
      description: 'Major Subjects Political Science & International Relation.'
    },
    {
      year: '2007 - 2011',
      title: 'Diploma in Textile Designing from Sadequien Institute of Arts',
      description: 'Subjects & Clases Weiving, History of Arts, Scatching, sculpture, Acrylic paint preparation, Screen exposing of, Fabric, Apparel, Upholstery, Cushion, Bedsheets, Designing Hot dyeing, Cold dyeing Proces, all kinds of Fabric Printing   .'
    },
    {
      year: '2005 - 2006',
      title: 'Diploma in Commerce - Commercial Education',
      description: 'Major Subjects Shorthand, Typing, Advance Acoounting.'
    },
    {
        year: '2003 - 2004',
        title: 'Pak German Technical High School - Computer science',
        description: 'Major Subjects Computer Science, Technical Drawing.'
    },
  ];

  const experience = [
    {
      year: '2017 - 2024',
      title: 'Karachi Development Authority',
      description: 'As a (Desktop Support Executive) on Contract Basis at Recoveries Account Department Duties: Lan, Wan, ERP Installation, Windows installation, Documentation, Printer, Installation & troubleshooting.'
    },
    {
      year: '2022',
      title: 'Farwah Enterprises',
      description: ' worked as a (Desktop Support executive) Part-Time.'
    },
    {
      year: '2016 - 2017',
      title: 'Karachi Shipyard, West (Warf) Road, Kemari, Karachi',
      description: 'as a (Store Keeper) Responsibilities:- Allowing the vendor and vehicle to enter through the main door, checking the seal of the container, matching the seal number with the documents, making the gate pass, checking the condition of the goods/ items to ensure that there is no damage, measuring, weighing, counting according to the indent, make each item file separately attaching its documents  with vendors bill, sending intimation to the indenter, safely handing over the goods to the assistant store keeper in the store, racking in the safe place in the store, and handing over the item to the indenter in response of intimation. Make each item bill and handing over it to the procurement department along with file.'
    }
  ];

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-sky-950 to-sky-700">
      <div className="bg-transparent border border-spacing-6 border-sky-500 rounded-lg p-8 shadow-lg text-white max-w-4xl w-[90%]">
        <h1 className="text-4xl font-bold mb-8 text-center">
          My <span className="text-blue-400">Journey</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            {education.map((item, index) => (
              <div key={index} className="bg-sky-950 border border-blue-500  rounded-lg p-4 mb-4 shadow-md">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-400 w-2 h-2 rounded-full mr-2"></div>
                  <span className="text-blue-400">{item.year}</span>
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            {experience.map((item, index) => (
              <div key={index} className="bg-sky-950 border border-blue-500 rounded-lg p-4 mb-4 shadow-md">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-400 w-2 h-2 rounded-full mr-2"></div>
                  <span className="text-blue-400">{item.year}</span>
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
