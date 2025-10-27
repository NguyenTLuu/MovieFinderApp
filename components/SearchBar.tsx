import React, {View, Image, TextInput} from "react-native"
import {icons} from "@/constants/icons";

interface Props {
	placeholder: string,
	onPress?: () => void,
	value: string,
	onChangeText: (text: string) => void,
}

const SearchBar = ({onPress, placeholder, value, onChangeText}: Props) => {
	return (
		<View className="flex-row items-center justify-center w-full bg-dark-200 rounded-full px-5 py-4">
			<Image source={icons.search} resizeMode="contain" className="size-5" tintColor="#ab8bff"/>
			<TextInput
				onPress={onPress}
				onChangeText={onChangeText}
				value={value}
				placeholder={placeholder}
				placeholderTextColor="#ab8bff"
				className="flex-1 ml-2 text-white"
			/>

		</View>
	)
}

export default SearchBar