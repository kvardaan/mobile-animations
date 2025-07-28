import { Animated, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";

interface iNotificationProps {
	visible: boolean;
	onRequestClose: () => void;
	message?: string;
}

const Notification = ({ visible = true, onRequestClose, message }: iNotificationProps) => {
	useEffect(() => {
		if (visible) {
			setTimeout(() => {
				onRequestClose();
			}, 2500);
		}
	}, [visible, onRequestClose]);

	return (
		<>
			{visible && (
				<Animated.View style={styles.container}>
					<View style={styles.subContainer}>
						<Text style={styles.message}>{message}</Text>
					</View>
				</Animated.View>
			)}
		</>
	);
};

export default Notification;

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		width: "100%",
		alignItems: "center",
		zIndex: 2,
	},
	subContainer: {
		top: 80,
		height: 64,
		width: "90%",
		flexDirection: "row",
		alignItems: "center",
		columnGap: 8,
		borderRadius: 8,
		backgroundColor: "white",
		paddingHorizontal: 4,
		elevation: 5,
		boxShadow: "0 0 5px 1px rgba(0,0,0,0.25)",
	},
	animation: {
		width: 48,
		height: 48,
	},
	message: {
		flex: 1,
		fontSize: 20,
		color: "#000000",
		fontWeight: 600,
		letterSpacing: -0.5,
	},
});
