import Pagination from '@/common/components/Pagination'
import SearchField from '@/common/components/SearchField'
import Card from '@/features/components/episodes/Card'
import { episodesData } from '@/features/components/episodes/EpisodesData'
import LgvBebasText from '@/features/news/components/LgvBebasText'

const page = () => {
  return (
    <div className="w-full min-h-screen">
      <div className='max-w-310  mt-40 mx-auto px-4 md:px-6 xl:px-0'>
        <h2 className="text-[#FED403] font-display font-bold leading-[100%] text-[32px]">
          <LgvBebasText>
            ეპიზოდები
          </LgvBebasText>
        </h2>


        <SearchField />


        <div className='flex flex-col gap-6 my-8'>
          {
            episodesData.map(item => {
              return (
                <Card key={item.id} data={item} />
              )
            })
          }
        </div>
        <div className='flex items-center justify-center my-12'>
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default page
