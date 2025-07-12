import React, { FC } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

interface HeaderProps extends TouchableOpacityProps {
    appName: string;
    icon?: React.ReactNode;
}
const Header: FC<HeaderProps> = ({ appName, icon, ...props }) => {
    return (
        <View className=' w-full'>
            <View className=' flex-row justify-between px-6'>
                <View >
                    <Text className='text-white font-qblod text-2xl '>{appName}</Text>
                </View>
                <TouchableOpacity
                    {...props}
                    className="p-2 rounded-lg bg-lightDark"
                >
                    {icon}
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Header;