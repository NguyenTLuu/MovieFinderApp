import React, {useState} from "react";
import {ActivityIndicator, FlatList, Text, View, Image} from "react-native";
import {icons} from "@/constants/icons";
import {images} from "@/constants/images";
import MovieCard from "@/components/MovieCard";
import useFetch from "@/services/useFetch";
import {fetchMovies} from "@/services/api";
import {useRouter} from "expo-router";
import SearchBar from "@/components/SearchBar";
import {error} from "@expo/fingerprint/cli/build/utils/log";

const Search = () => {
	const [searchQuery, setSearchQuery] = useState("");

	const {
		data: movies,
		loading,
		error,
	} = useFetch(() => fetchMovies({query: searchQuery}));

	const movieList = movies || [];

	return (
		<View className="flex-1 bg-black">
			<Image
				className="flex-1 absolute w-full h-full z-0"
				resizeMode="cover"
				source={images.bg}
			/>

			<FlatList
				data={movies}
				renderItem={({item}) => <MovieCard {...item} />}
				keyExtractor={(item) => item.id.toString()}
				numColumns={3}
				className="px-5"
				columnWrapperStyle={{
					justifyContent: "center",
					gap: 16,
					marginVertical: 16,
				}}
				contentContainerStyle={{paddingBottom: 100}}
				ListHeaderComponent={
					<>
						<View className="w-full flex-row justify-center mt-20 items-center">
							<Image source={icons.logo} className="w-12 h-10"/>
						</View>

						<View className="my-5">
							<SearchBar placeholder="Search movies..."
									   onChangeText={(text: string) => setSearchQuery(text)} value={searchQuery}/>
						</View>

						{loading && (
							<ActivityIndicator size="large" color="#0000ff" className="my-3"/>
						)}

						{error && (
							<Text className="text-red-500 px-5 my-3">
								Error: {error.message}
							</Text>
						)}

						{!loading && !error && searchQuery.trim() && movieList?.length > 0 && (
							<Text className="text-white text-xl font-bold">
								Search results for{" "}
								<Text className="text-purple-400">{searchQuery}</Text>
							</Text>
						)}
					</>
				}
			/>
		</View>
	);
};

export default Search;
