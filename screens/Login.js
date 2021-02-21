
import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Image } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, login, getUser } from '../actions/user'
import Firebase from '../config/Firebase'

class Login extends React.Component {
	componentDidMount = () => {
		Firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.props.getUser(user.uid)
				if (this.props.user != null) {
					console.log(user.displayName)
					this.props.navigation.navigate('Profile')
				}
			}
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={{ flex: 0.5, marginTop: 50 }}>
					<View style={styles.circle}>
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={{ justifyContent: 'center', alignItems: 'center' }}>
							<Image
								source={require("../assets/logotevis.png")}
								style={{ width: 63, height: 63 }}
							/>
						</TouchableOpacity>
					</View>
				</View>

				<TextInput
					style={styles.input}
					onChangeText={email => this.props.updateEmail(email)}
					placeholder='Email'
					placeholderTextColor='#D1D1D1'
					autoCapitalize='none'
				/>
				<TextInput
					style={styles.input}
					onChangeText={password => this.props.updatePassword(password)}
					placeholder='Password'
					placeholderTextColor='#D1D1D1'
					secureTextEntry={true}
				/>

				<View style={styles.loginbtn}>
					<TouchableOpacity onPress={() => this.props.login()}>
						<Text style={styles.text}>Login</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.createbtn} >
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
						<Text style={styles.text}>Create account</Text>
					</TouchableOpacity >
				</View>

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
	input: {
		borderWidth: 4,
		fontSize: 24,
		backgroundColor: 'white',
		borderColor: '#D1D1D1',
		borderRadius: 5,
		height: "8.5%",
		width: '85%',
		paddingLeft: 10,
		marginTop: 25,
	},
	loginbtn: {
		backgroundColor: '#F96E4F',
		width: '85%',
		height: '8.5%',
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 90,
		marginBottom: 25,
	},
	createbtn: {
		backgroundColor: '#2D9BF0',
		width: '85%',
		height: '8.5%',
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		color: 'white',
		fontSize: 24
	},
	circle: {
		width: 82,
		height: 82,
		borderRadius: 41,
		borderColor: '#2D9BF0',
		borderStyle: 'solid',
		borderWidth: 5,
	}
})

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ updateEmail, updatePassword, login, getUser }, dispatch)
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default Login = connect(
	mapStateToProps,
	mapDispatchToProps
)(Login)

