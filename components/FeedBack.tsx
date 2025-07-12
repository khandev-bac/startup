import React, { FC } from 'react'
import { Text, TextInput, TextInputProps, View } from 'react-native'
import Buttons from './Buttons'
interface FeedbackProps extends TextInputProps {
    onPress?: () => Promise<void>
}
const Feedback: FC<FeedbackProps> = ({ onPress, ...props }) => {
    // bg-[#1A1A2E] 
    return (
        <View className='w-full justify-center items-center'>
            <View className='w-[90%] px-4 py-4 bg-[#1A1A2E] rounded-xl'>
                <View className='gap-4'>
                    {/* text */}
                    <Text className='text-white text-2xl font-qblod'>Feedback</Text>
                    <TextInput
                        placeholder='Share your feedback or any feature you want'
                        placeholderTextColor={"gray"}

                        className='bg-dark rounded-md text-white font-qblod'
                        {...props}
                    />
                    <View className='self-end'>
                        <Buttons title='Send' onPress={onPress} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Feedback