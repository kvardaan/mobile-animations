import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import Notification from "@/components/Notification";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
	const [showNotification, setShowNotification] = useState<boolean>(false);

	return (
		<SafeAreaView edges={["bottom", "left", "right", "top"]} style={{ flex: 1 }}>
			<View style={styles.container}>
				<Pressable onPress={() => setShowNotification(true)} style={styles.button}>
					<Text style={styles.buttonText}>Show Notification</Text>
				</Pressable>
			</View>
			{showNotification && (
				<Notification visible={showNotification} onRequestClose={() => setShowNotification(false)} message="gm chat!" />
			)}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		position: "relative",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 20,
		color: "#00000050",
	},
	button: {
		borderRadius: 8,
		backgroundColor: "orange",
		paddingHorizontal: 16,
		paddingVertical: 8,
	},
	buttonText: {
		color: "white",
		fontWeight: 500,
		fontSize: 16,
	},
});
