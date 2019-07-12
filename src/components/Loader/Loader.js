import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { inject, observer } from "mobx-react/native";
import GStyle from '../../utils/GlobalStyles';
import styles from './style';
import LottieView from 'lottie-react-native';

@inject('AppStore')
@observer
export default class Loader extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount = () => {
		try {
			this.props.onRef(this)
		} catch (e) { }
	}

	componentWillUnmount = () => {
		this.props.onRef(null)
	}

	render() {
		const { AppStore } = this.props
		return (AppStore.loaderVisible) &&
			<View style={styles.container}>
          <LottieView source={require('../../../assets/animations/loader.json')} autoPlay={true} loop={true} style={styles.loader}/>
				{/* <Image
					resizeMode={'contain'}
					source={require('../../../assets/images/Loader/full_screen.gif')}
					style={styles.loader} /> */}
			</View>
	}
}