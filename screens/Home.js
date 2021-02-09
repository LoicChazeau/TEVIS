import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { connect } from 'react-redux'

import History from "../components/home/History";
import Logo from "../components/home/Logo";
import Newcomment from "../components/home/Newcomment";
import Searchbar from "../components/home/Searchbar";
import Settings from "../components/home/Settings";
import Whathot from "../components/home/Whathot";

class Home extends React.Component {
	render() {
		if (this.props.user.email == null) {
			var login =
				<View style={styles.signin}>
					<View style={styles.square}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{ flex: 1 }} >
							<View style={{ alignItems: 'center' }}>
								<Text style={styles.text}>Sign In</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
		} else {
			var login =
				<TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
					<Image
						source={require("../assets/avatar.png")}
						style={styles.avatar}
					/>
				</TouchableOpacity>
		}
		return (
			<View style={styles.container}>
				<View style={{ flex: 0.4 }}></View>
				<View style={{ flex: 1.75 }}>
					<View style={styles.header}>
						<View style={{ paddingLeft: 10 }}>
							<Logo />
						</View>
						<Searchbar />

						<View>
							{login}
						</View>

					</View>
				</View>
				<View style={styles.whathot}>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')} style={[{ flex: 1 }]}>
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
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')} style={[{ flex: 1.5 }]}>
							<Settings />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
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
	avatar: {
		width: 80,
		height: 80,
		resizeMode: 'contain',
		marginRight: 15
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

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Home)
