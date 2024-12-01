
const events = [
  {
    id: 1,
    title: 'React Js',
    time: '02:30 PM - 4:34 PM',
    description: 'react-calendar styling to build upon it'
  },
  {
    id: 2,
    title: 'React Js',
    time: '02:30 PM - 4:34 PM',
    description: 'If eact-calendar styling to build upon it'
  },
  {
    id: 3,
    title: 'React Js',
    time: '02:30 PM - 4:34 PM',
    description: 'If you want to use defau build upon it'
  }
]

const EventList = () => {
  return (
      <div className='flex flex-col gap-4'>
        {events.map((event) => (
            <div key={event.id} className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple'>
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-gray-600">{event.title}</h1>
                <span className="text-gray-300 text-xs">{event.time}</span>
              </div>
              <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
            </div>
        ))}
      </div>
  )
}

export default EventList