import {Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {Tabs} from 'expo-router';
import {Image} from 'expo-image';
import {images} from '@/constants/images';
import {icons} from '@/constants/icons';

const TabIcon = ({focused, icon, title}: any) => {
	if (focused) {
		return (
			<ImageBackground
				source={images.highlight}
				resizeMode="stretch"
				className="flex flex-1 flex-row w-full min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
			>
				<Image source={icon} tintColor="#151312" style={{width: 20, height: 20}}/>
				<Text style={{marginLeft: 8, fontWeight: '600', fontSize: 16, color: '#151312'}}>
					{title}
				</Text>
			</ImageBackground>
		);
	} else {
		return (
			<View style={{justifyContent: 'center', alignItems: 'center', marginTop: 16}}>
				<Image source={icon} tintColor="#A8B5DB" style={{width: 20, height: 20}}/>
			</View>
		);
	}
};

const _Layout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarItemStyle: {
					width: '100%',
					height: '100%',
					justifyContent: 'center',
					alignItems: 'center',
				},
				tabBarStyle: {
					backgroundColor: '#0f0D23',
					borderRadius: 50,
					marginHorizontal: 20,
					marginBottom: 36,
					height: 52,
					position: 'absolute',
					overflow: 'hidden',
					borderWidth: 1,
					borderColor: '#0f0D23',
				}
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					headerShown: false,
					title: 'Home',
					tabBarIcon: ({focused}) => (
						<TabIcon focused={focused} icon={icons.home} title="Home"/>
					),
				}}
			/>
			<Tabs.Screen
				name="search"
				options={{
					headerShown: false,
					title: 'Search',
					tabBarIcon: ({focused}) => (
						<TabIcon focused={focused} icon={icons.search} title="Search"/>
					),
				}}
			/>
			<Tabs.Screen
				name="saved"
				options={{
					headerShown: false,
					title: 'Saved',
					tabBarIcon: ({focused}) => (
						<TabIcon focused={focused} icon={icons.save} title="Saved"/>
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					headerShown: false,
					title: 'Profile',
					tabBarIcon: ({focused}) => (
						<TabIcon focused={focused} icon={icons.person} title="Profile"/>
					),
				}}
			/>
		</Tabs>
	);
};

export default _Layout;

