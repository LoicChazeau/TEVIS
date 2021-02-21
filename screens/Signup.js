import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Image } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, signup } from '../actions/user'
import Firebase from '../config/Firebase'



class Signup extends React.Component {
	handleSignUp = () => {
		this.props.signup()
		setTimeout(function(){
			let currentUser =  Firebase.auth() 
	
			var formdata = new FormData();
			formdata.append("Id", currentUser.uid);
			formdata.append("Name", currentUser.email);
		
			var requestOptions = {
			method: 'POST',
			body: formdata,
			redirect: 'follow'
			};
		
			fetch("http://127.0.0.1/api/Users", requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));
			
			}, 15000);	console.log ("je passe")
		this.props.navigation.navigate('Home')
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

				<View style={styles.createbtn}>
					<TouchableOpacity onPress={this.handleSignUp}>
						<Text style={styles.text}>Create account</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.loginbtn} >
					<TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
						<Text style={styles.text}>Already registered</Text>
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
	createbtn: {
		backgroundColor: '#F96E4F',
		width: '85%',
		height: '8.5%',
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 90,
		marginBottom: 25,
	},
	loginbtn: {
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
	return bindActionCreators({ updateEmail, updatePassword, signup }, dispatch)
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default Signup = connect(
	mapStateToProps,
	mapDispatchToProps
)(Signup)