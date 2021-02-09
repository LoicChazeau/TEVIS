import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import Firebase from '../config/Firebase'

class Profile extends React.Component {
	handleSignout = () => {
		Firebase.auth().signOut()
		this.props.navigation.navigate('Login')
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={{ marginTop: 30, alignItems: 'center' }}>
					<View style={styles.circle}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={{ justifyContent: 'center', alignItems: 'center' }}>
							<Image
								source={require("../assets/logotevis.png")}
								style={{ width: 63, height: 63 }}
							/>
						</TouchableOpacity>
					</View>
					<Text style={styles.text}>Profile</Text>
				</View>

				<View style={styles.backinput}>
					<TouchableOpacity style={styles.center}>
						<Text style={styles.input}>Email: {this.props.user.email}</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.backinput}>
					<TouchableOpacity style={styles.center}>
						<Text style={styles.input}>Password: •••••••••••••</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.logoutbtn}>
					<TouchableOpacity onPress={this.handleSignout}>
						<Text style={styles.logout}>Logout</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.row}>
					<Image
						source={require("../assets/avatar.png")}
						style={styles.avatar}
					/>
					<View style={styles.changebtn}>
						<Text style={styles.change}>Change</Text>
					</View>
				</View>

				<View style={styles.historybtn}>
					<TouchableOpacity>
						<View style={styles.text2}>
							<Text style={styles.history}>Like history</Text>
							<Text style={styles.history}>Comment history</Text>
						</View>
					</TouchableOpacity>
				</View>

				<Image
					source={require("../assets/back.png")}
					style={styles.back}
				/>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1A1C1E",
		alignItems: 'center',
	},
	text: {
		fontSize: 36,
		fontWeight: 'bold',
		color: 'white',
		marginTop: 15,
		marginBottom: 20,
	},
	input: {
		color: 'white',
		fontSize: 20,
	},
	center: {
		paddingLeft: 20,
		justifyContent: 'center',
	},
	logout: {
		fontSize: 30,
		color: 'white',
		padding: 7,
	},
	logoutbtn: {
		backgroundColor: '#F96E4F',
		borderRadius: 5,
		width: '40%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	change: {
		fontSize: 28,
		color: 'white',
		padding: 15,
	},
	changebtn: {
		backgroundColor: '#2D9BF0',
		borderRadius: 5,
		marginHorizontal: 20,
	},
	history: {
		fontSize: 20,
		color: 'white',
	},
	historybtn: {
		backgroundColor: '#414BB2',
		borderRadius: 5,
		width: '50%',
		justifyContent: 'center',
	},
	circle: {
		width: 82,
		height: 82,
		borderRadius: 41,
		borderColor: '#2D9BF0',
		borderStyle: 'solid',
		borderWidth: 5,
	},
	backinput: {
		backgroundColor: '#F96E4F',
		width: '100%',
		height: '7%',
		marginBottom: 20,
		justifyContent: 'center',
	},
	back: {
		width: "15%",
		height: "15%",
		resizeMode: 'contain',
		flex: 0.6
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	avatar: {
		width: "80%",
		height: "80%",
		resizeMode: 'contain'
	},
	text2: {
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Profile)
