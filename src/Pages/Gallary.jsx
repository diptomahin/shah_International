// Gallery Page
const Gallery = () => {
  const galleryItems = [
    { id: 1, title: 'Training Center Facilities', category: 'Training' },
    { id: 2, title: 'Worker Orientation Program', category: 'Events' },
    { id: 3, title: 'Bangladesh Office', category: 'Offices' },
    { id: 4, title: 'Mauritius Operations', category: 'Offices' },
    { id: 5, title: 'Skill Development Workshop', category: 'Training' },
    { id: 6, title: 'Graduation Ceremony', category: 'Events' },
    { id: 7, title: 'Construction Projects', category: 'Projects' },
    { id: 8, title: 'Team Building Event', category: 'Events' }
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2d3190] mb-4">Gallery</h1>
          <p className="text-xl text-gray-600">Moments that define our journey</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map(item => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all">
              <div className="aspect-square bg-linear-to-br from-[#2d3190] to-[#4a4fb8] flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <div className="text-6xl mb-4">📸</div>
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 transform translate-y-full group-hover:translate-y-0 transition-transform">
                <span className="text-sm">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;