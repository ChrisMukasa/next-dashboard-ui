import UserCard from "@/components/cards/UserCard";
import CountChart from "@/components/charts/CountChart";
import Card from "@/components/Card";
import AttendanceChart from "@/components/charts/AttendanceChart";
import FinanceChart from "@/components/charts/FinanceChart";
import EventCalendar from "@/components/events/EventCalendar";
import CardTitle from "@/components/cards/CardTitle";
import EventList from "@/components/events/EventList";
import AnnouncementList from "@/components/events/AnnouncementList";
import CardTitleDetail from "@/components/cards/CardTitleDetail";

const AdminPage = () => {
  return (
      <div className='flex flex-col md:flex-row p-4 gap-4 '>
          {/*LEFT SIDE*/}
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            {/*CARD*/}
              <div className="flex gap-4 justify-between flex-wrap">
                  <UserCard title={'2024/12'} type='studend'/>
                  <UserCard title={'2024/12'} type='parent'/>
                  <UserCard title={'2024/12'} type='teacher'/>
                  <UserCard title={'2024/12'} type='staff'/>
              </div>
              {/*MIDDLE CHART*/}
              <div className="flex gap-4 flex-col lg:flex-row">
                  <Card className='w-full lg:w-1/3 h-[450px]'>
                      <CountChart/>
                  </Card>
                  <Card className='w-full lg:w-2/3 h-[450px]'>
                      <AttendanceChart/>
                  </Card>
              </div>
              {/*BOTTOM CHART*/}
              <div className="w-full h-[400px]">
                  <Card className='w-full h-full'>
                      <FinanceChart/>
                  </Card>
              </div>
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

export default AdminPage