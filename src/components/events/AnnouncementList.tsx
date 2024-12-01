
const announcements = [
  {
    id: 1,
    title: 'React Js',
    time: '2024-01-30',
    description: 'If you want to use default react-calendar styling to build upon it',
    color: 'bg-lamaSkyLight'
  },
  {
    id: 2,
    title: 'React Js',
    time: '2024-09-04',
    description: 'If you want to use default react-calendar styling to build upon it',
    color: 'bg-lamaPurpleLight'
  },
  {
    id: 3,
    title: 'React Js',
    time: '2024-12-14',
    description: 'If you want to use default react-calendar styling to build upon it',
    color: 'bg-lamaYellowLight'
  }
]

const AnnouncementList = () => {
  return (
      <div className='flex flex-col gap-4'>
        {announcements.map((announcement) => (
            <div key={announcement.id} className={`p-3 rounded-md ${announcement.color}`}>
              <div className="flex items-center justify-between">
                <h1 className="font-medium text-gray-600">{announcement.title}</h1>
                <span className="text-xs text-gray-400 bg-white p-1 flex items-center justify-center rounded-md">{announcement.time}</span>
              </div>
              <p className="mt-2 text-gray-400 text-xs">{announcement.description}</p>
            </div>
        ))}
      </div>
  )
}

export default AnnouncementList