

import { View, Text } from 'react-native'
import React from 'react'
import { Data } from '../App'

type Props = {
    data:Data;
}


type Props2 ={
    num:number|string;
    text:string;
    [other:string]:any;
    // className:string;
}
const Card=({num,text,...other}:Props2)=> {
    return(
        <>
        <View className=' flex justify-center items-center rounded-md w-36 h-36' {...other}>
            <View>
                <Text className=' dark:text-gray-50 font-semibold text-center'>{num} </Text>
                <Text className='dark:text-gray-50 font-semibold mt-3 '>{text} </Text>
            </View>
        </View>
        </>
    )
}

const CardList = ({data}: Props) => {
  return (
    <View className=' flex flex-row gap-5 flex-wrap my-5 justify-center items-center' >
        <Card text="Public repo" num={data.public_repos} className="bg-blue-400" />
        <Card text="Followers" num={data.followers} className="bg-green-400" />
        <Card text="Following" num={data.following} className="bg-orange-400" />

        {/* <Card text="public repo" num={data.public_repos} className="bg-pink-400" /> */}
        {/* <Card text="public repo" num={data.public_repos} className="bg-purple-400" /> */}

    </View>
  )
}

export default CardList