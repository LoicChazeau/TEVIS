import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import History from "../components/home/History";
import Logo from "../components/home/Logo";
import Newcomment from "../components/home/Newcomment";
import Searchbar from "../components/home/Searchbar";
import Settings from "../components/home/Settings";
import Whathot from "../components/home/Whathot";

export default function Home({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={{ flex: 0.4 }}></View>
			<View style={{ flex: 1.75 }}>
				<View style={styles.header}>
					<View style={{ paddingLeft: 10 }}>
						<Logo />
					</View>
					<Searchbar />
					<View style={styles.signin}>
						<View style={styles.square}>
							<TouchableOpacity onPress={() => navigation.navigate("Login")} style={{ flex: 1 }} >
								<View style={{ alignItems: 'center' }}>
									<Text style={styles.text}>Sign In</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
			<View style={styles.whathot}>
				<TouchableOpacity onPress={() => navigation.navigate("Login")} style={[{ flex: 1 }]}>
					<Whathot />
				</TouchableOpacity>
			</View>
			<View style={{ flex: 0.9 }}></View>
			<View style={styles.newcomment}>
				<TouchableOpacity style={{ flex: 1 }}>
					<Newcomment />
				</TouchableOpacity>
			</View>
			<View style={[{ flex: 0.9 }]}></View>
			<View style={styles.history}>
				<TouchableOpacity style={{ flex: 1 }}>
					<History />
				</TouchableOpacity>
			</View>
			<View style={[{ flex: 0.75 }]}></View>
			<View style={{ flex: 1.8, alignItems: "center" }}>
				<View style={styles.settings}>
					<TouchableOpacity onPress={() => navigation.navigate("Settings")} style={[{ flex: 1.5 }]}>
						<Settings />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1A1C1E",
		justifyContent: "center"
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	signin: {
		justifyContent: "center",
		alignItems: 'center',
		paddingRight: 10
	},
	whathot: {
		flex: 2,
		backgroundColor: "#F96E4F",
		justifyContent: "center",
		marginTop: 20,
	},
	newcomment: {
		flex: 2,
		backgroundColor: "#EAC652",
		justifyContent: "center"
	},
	history: {
		flex: 2,
		backgroundColor: "#EAC652",
		justifyContent: "center"
	},
	settings: {
		backgroundColor: "#EAC652",
		flex: 1,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		width: "27%"
	},
	square: {
		width: 90,
		height: 40,
		borderRadius: 10,
		borderColor: '#2D9BF0',
		borderStyle: 'solid',
		borderWidth: 3,
		backgroundColor: "#313335",
		justifyContent: 'center',
		paddingBottom: 4,
	},
	text: {
		fontSize: 22,
		color: "#2D9BF0",
	}
});
