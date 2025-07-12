import { LinearGradient } from "expo-linear-gradient";
import React, { FC } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';


type Size = "sm" | "lg";

interface ButtonsProps extends TouchableOpacityProps {
    title: string;
    isLoading?: boolean;
    buttonSize?: Size;
}

const Buttons: FC<ButtonsProps> = ({ title, isLoading, buttonSize = "sm", ...props }) => {
    const baseStyle = "items-center justify-center rounded-full";
    const buttonsSizeStyle: Record<Size, string> = {
        sm: "w-24 py-3",
        lg: "w-[90%] py-4",
    };

    return (
        <TouchableOpacity className="w-full" {...props}>
            <LinearGradient
                colors={["#E9A319", "#FAD59A", "#B5FCCD"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ borderRadius: 10 }}
                className={`${baseStyle} ${buttonsSizeStyle[buttonSize]}`}
            >
                {isLoading ? (
                    <ActivityIndicator color="white" />
                ) : (
                    <Text className="text-[#443627] font-qblod">{title}</Text>
                )}
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default Buttons;
