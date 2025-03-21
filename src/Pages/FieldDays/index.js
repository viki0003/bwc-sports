import React from 'react'
import Banner from '../../Components/FieldDays/Banner/Banner'
import BannerVideo from '../../Components/FieldDays/BannerVideo/BannerVideo'
import FieldDaysSection from '../../Components/FieldDays/FieldDaysSection/FieldDaysSection'
import ChoosePlans from '../../Components/FieldDays/ChoosePlans/ChoosePlans'
import Activity from '../../Components/FieldDays/Activity/Activity'
import FDE from '../../Components/FieldDays/FDE/FDE'
export default function FieldDays() {
  return (
    <>
        <Banner/>
        <BannerVideo/>
        <FieldDaysSection/> 
        <ChoosePlans/>
        <Activity/>
        <FDE/>
    </>
  )
}
