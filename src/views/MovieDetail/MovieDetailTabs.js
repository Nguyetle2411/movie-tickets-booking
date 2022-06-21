import TabPanel from 'components/TabPanel'
import Tabs from 'components/Tabs'
import React from 'react'
import Showtime from './Showtime'

export default function MovieDetailTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className="movie-detail__tabs">
      <Tabs
        value={value}
        onChange={handleChange}
        tabs={[
          { value: 'Lịch chiếu' },
          { value: 'Thông tin' },
          { value: 'Đánh giá' }
        ]}
      />
      <TabPanel value={value} index={0}>
        <Showtime />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="text-white text-center">Chưa có mô tả</div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="text-white text-center">Chưa có đánh giá</div>
      </TabPanel>
    </div>
  )
}
