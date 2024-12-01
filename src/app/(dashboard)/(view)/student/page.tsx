 'use client'

import Card from "@/components/Card";
import EventCalendar from "@/components/events/EventCalendar";
import CardTitle from "@/components/cards/CardTitle";
import EventList from "@/components/events/EventList";
import CardTitleDetail from "@/components/cards/CardTitleDetail";
import AnnouncementList from "@/components/events/AnnouncementList";
import CardTitleStudent from "@/components/cards/CardTitleStudent";
 import BigCalendar from "@/components/calendar/BigCalendar";

const StudentPage = () => {
  return (
      <div className='flex flex-col md:flex-row p-4 gap-4 '>
        {/*LEFT SIDE*/}
        <div className="w-full lg:w-2/3 flex flex-col gap-8">
            <Card className='w-full h-full flex flex-col p-4 gap-8'>
                <CardTitleStudent title={'Schedule (A4)'} />
                <BigCalendar/>
            </Card>
        </div>
        {/*RIGHT SIDE*/}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <Card className='w-full flex flex-col p-4 gap-8'>
            <EventCalendar className='mb-4'/>
            <CardTitle title={'Events'} type={'events'} color='text-grey-500'/>
            <EventList/>
          </Card>
          <Card className='w-full flex flex-col p-4 gap-4'>
            <CardTitleDetail title={'Announcements'} />
            <AnnouncementList/>
          </Card>
        </div>
      </div>
  )
}

export default StudentPage